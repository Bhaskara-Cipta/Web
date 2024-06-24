import React from "react";
import Donasi from "../../assets/home/donasi.png";

function PopupDonasi({ onClose }) {
  return (
    <div className="fixed flex flex-col font-poppins rounded-xl shadow-2xl mx-auto my-auto w-[500px] h-fit px-12 py-12 gap-y-8 inset-0 justify-center bg-white ">
      <img src={Donasi} alt="" className="w-fit mx-auto" />
      <h2 className="font-bold text-xl text-center">
        Ayo, jadi sukarelawan untuk menyalurkan bantuan!
      </h2>
      <h2 className="font-bold text-xl text-center">
        Download aplikasi kami untuk ikut membantu sesama di lapangan!
      </h2>
      <button className="font-bold text-xl text-white px-8 py-3 bg-[#508CAE] rounded-xl">
        Download Aplikasi Sekarang
      </button>
      <button
        onClick={onClose}
        className="text-black text-3xl py-2 px-4 rounded-lg absolute right-1 top-1"
      >
        X
      </button>
    </div>
  );
}

export default PopupDonasi;
