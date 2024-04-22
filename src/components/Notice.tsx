import React, { useState } from "react";
import BasicButtons from "./Button";

interface props {
  active: boolean;
  setActive: (_: boolean) => void;
}

const Notice = ({active, setActive}: props) => {
  const [buttonText, setButtonText] = useState("Pay")
  const payNow = () => {
    setActive(!active);
    setButtonText((prevText) => {
      return prevText === "Pay" ? "Unselect" : "Pay"
  })
  };

  return (
    <>
      <div className="border border-[#FFAD92] relative p-2">
        <div className="absolute right-[12px] top-[12px]">
          <div className="w-316px justify-center" onClick={payNow}>
            <BasicButtons
              text={buttonText}
              width="auto"
              paddingX="40px"
              paddingY="8px"
              bgColor="#FA551D"
              hoverColor="#FFAD92"
              fontSize="16px"
            />
          </div>
        </div>
        <div className="flex text-base font-semibold mb-1">
          {/* <p className="mx-2">{transactionId}</p> */}
          {/* <p className="mx-2">{amount}</p> */}
        </div>
        <p className="text-base ">FLL - Failure to Pay</p>
        {/* <p className="text-base ">Issue Date {date}</p> */}
        {/* <p className="text-base ">Plate {plateNumber}</p> */}
        <div className="text-base font-medium text-[#FA551D]">
          View More Information
        </div>
      </div>
    </>
  );
};

export default Notice;
