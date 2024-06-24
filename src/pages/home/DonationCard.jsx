import React from "react";
import CardImg from "../../assets/home/donasiimg.png";
import Bar from "../../assets/home/progressbar.png";
import ArrowRight from "../../assets/home/arrowright.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import "../../index.css";

function DonationCard({ onClick, title, target, nominal, image }) {
  return (
    <div
      className="px-3 py-3 rounded-md shadow-md bg-white w-[360px] flex flex-col justify-center space-y-4 font-poppins cursor-pointer"
      onClick={onClick}
    >
      <div className="w-fit">
        <img src={image} alt="" className="w-fit mb-4 mx-auto" />
        <h2 className="text-[#A0A0A0] font-bold text-xl">
          Penghubung Kebaikan
        </h2>
        <h1 className="font-bold text-xl mb-6">{title}</h1>
        <p className="text-[#A0A0A0] font-bold text-xl mb-2">
          Terkumpul <span className="text-[#508CAE]">Rp {nominal}</span>
        </p>
        <ProgressBar
          completed={60}
          className="mb-4"
          completedClassName="barCompleted"
        />
        <div className="flex pt-4 justify-between border-t-[1px] border-[#102C5B]">
          <p className="text-lg text-[#979797]">Find Out More</p>
          <img src={ArrowRight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
