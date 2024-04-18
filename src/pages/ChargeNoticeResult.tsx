import React from "react";
import "./index.css";

const ParkingChargeNoticeResult = () => {
  return (
    <>
      <div className=" w-screen h-screen bg-[#EFF3FF]">
        <a href="/" className="absolute top-[10px] left-[40px]">
          <img
            src="https://i.ibb.co/HBQk2wd/logo.png"
            alt="logo"
            className="h-[80px] w-auto "
          ></img>
        </a>
        <div className="flex overflow-hidden bg-[#FFF5F3] h-[100px] justify-center items-center text-[#091C62] border-b-2 border-[#FA551D]"> 
            <a className="active text-center py-8 px-6 text-2xl hover:bg-[#FA551D] hover:text-white hover:duration-300" href="/home">Home</a> 
            <a className="active text-center py-8 px-6 text-2xl hover:bg-[#FA551D] hover:text-white hover:duration-300" href="/about">About</a> 
            <a className="active text-center py-8 px-6 text-2xl hover:bg-[#FA551D] hover:text-white hover:duration-300" href="/contact">Contact</a>
        </div>
        <div className="-translate-x-2/4 -translate-y-1/2 absolute inset-y-1/2 inset-x-1/2 w-[720px] max-w-[720px] h-[560px] bg-white rounded-[10px] border border-[#FA551D]">
          <div className="bg-[#FA551D] w-full py-3 px-5 text-white text-xl rounded-t-[10px]">Parking Charge Notice Results</div>
        </div>
      </div>
    </>
  );
};

export default ParkingChargeNoticeResult;
