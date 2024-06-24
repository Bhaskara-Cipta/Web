import React from "react";
import Walogo from "../../assets/gempabumi/walogo.png";
import Fblogo from "../../assets/gempabumi/fblogo.png";
import Iglogo from "../../assets/gempabumi/iglogo.png";
import Xlogo from "../../assets/gempabumi/xlogo.png";
import Linked from "../../assets/gempabumi/linked.svg";

function Popup({ onClose }) {
  return (
    <div className="fixed flex flex-col font-poppins rounded-xl shadow-2xl mx-auto my-auto w-fit h-fit px-12 py-12 inset-0 justify-center bg-white ">
      <h1 className="font-semibold mb-6">Bagikan Lewat</h1>
      <div className="flex justify-center gap-x-8 mb-6">
        <img src={Walogo} alt="" />
        <img src={Fblogo} alt="" />
        <img src={Iglogo} alt="" className="w-[50px]" />
        <img src={Xlogo} alt="" />
      </div>
      <div className="flex border border-[#979797] items-center gap-x-2 pl-4 rounded-lg">
        <img src={Linked} alt="" />
        {/* Link masih dummy blm bisa di copy */}
        <p className="text-[#979797] font-medium text-xs mr4">
          https://siaga/riwayat/riwayatgempa
        </p>
        <button className="text-white font-semibold text-xs bg-[#F17373] rounded-r-lg py-3 px-5">
          Salin
        </button>
      </div>
      <button
        onClick={onClose}
        className="text-black py-2 px-4 rounded-lg absolute right-0 top-0"
      >
        X
      </button>
    </div>
  );
}

export default Popup;
