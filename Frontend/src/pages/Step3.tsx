import React from "react";
import Notice2 from "../components/Notice2";
import "./index.css";
// import { useAppSelector } from "../redux/hooks";

interface props {
  active: boolean;
  setActive: (_: boolean) => void;
}

const Step3 = ({ active, setActive }: props) => {
  // const payAmount = useAppSelector((state) => state.pay.payAmount_redux);
  // const payAmount_string = String(payAmount)
  return (
    <>
      <div className="py-4 px-4">
        <p className="mt-4 mx-1 mb-2 text-base">Parking Charge Notice(s)</p>
        <div className="px-1 mb-4">
          <Notice2
            paying_id="#53274633"
            paying_amount='90.00'
            issueDate="12/01/2022"
          />
        </div>
        <div className="h-auto border border-[#091C62] rounded-[10px] flex flex-col items-end px-4 py-2 mx-1 ">
          <p className="text-base font-medium">Parking Charge Notice: $90.00</p>
          <p className="text-base font-medium">
            Online Payment Convenience: $4.99
          </p>
          <p className="text-base font-medium">
            Total Parking Charge Notice: $94.99
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Step3;
