import React, { useState } from "react";
import BasicButtons from "./Button";
import { useAppSelector } from '../redux/hooks'

interface props {
  active: boolean;
  setActive: (_: boolean) => void;
  paying_id: string;
  paying_amount: string;
  issueDate: string;
}

const Notice = ({active, setActive, paying_id, paying_amount, issueDate}: props) => {
  const [buttonText, setButtonText] = useState("Pay")
  const licensePlateNumber = useAppSelector((state) => state.pay.licensePlateNumber)

  const payNow = () => {
    setActive(!active);
    setButtonText((prevText) => {
      return prevText === "Pay" ? "Unselect" : "Pay"
  })
  };

  return (
    <>
      <div className="border border-[#FFAD92] relative p-2 my-1">
        <div className="flex text-base font-semibold mb-1 justify-between">
          <p className="mx-2">{paying_id}</p>
          <p className="mx-2">${paying_amount}</p>
        </div>
        <p className="text-base ">FLL - Failure to Pay</p>
        <p className="text-base ">Issue Date {issueDate}</p>
        <p className="text-base ">Plate {licensePlateNumber}</p>
        <div>
          <button className="text-base font-medium text-[#FA551D]">
            View More Information
          </button>
        </div>
      </div>
    </>
  );
};

export default Notice;
