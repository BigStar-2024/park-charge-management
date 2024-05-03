import React from "react"; 
import Notice from "../components/Notice";
import { useAppSelector } from "../redux/hooks";
interface props {
  active: boolean;
  setActive: (_: boolean) => void;
}

const Step1 = ({active, setActive}: props) => {
  const payAmount = useAppSelector((state) => state.pay.payAmount_redux)
  const payAmount_string = String(payAmount)
  return (
    <>
      <div className="py-4 px-4 ">
        <div className="text-[#ffffff] text-base font-medium px-4 py-2 bg-[#091C62] rounded-[10px]">
          Search / Step 1
        </div>
        <div className="text-xl px-4 font-lg font-medium tracking-tight mt-4 mb-2">
          Select Parking Charge Notice to Pay
        </div>
        <p className="text-base tracking-tight mx-1">
          The following Parking Charge Notice(s) were found for the information
          entered. Please verify the Parking Charge Notices you would like to
          pay and select options
        </p>
        <p className="mt-4 mx-1 mb-2 text-base">Parking Charge Notice(s)</p>
        <div className="px-1">
            <Notice active={active} setActive={setActive} paying_id="#53274633" paying_amount={payAmount_string} issueDate="12/01/2022"/>
            <Notice active={active} setActive={setActive} paying_id="#43727753" paying_amount={payAmount_string} issueDate="09/21/2022"/>
        </div>
      </div>
    </>
  );
};


export default Step1;
