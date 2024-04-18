import React from "react";
import BasicButtons from "./button";

const Notice = () => {
  return (
    <>
      <div className="border relative p-2">
        <div className="absolute right-[12px] top-[12px]">
          <a className="w-316px justify-center" href="/result">
            <BasicButtons
              text="Pay"
              width="40px"
              paddingX="40px"
              paddingY="8px"
              bgColor="#091C62"
              hoverColor="#FA551D"
              fontSize="20px"
            />
          </a>
        </div>
        <div className="flex text-lg font-semibold mb-1">
          <p className="mx-2">#53274633</p>
          <p className="mx-2">$90.00</p>
        </div>
        <p className="text-base ">FLL - Failure to Pay</p>
        <p className="text-lg ">Issue Date 12/01/2022</p>
        <p className="text-lg ">Plate NTVD97</p>
        <div className="text-base font-medium text-[#FA551D]">
          View More Information
        </div>
      </div>
    </>
  );
};

export default Notice;
