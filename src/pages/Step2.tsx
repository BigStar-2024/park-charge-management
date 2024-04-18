import React from "react"; 
import Notice2 from "../components/Notice2";

interface props {
  active: boolean;
  setActive: (_: boolean) => void;
}

const Step2 = ({active, setActive}: props) => {
  return (
    <>
      <div className="py-4 px-4">
        <div className="text-[#ffffff] text-base font-medium px-4 py-2 bg-[#091C62] rounded-[10px]">
          Search / Step 1 / Step 2
        </div>
        <p className="text-base tracking-tight mx-1 mt-4">
          Please complete all fields with your payment card details and then click "Pay Now"
        </p>
        <p className="mt-4 mx-1 mb-2 text-base">Parking Charge Notice(s)</p>
        <div className="px-1 mb-4">
            <Notice2 active={active} setActive={setActive}/>
        </div>
        <div className="w-full h-auto border border-[#FFAD92] flex flex-col items-end px-4 py-2 ">
          <p className="text-base font-medium">Parking Charge Notice: $90.00</p>
          <p className="text-base font-medium">Online Payment Convenience: $4.99</p>
          <p className="text-base font-medium">Total Parking Charge Notice: $94.99</p>
        </div>
      </div>
    </>
  );
};


export default Step2;
