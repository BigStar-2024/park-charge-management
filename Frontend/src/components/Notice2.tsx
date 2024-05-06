import React, { useEffect, useState } from "react";
import ViewDetailModal2 from "./ViewDetailModal2";
import { useAppSelector } from "../redux/hooks";
import { BASE_URL } from "../config";

interface props {
  paying_id: string;
  paying_amount: string;
  issueDate: string;
}

const Notice2 = ({
  paying_id,
  paying_amount,
  issueDate,
}: props) => {
  const [licensePlateNumber, setLicensePlateNumber] = useState("");
  useEffect(() => {
    fetch(`${BASE_URL}/get-license`, {
      method: "GET"
    }).then((response) => response.json())
      .then((data) => {
        setLicensePlateNumber(data);
      })
  }, [])
  console.log(licensePlateNumber);
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="border border-[#FFAD92] relative p-2 my-1 flex flex-col items-center">
        <div className="flex text-base font-semibold mb-1 justify-between  self-start">
          <p className="mx-2 ">{paying_id}</p>
          <p className="mx-2">${paying_amount}</p>
        </div>
        <p className="text-base  self-start">FLL - Failure to Pay</p>
        <p className="text-base  self-start">Issue Date {issueDate}</p>
        <p className="text-base  self-start">Plate {licensePlateNumber}</p>
        <div className=" self-start">
          <button
            className="text-base font-medium text-[#FA551D]"
            onClick={openModal}
          >
            View More Information
          </button>
        </div>
        <ViewDetailModal2 isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default Notice2;
