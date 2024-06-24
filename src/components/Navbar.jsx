import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/navbar/logo.png";
import PopupAdminLogin from "./PopupAdminLogin";
import PopupResetPassword from "./PopupResetPassword";

function Navbar() {
  const [isAdminLoginVisible, setAdminLoginVisible] = useState(false);
  const [isResetPasswordVisible, setResetPasswordVisible] = useState(false);

  const openAdminLogin = () => {
    setAdminLoginVisible(true);
    setResetPasswordVisible(false);
  };

  const closeAdminLogin = () => {
    setAdminLoginVisible(false);
  };

  const openResetPassword = () => {
    setResetPasswordVisible(true);
    setAdminLoginVisible(false);
  };

  const closeResetPassword = () => {
    setResetPasswordVisible(false);
  };

  return (
    <div className="font-poppins px-16 flex items-center justify-between">
      <img src={Logo} alt="" />
      <ul className="text-xl font-medium hover:text-[#508CAE] cursor-pointer">
        <Link to="/">BERANDA</Link>
      </ul>
      <ul className="text-xl font-medium hover:text-[#508CAE] cursor-pointer">
        <Link to="/gempabumi">GEMPA BUMI</Link>
      </ul>
      <ul className="text-xl font-medium hover:text-[#508CAE] cursor-pointer">
        <Link to="/edukasi">EDUKASI</Link>
      </ul>
      <ul className="text-xl font-medium hover:text-[#508CAE] cursor-pointer">
        <Link to="/profile">PROFIL</Link>
      </ul>
      <button
        className="text-white font-bold py-2 px-4 rounded-lg bg-[#508CAE] hover:opacity-80"
        onClick={openAdminLogin}
      >
        Staff Login
      </button>
      {isAdminLoginVisible && (
        <PopupAdminLogin
          onClose={closeAdminLogin}
          onOpenReset={openResetPassword}
        />
      )}
      {isResetPasswordVisible && (
        <PopupResetPassword
          onClose={closeResetPassword}
          onOpenAdminLogin={openAdminLogin}
        />
      )}
    </div>
  );
}

export default Navbar;
