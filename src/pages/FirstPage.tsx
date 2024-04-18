import React from "react";
import "./index.css";
import StateTextFields from "../components/inputText";
import BasicButtons from "../components/button";

const First = () => {
  return (
    <>
      <div className="firstPage w-screen h-screen ">
        <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% opacity-20"></div>
      </div>
      <div className="-translate-x-2/4 -translate-y-1/2 absolute inset-y-1/2 inset-x-1/2 w-[450px] max-w-[450px] h-[560px] bg-white rounded-[5px]">
        <a href="/" className="absolute top-[20px] left-[20px]">
          <img
            src="https://i.ibb.co/HBQk2wd/logo.png"
            alt="logo"
            className="h-[60px] w-auto"
          ></img>
        </a>
        <div className="flex justify-center items-center mt-10 mb-6">
          <div className="flex flex-col ml-3 text-center">
            <p className="text-[#415467] text-2xl font-bold">PROFESSIONAL</p>
            <p className="text-base text-[#117fb3] font-medium">
              Parking Management
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[#FA551D] text-xl font-bold font-sans tracking-tighter mb-6">
            Manage your parking charge notice
          </div>
          <div className="border border-[#FA551D] flex flex-col items-center w-[360px] h-[300px] rounded-[10px]">
            <div className="mt-5 mb-4">
              <StateTextFields width="316px" label="Parking Charge Number" />
            </div>
            <div className="flex items-center">
              <hr className="w-[100px] h-1 bg-[#FA551D] opacity-30" />
              <div className="mx-4 text-[#FA551D] italic text-xl font-medium font-sans tracking-tighter">
                OR
              </div>
              <hr className="w-[100px] h-1 bg-[#FA551D] opacity-30" />
            </div>
            <div className="flex">
              <div className="my-4 mx-2">
                <StateTextFields width="200px" label="Plate Number" />
              </div>
              <div className="my-4 mx-2">
                <StateTextFields width="100px" label="State" />
              </div>
            </div>
            <a className="w-316px justify-center" href="/result">
              <BasicButtons
                text="Continue"
                width="320px"
                paddingX="50px"
                paddingY="16px"
                bgColor="#FA551D"
                hoverColor="#FFAD92"
                fontSize="20px"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center my-4">
          <p className="text-base">Etico Parking ©2024. All rights reserved</p>
          <div className="flex">
            <a
              href="https://pkg-shared-files.s3.amazonaws.com/brands/etico/docs/privacy.pdf"
              className="text-base text-[blue] underline hover:text-[red]"
            >
              Privacy Policy
            </a>
            <p className="text-base text-[grey] mx-2"> | </p>
            <a
              href="https://pkg-shared-files.s3.amazonaws.com/brands/etico/docs/terms.pdf"
              className="text-base text-[blue] underline hover:text-[red]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
