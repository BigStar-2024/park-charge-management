import React from 'react';

interface props {
  active: boolean;
  setActive: (_: boolean) => void;
}

const Notice2 = ({active, setActive}: props) => {
  
  return (
    <>
      <div className="border border-[#FFAD92] relative p-2">
        <div className="flex text-base justify-between font-semibold mb-1">
          <p className="mx-2">#53274633</p>
          <p className="mx-2">$90.00</p>
        </div>
        <p className="text-base ">Issue Date 12/01/2022 12:48:42</p>
        <p className="text-base ">FLL - Failure to Pay</p>
        <p className="text-base ">Plate NTVD97</p>
        <div className="text-base font-medium text-[#FA551D]">
          View More Information
        </div>
      </div>
    </>
  );
};

export default Notice2;
