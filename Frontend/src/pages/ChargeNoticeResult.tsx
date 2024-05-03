import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1"; 
import BasicButtons from "../components/Button";
import { useAppSelector } from "../redux/hooks";

const ParkingChargeNoticeResult = () => {
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const handlePayPage = () => {
    navigate("/result/violationpay");
  }; 
  const handleHome = () => {
    navigate('/')
  };
  const licensePlateNumber = useAppSelector(
    (state) => state.pay.licensePlateNumber
  );
  const parkingChargeNumber_redux = useAppSelector(
    (state) => state.pay.parkingChargeNumber_redux
  );
  const stateLocation_redux = useAppSelector(
    (state) => state.pay.stateLocation_redux
  );

  useEffect(() => {
    if (parkingChargeNumber_redux==="DX-101" && (licensePlateNumber==="ABCD12" && stateLocation_redux==="Florida")){
      navigate('/')
    }
    else if (parkingChargeNumber_redux || (licensePlateNumber && stateLocation_redux)) {
      navigate("/result");
    }
  }, [])
 
  

  return (
    <>
      <div className="w-screen h-[1720px] bg-[#EFF3FF]">
        <div onClick={handleHome} className="absolute top-[10px] left-[40px]">
          <img
            src="https://i.ibb.co/HBQk2wd/logo.png"
            alt="logo"
            className="h-[80px] w-auto "
          ></img>
        </div>
        <div className="flex overflow-hidden bg-[#FFF5F3] h-[100px] justify-center items-center text-[#091C62] border-b-2 border-[#FA551D]">
          <a
            className="active text-center py-8 px-6 text-2xl hover:bg-[#FA551D] hover:text-white hover:duration-300"
            href="/home"
          >
            Home
          </a>
          <a
            className="active text-center py-8 px-6 text-2xl hover:bg-[#FA551D] hover:text-white hover:duration-300"
            href="/about"
          >
            About
          </a>
          <a
            className="active text-center py-8 px-6 text-2xl hover:bg-[#FA551D] hover:text-white hover:duration-300"
            href="/contact"
          >
            Contact
          </a>
        </div>
        {active && (
          <div className="payNow w-full absolute h-auto pt-4 pb-2 flex bg-[#9ec5ff] justify-center pl-[320px]">
            <div className="text-[#091C62] pr-6 text-lg font-semibold pt-2">
              Amount To Pay: $90.00
            </div>
            <div onClick={handlePayPage}>
              <BasicButtons
                text="Pay Now"
                width="auto"
                paddingX="40px"
                paddingY="8px"
                bgColor="#FA551D"
                hoverColor="#FFAD92"
                fontSize="16px"
              />
            </div>
          </div>
        )}
        <div className="flex justify-center py-20">
          <div className="flex flex-col h-auto w-[720px] max-w-[720px] bg-white rounded-[10px]">
            <div className="bg-[#FA551D] w-full py-3 px-5 text-white text-2xl rounded-t-[10px] font-medium">
              Parking Charge Notice Results
            </div>
            <div className="border-x border-[#FA551D] w-full h-auto">
              <Step1 active={active} setActive={setActive} />
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

export default ParkingChargeNoticeResult;
