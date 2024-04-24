import React from "react";
import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import axios, { AxiosResponse } from 'axios';
import closeBtn from "./assets/Closebtn.svg";
import BasicButtons from "./Button";
import { PDFDocument } from "pdf-lib";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ViewDetailModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfDoc, setPDFDoc] = useState<PDFDocument | null>(null);
  const licensePlateNumber = useAppSelector(
    (state) => state.pay.licensePlateNumber
  );
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    try {
      const response: AxiosResponse<Blob> = await axios.get("http://localhost:4242/getpdffile", {
        responseType: 'blob', // Set the response type to blob
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      // const url = "https://pdf-lib.js.org/assets/with_update_sections.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );
      const pdfdoc = await PDFDocument.load(existingPdfBytes);
      setPDFDoc(pdfdoc);
    } catch (error) {

    }
  };
  useEffect(() => {
    fetchData().then(() => {
      console.log("first:", pdfDoc);
    }).catch((error) => console.error('error'));
  }, []);

  // const handlePrint = (date, payment_type, status, item, charge_number, charge_type, amount_due, amount_paid) => {

  // }

  if (!isOpen) return null;
  return (
    <div className="z-20 absolute top-[-440px] w-auto h-auto mt-[40px] flex items-center justify-center border border-[#091C62] rounded-[10px]">
      <div className="">
        <div className="flex flex-col relative flex-col h-auto w-[600px] max-w-[600px] bg-white rounded-[10px]">
          <div className="bg-[#FA551D] w-full py-3 px-5 text-white text-2xl rounded-t-[10px] font-medium">
            More Information
          </div> 
          <button
            onClick={onClose}
            className="absolute right-[30px] top-3 w-[36px]"
          >
            <img className="close-btn" src={closeBtn} alt="close"></img>
          </button>
          <div className="p-4 flex flex-col">
            <div className="flex justify-between border rounded-t-[5px] text-base py-2 px-4">
              <div>Parking Charge Notice Number:</div>
              <div>43727753</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Created:</div>
              <div>09/21/2022</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Location:</div>
              <div>FLL444(1000)</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>License Plate:</div>
              <div>(FL){licensePlateNumber}</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>VIN:</div>
              <div>1FMRE11WX4HA98250</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Parking Charge Notice:</div>
              <div>FLL-Failure to Pay</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Vehicle Color:</div>
              <div>Black</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Vehicle Make:</div>
              <div>Ford</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Vehicle Model:</div>
              <div>Econoline Cargo</div>
            </div>
            <div className="flex justify-between border-x border-b text-base py-2 px-4">
              <div>Officer:</div>
              <div>FLL-Failure to Pay</div>
            </div>
          </div>
          <div className="border-x w-full h-auto px-4">
            <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
              Notes
            </div>
            <div className="flex flex-col border border-[#grey] w-full h-auto px-4 py-2 rounded-b-[10px] tracking-tight">
              1. TO PAY OR APPEAL Go to the website below. Unpaid parking
              notices may result in your vehicle being booted or towed at your
              risk & expense at any Professinal Parking Management affiliated
              locations. Any dispute must be subnitted WITHIN 15days of the date
              of this notice.
            </div>
          </div>
          <div className="border-x w-full h-auto px-4 py-4">
            <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
              <div className="flex justify-between">
                <p>Total Parking Charge Notice</p>
                <p>$90.00</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto tracking-tight">
              <div className="flex justify-between border-x border-b border-[#grey] px-4 py-2">
                <p>Total Parking Charge Notice</p>
                <p>$55.00</p>
              </div>
              <div className="flex justify-between border-x border-b border-[#grey] px-4 py-2 rounded-b-[10px]">
                <p>10/06/22 Late Amount</p>
                <p>$35.00</p>
              </div>
            </div>
          </div>
          <div className="border-x w-full h-auto px-4 pb-2">
            <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
              Notes
            </div>
            <div className="flex flex-col border border-[#grey] bg-[#FFF5F3] w-full h-auto px-4 py-2 rounded-b-[10px] tracking-tight">
              You cannot appeal any more. Past the appeal date.
            </div>
          </div>
          <div className="border-x w-full h-auto px-4 py-3">
            <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
              Photos:
            </div>
            <div className="flex flex-wrap border justify-center border-[#grey] w-full h-auto px-4 py-4 rounded-b-[10px] tracking-tight">
              <div className="w-[45%] aspect-h-1 aspect-w-1 p-2 border rounded-[10px] border-[#grey]">
                <img
                  src="1.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                ></img>
              </div>
              <div className="w-[45%] aspect-h-1 aspect-w-1 p-2 border rounded-[10px] border-[#grey]">
                <img
                  src="2.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                ></img>
              </div>
              <div className="w-[45%] aspect-h-1 aspect-w-1 p-2 border rounded-[10px] border-[#grey]">
                <img
                  src="3.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                ></img>
              </div>
              <div className="w-[45%] aspect-h-1 aspect-w-1 p-2 border rounded-[10px] border-[#grey]">
                <img
                  src="4.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                ></img>
              </div>
              <div className="w-[45%] aspect-h-1 aspect-w-1 p-2 border rounded-[10px] border-[#grey]">
                <img
                  src="5.jpg"
                  className="h-full w-full object-cover"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-4 mx-4" onClick={onClose}>
              <BasicButtons
                text="Close"
                width="100px"
                paddingX="20px"
                paddingY="8px"
                bgColor="#FA551D"
                hoverColor="#FFAD92"
                fontSize="16px"
              />
            </div>
            <div className="mb-4 mx-4">
              <BasicButtons
                text="Print"
                width="100px"
                paddingX="40px"
                paddingY="8px"
                bgColor="#FA551D"
                hoverColor="#FFAD92"
                fontSize="16px"
              />
            </div>
            <a href="/result/violationpay" className="mb-4 mx-4">
              <BasicButtons
                text="Pay"
                width="100px"
                paddingX="40px"
                paddingY="8px"
                bgColor="#FA551D"
                hoverColor="#FFAD92"
                fontSize="16px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailModal;
