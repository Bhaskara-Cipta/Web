import React from "react";
import Logo from "../assets/navbar/logo.png";

function PopupResetPassword({ onClose, onOpenAdminLogin }) {
  return (
    <div
      className="w-[530px] h-[650px] fixed flex flex-col items-center font-poppins rounded-3xl shadow-2xl 
    mx-auto my-auto inset-0 bg-white"
    >
      <img src={Logo} alt="" className="w-[120px]" />
      <div className="w-full h-[40px] bg-[#508CAE] mb-4"></div>
      <h1 className="font-semibold text-center w-[300px] mb-4">
        Masukkan Ulang Dengan Benar Data Diri Anda!
      </h1>
      <div className="space-y-6 mb-8">
        <div className="w-full">
          <h2 className="font-bold opacity-50 mb-2">Nama Lengkap</h2>
          <input
            type="text"
            placeholder="Masukkan Ulang Nama Lengkap"
            className="font-bold opacity-50 border-b border-[#03014C] w-[372px] pb-2"
          />
        </div>
        <div className="w-full">
          <h2 className="font-bold opacity-50 mb-2">Email</h2>
          <input
            type="text"
            placeholder="Masukkan Ulang Email"
            className="font-bold opacity-50 border-b border-[#03014C] w-[372px] pb-2"
          />
        </div>
        <div className="w-full">
          <h2 className="font-bold opacity-50 mb-2">Password</h2>
          <input
            type="text"
            placeholder="Masukkan Ulang Password"
            className="font-bold opacity-50 border-b border-[#03014C] w-[372px] pb-2"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4 pl-8 mb-6">
        <input type="checkbox" name="" id="" />
        <h1 className="font-semibold text-left w-[400px] h-fit">
          Setuju Dengan{" "}
          <span className="text-[#21408E]">Syarat & Ketentuan</span> Kami
        </h1>
      </div>
      <button className="text-white font-bold py-3 px-12 rounded-lg bg-[#508CAE] hover:opacity-80">
        Masuk Akun
      </button>
      <button
        onClick={onClose}
        className="text-black text-3xl py-2 px-4 rounded-lg absolute right-1 top-1"
      >
        X
      </button>
      <p
        className="absolute bottom-0 bg-[#508CAE] w-full rounded-b-3xl py-3 text-center font-bold cursor-pointer"
        onClick={onOpenAdminLogin}
      >
        Sudah Mempunyai Akun? <span className="text-white">Masuk</span>
      </p>
    </div>
  );
}

export default PopupResetPassword;
