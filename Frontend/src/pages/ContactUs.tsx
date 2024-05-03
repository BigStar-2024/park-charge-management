import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/')
  }

  return (
    <>
      <div className=" w-screen h-screen bg-[#EFF3FF]">
        <div onClick={handleHome} className="absolute top-[10px] left-[40px]">
          <img
            src="https://i.ibb.co/HBQk2wd/logo.png"
            alt="logo"
            className="h-[80px] w-auto "
          ></img>
        </div>
        <div className="flex overflow-hidden bg-[#FFF5F3] h-[100px] justify-center items-center text-[#091C62] border-b-2 border-[#FA551D]">
          <a
            className="active text-center py-8 px-6 text-2xl hover:bg-[#FFAD92] hover:text-white hover:duration-300"
            href="/home"
          >
            Home
          </a>
          <a
            className="active text-center py-8 px-6 text-2xl hover:bg-[#FFAD92] hover:text-white hover:duration-300"
            href="/about"
          >
            About
          </a>
          <a
            className="active text-center py-8 px-6 text-2xl bg-[#FA551D] text-white"
            href="/contact"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center py-20">
          <div className="flex flex-col h-auto w-[720px] max-w-[720px] bg-white rounded-[10px]">
            <div className="bg-[#FA551D] w-full py-3 px-5 text-white text-2xl rounded-t-[10px] font-medium">
              Find Your Parking Charge Notice
            </div>
            <div className="border-x border-[#FA551D] w-full h-auto p-4">
              <p className="text-base tracking-tight p-1 ">
                We are here to answer any questions or concerns you may have
                about the payment of your Parking Charge Notice. If you have any
                inquiries about a Parking Charge Notice that don't involve the
                payment process then please contact the issuing party.
              </p>
              <p className="text-base tracking-tight p-1 ">
                Email: info@cityparkmanagement.com
              </p>
              <p className="text-base tracking-tight p-1 ">
                Phone: 1-844-999-7275
              </p>
              <p className="text-base tracking-tight p-1 ">
                If you are experienceing technical difficulties with this
                website then please click here to report a problem.
              </p>
            </div>
            <div className="flex bg-[#FA551D] w-full h-auto rounded-b-[10px] items-center">
              <div className="  py-3 pl-5 text-white text-lg  font-medium">
                Copyright 2024
              </div>
              <a
                href="https://pkg-shared-files.s3.amazonaws.com/brands/etico/docs/privacy.pdf"
                className="text-base text-white hover:text-[blue] px-4"
              >
                Privacy Policy
              </a>
              <a
                href="https://pkg-shared-files.s3.amazonaws.com/brands/etico/docs/terms.pdf"
                className="text-base text-white hover:text-[blue]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
