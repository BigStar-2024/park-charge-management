import React, { useState } from "react";
import Notice2 from "../components/Notice2";
import SelectIndicator from "../components/SelectState";
import CustomizeInputText from "../components/CustomizeInputText";
import "./index.css";
import Stripe from "./Stripe";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { firstName_redux, lastName_redux } from "../redux/slice/payReducer";

interface props {
  active: boolean;
  setActive: (_: boolean) => void;
}

const Step2 = ({ active, setActive }: props) => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [stateLocation, setStateLocation] = useState("");
  const payAmount = useAppSelector((state) => state.pay.payAmount_redux)
  const payAmount_string = String(payAmount)


  return (
    <>
      <div className="py-4 px-4">
        <div className="text-[#ffffff] text-base font-medium px-4 py-2 bg-[#091C62] rounded-[10px]">
          Search / Step 1 / Step 2
        </div>
        <p className="text-base tracking-tight mx-1 mt-4">
          Please complete all fields with your payment card details and then
          click "Pay Now"
        </p>
        <p className="mt-4 mx-1 mb-2 text-base">Parking Charge Notice(s)</p>
        <div className="px-1 mb-4">
          <Notice2
            paying_id="#53274633"
            paying_amount={payAmount_string}
            issueDate="12/01/2022"
          />
        </div>
        <div className="h-auto border border-[#091C62] flex flex-col items-end px-4 py-2 mx-1">
          <p className="text-base font-medium">Parking Charge Notice: ${payAmount}</p>
          <p className="text-base font-medium">
            Online Payment Convenience: $4.99
          </p>
          <p className="text-base font-medium">
            Total Parking Charge Notice: $94.99
          </p>
        </div>
        <div>
          <div className="w-full h-auto px-1 mt-4">
            <div className="text-[#ffffff] text-lg font-medium px-4 py-2 bg-[#091C62] rounded-t-[10px] tracking-tight">
              Payment Information
            </div>
            <div className="flex flex-col border border-[#091C62] w-full h-auto pr-40 rounded-b-[10px]">
              <div className="flex flex-col items-end">
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    First Name
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(value) => {
                        setFirstName(value);
                        dispatch(firstName_redux(String(value)))
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    Last Name
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(value) => {
                        setLastName(value);
                        dispatch(lastName_redux(String(value)))
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    Address
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="Address"
                      value={address}
                      onChange={(value) => {
                        setAddress(value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    Address2
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="Address2"
                      value={address2}
                      onChange={(value) => {
                        setAddress2(value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    City
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="City"
                      value={city}
                      onChange={(value) => {
                        setCity(value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    State
                  </p>
                  <div>
                    <SelectIndicator
                      width="240px"
                      placeholder="Select State"
                      value={stateLocation}
                      onChange={(e: any, value: string) => {
                        setStateLocation(value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    Zipcode
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="Zipcode"
                      value={zipcode}
                      onChange={(value) => {
                        setZipcode(value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex mt-4">
                  <p className="text-base tracking-tighter mt-1 mr-6 font-medium">
                    Phone Number
                  </p>
                  <div>
                    <CustomizeInputText
                      width="240px"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(value) => {
                        setPhoneNumber(value);
                      }}
                    />
                  </div>
                </div>
                <div className="my-4">
                  <Stripe 
                    firstName={firstName}
                    lastName={lastName}
                    address={address}
                    address2={address2}
                    city={city}
                    zipcode={zipcode}
                    phoneNumber={phoneNumber}
                    stateLocation={stateLocation}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
