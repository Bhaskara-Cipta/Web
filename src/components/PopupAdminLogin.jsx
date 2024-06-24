import React, { useState } from "react";
import Logo from "../assets/navbar/logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function PopupAdminLogin({ onClose, onOpenReset }) {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={signIn}>
      <div
        className="w-[530px] h-[650px] fixed flex flex-col items-center font-poppins rounded-3xl shadow-2xl 
    mx-auto my-auto inset-0 bg-white"
      >
        <img src={Logo} alt="" className="w-[120px]" />
        <div className="w-full h-[40px] bg-[#508CAE] mb-4"></div>
        <h1 className="font-semibold text-center w-[300px] mb-4">
          Selamat Datang di Siaga Gempa! Silahkan Mengisi Form Login
        </h1>
        <div className="space-y-2 mb-8">
          <div className="w-full">
            <h2 className="font-bold opacity-50 mb-2">Nama Lengkap</h2>
            <input
              type="text"
              placeholder="Nisa Ardiana"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
              className="font-bold opacity-50 border-b border-[#03014C] w-[372px] pb-2"
            />
          </div>
          <div className="w-full">
            <h2 className="font-bold opacity-50 mb-2">Email</h2>
            <input
              type="text"
              placeholder="NisaGacor"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="font-bold opacity-50 border-b border-[#03014C] w-[372px] pb-2"
            />
          </div>
          <div className="w-full">
            <h2 className="font-bold opacity-50 mb-2">Password</h2>
            <input
              type="password"
              placeholder="Nisa1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-bold opacity-50 border-b border-[#03014C] w-[372px] pb-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 pl-8 mb-6">
          <input type="checkbox" name="" id="" />
          <h1 className="font-semibold text-left w-[400px] h-fit">
            Dengan Menjadi Admin Berarti Anda Telah Setuju Dengan{" "}
            <span className="text-[#21408E]">Syarat & Ketentuan</span> Kami
          </h1>
        </div>
        <button
          type="submit"
          className="text-white font-bold py-3 px-12 rounded-lg bg-[#508CAE] hover:opacity-80"
        >
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
          onClick={onOpenReset}
        >
          Lupa Kata Sandi? <span className="text-white">Reset</span>
        </p>
      </div>
    </form>
  );
}

export default PopupAdminLogin;
