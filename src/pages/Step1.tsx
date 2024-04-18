import React from "react"; 
import Notice from "../components/Notice";

const Step1 = () => {
  return (
    <>
      <div className="py-4 px-4">
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
        <p className="mt-4 mx-1 mb-2">Parking Charge Notice(s)</p>
        <div className="px-1">
            <Notice />
        </div>
      </div>
    </>
  );
};

export default Step1;
