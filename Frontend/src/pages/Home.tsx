import React from "react";
import CustomizeInputText from "../components/CustomizeInputText";
import CustomizeInputText2 from "../components/CustomizeInputText2";
import BasicButtons from "../components/Button";
import SelectIndicator from "../components/SelectState";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { licensePlateNumber } from "../redux/slice/payReducer";
import { stateLocation_redux } from "../redux/slice/payReducer";
import { parkingChargeNumber_redux } from "../redux/slice/payReducer";


const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [parkingChargeNumber, setParkingChargeNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [stateLocation, setStateLocation] = useState("");
  const [VIN, setVIN] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (parkingChargeNumber || (plateNumber && stateLocation)) {
      navigate("/result");
    } else {
      setError("Please enter the required information.");
    }
  };

  return (
    <>
      <div className=" w-screen h-auto bg-[#EFF3FF]">
        <a href="/" className="absolute top-[10px] left-[40px]">
          <img
            src="https://i.ibb.co/HBQk2wd/logo.png"
            alt="logo"
            className="h-[80px] w-auto "
          ></img>
        </a>
        <div className="flex overflow-hidden bg-[#FFF5F3] h-[100px] justify-center items-center text-[#091C62] border-b-2 border-[#FA551D]">
          <a
            className="active text-center py-8 px-6 text-2xl bg-[#FA551D] text-white"
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
            className="active text-center py-8 px-6 text-2xl hover:bg-[#FFAD92] hover:text-white hover:duration-300"
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
              <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
                Find Your Parking Charge Notice, enter it here:
              </div>
              <div className="flex flex-col border border-[#091C62] w-full h-auto pr-40 rounded-b-[10px]">
                <div className="flex justify-end">
                  <div className="flex mt-8">
                    <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                      Parking Charge Notice Number
                    </p>
                    <div className="flex flex-col ">
                      <div className="mb-4">
                        <CustomizeInputText
                          width="240px"
                          placeholder="Charge Notice Number"
                          value={parkingChargeNumber}
                          onChange={(value) => {
                            setParkingChargeNumber(value);
                            dispatch(parkingChargeNumber_redux(String(value)));
                          }}
                        />
                      </div>
                      <div className="mb-6" onClick={handleContinue}>
                        <BasicButtons
                          text="Search"
                          width="auto"
                          paddingX="20px"
                          paddingY="6px"
                          bgColor="#FA551D"
                          hoverColor="#FFAD92"
                          fontSize="14px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-x border-[#FA551D] w-full h-auto px-4">
              <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
                To see all open Parking Charge Notices for your vehicle, enter
                your license plate number and state here:
              </div>
              <div className="flex flex-col border border-[#091C62] w-full h-auto pr-40 rounded-b-[10px]">
                <div className="flex justify-end">
                  <div className="flex flex-col mt-8">
                    <div className="flex">
                      <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                        License Plate
                      </p>
                      <div className="mb-4">
                        <CustomizeInputText2
                          width="240px"
                          placeholder="License Plate"
                          value={plateNumber}
                          onChange={(value) => {
                            setPlateNumber(value);
                            dispatch(licensePlateNumber(String(value)));
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                        Select State
                      </p>
                      <div className="flex flex-col ">
                        <div className="mb-4">
                          <SelectIndicator
                            width="240px"
                            placeholder="Select State"
                            value={stateLocation}
                            onChange={(value) => {
                              setStateLocation(value);
                              dispatch(stateLocation_redux(String(value)));
                            }}
                          />
                        </div>
                        <div className="mb-4" onClick={handleContinue}>
                          <BasicButtons
                            text="Search"
                            width="auto"
                            paddingX="20px"
                            paddingY="6px"
                            bgColor="#FA551D"
                            hoverColor="#FFAD92"
                            fontSize="14px"
                          />
                        </div>
                        <div>{error && <p className="text-red-500 mb-4">{error}</p>}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-x border-[#FA551D] w-full h-auto p-4">
              <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tighter">
                To see all open Parking Charge Notices for your vehicle, enter
                your VIN number here:
              </div>
              <div className="flex flex-col border border-[#091C62] w-full h-auto pr-40 rounded-b-[10px]">
                <div className="flex justify-end">
                  <div className="flex mt-8">
                    <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                      VIN
                    </p>
                    <div className="flex flex-col ">
                      <div className="mb-4">
                        <CustomizeInputText2
                          width="240px"
                          placeholder="VIN Number"
                          value={VIN}
                          onChange={(value) => {
                            setVIN(value);
                          }}
                        />
                      </div>
                      <div className="mb-6" onClick={handleContinue}>
                        <BasicButtons
                          text="Search"
                          width="auto"
                          paddingX="20px"
                          paddingY="6px"
                          bgColor="#FA551D"
                          hoverColor="#FFAD92"
                          fontSize="14px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Home;
