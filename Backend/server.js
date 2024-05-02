const express = require("express");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require("path");
const cors = require('cors');
const multer = require("multer");
const service_email = "aadsf7463@gmail.com"
const security_key = "hgbntpivrfgotxbv"
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51P2lpQC9Zd6I2Ms1GvOYwHZUIGfQFbny1XJBEdABFVaLlko3erp8Zk5brxb7dHQJj45Hl0kVb3ddFb56nRdEHfwK00XRDvuqaN');

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const http = require("http");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let currentFile = '';

const setCurrentFile = (value) => {
  currentFile = value;
}

const getCurrentFile = () => {
  return currentFile;
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination folder for uploads
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // Get the file extension
    const currentFileName = req.body.id + "receipt" + ext;
    cb(null, currentFileName); // Rename the file with original extension
    console.log(currentFileName);
    setCurrentFile("uploads/" + currentFileName);
  }
})

const upload = multer({ storage: storage });


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

const chargeCustomer = async (customerId) => {
  // Lookup the payment methods available for the customer
  const paymentMethods = await stripe.paymentMethods.list({
    customer: customerId,
    type: "card",
  });
  try {
    // Charge the customer and payment method immediately
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      customer: customerId,
      payment_method: paymentMethods.data[0].id,
      off_session: true,
      confirm: true,
    });
  } catch (err) {
    // Error code will be authentication_required if authentication is needed
    console.log("Error code is: ", err.code);
    const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
    console.log("PI retrieved: ", paymentIntentRetrieved.id);
  }
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Alternatively, set up a webhook to listen for the payment_intent.succeeded event
  // and attach the PaymentMethod to a new Customer
  const customer = await stripe.customers.create();

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: "off_session",
    amount: calculateOrderAmount(items),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get('/getpdffile', async (req, res) => {
  const filePath = path.join(__dirname, 'public', 'document.pdf');
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Length': stat.size,
    'Content-Disposition': 'attachment; filename=example.pdf',
  });


  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
})

app.post("/savepdffile", upload.single('pdfFile'), async(req, res) => {
  res.send('okay')
})

// ---------------------------nodemailer--------------------------


const sendMail = async (data) => {

  // const helpmessages = JSON.stringify(data.helpmessage);
  const messages = JSON.stringify(data.messages);
  const receive_email = JSON.stringify(data.email);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: service_email,
      pass: security_key,
    },
  });
  
  // Use the transporter to send emails
  const currentFileName = getCurrentFile();
  try {
    const res = await transporter.sendMail({
      from: service_email,
      to: receive_email,
      subject: "Hello",
      html: messages,
      attachments: [
        {
          filename: currentFileName.replace("uploads/", ''),
          path: getCurrentFile(),
          contentType: 'application/pdf'
        }
      ]
      // text: helpmessages,
    });
    console.log("success!");
  } catch (error) {
    console.log(error);
  }
};


app.post('/send-email', async (req, res) => {
  // console.log("here is now");
  // console.log(req.body);
  // const { title, content } = req.body;
  // Do something with the name and email data

  sendMail(req.body);


  res.status(201).json({ message: 'User created successfully' });
});
// ---------------------------------------------------------------------


app.listen(4242, () => console.log("Node server listening on port 4242!"));

