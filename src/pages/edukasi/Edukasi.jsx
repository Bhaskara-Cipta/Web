import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../assets/profile/herobgnogradient.png";
import Bumi from "../../assets/edukasi/bumi.png";
import Call from "../../assets/edukasi/call.png";
import informasiLain from "../../assets/edukasi/informasilain.svg";
import GempaBumi from "../../assets/edukasi/gempabumi.png";
import Tsunami from "../../assets/edukasi/tsunami.png";
import Bnpb from "../../assets/edukasi/bnpb.png";
import Pmi from "../../assets/edukasi/pmi.png";
import Sar from "../../assets/edukasi/sar.png";
import SiapSiaga from "../../assets/edukasi/siapsiaga.png";
import Fprb from "../../assets/edukasi/fprb.png";
import Fpt from "../../assets/edukasi/fpt.png";
import DisasterManagement from "../../assets/edukasi/disastermanagement.png";
import Mercy from "../../assets/edukasi/mercycorps.png";
import SiagaBencana from "../../assets/edukasi/siagabencana.png";
import Yeu from "../../assets/edukasi/yakkum.png";
import Kappala from "../../assets/edukasi/kappala.png";
import { useNavigate } from "react-router-dom";

function Edukasi() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Gempa");

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  const handleButtonClick = () => {
    navigate("/edukasigempa");
  };

  const toEdukasiTsunami = () => {
    navigate("/edukasitsunami");
  };

  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero */}
      <section
        className="font-poppins"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></section>

      {/* Navigation */}
      <section className="bg-[#508CAE] py-12 flex items-center justify-evenly">
        <div
          className="flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-900 p-3 rounded-xl gap-y-2"
          onClick={() => handleNavigationClick("Gempa")}
        >
          <img src={Bumi} alt="" />
          <h2 className="font-bold text-2xl text-white">Gempa & Tsunami</h2>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-900 p-3 rounded-xl gap-y-2"
          onClick={() => handleNavigationClick("Kontak")}
        >
          <img src={Call} alt="" />
          <h2 className="font-bold text-2xl text-white">Kontak Darurat</h2>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-900 p-3 rounded-xl gap-y-2"
          onClick={() => handleNavigationClick("Informasi")}
        >
          <img src={informasiLain} alt="" />
          <h2 className="font-bold text-2xl text-white">Informasi Tambahan</h2>
        </div>
      </section>

      {/* Gempa & Tsunami */}
      {activeSection === "Gempa" && (
        <section>
          <div className="flex py-16 px-8">
            <div className="w-1/2 flex items-center justify-center">
              <img src={GempaBumi} alt="" />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start">
              <h2 className="font-bold text-2xl w-[340px] mb-8 border-[#508CAE] border-b-8 pb-1">
                Gempa Bumi
              </h2>
              <p className="text-xl mb-24 w-[600px]">
                Gempa bumi adalah getaran di permukaan bumi yang disebabkan oleh
                pelepasan energi di dalam kerak bumi. Penyebabnya adalah
                pergerakan atau pelepasan energi di dalam kerak bumi, seperti
                pergeseran lempeng tektonik atau aktivitas vulkanik. Gempa
                terjadi saat tegangan di kerak bumi melebihi batas kekuatan
                materialnya, yang menyebabkan batuan pecah atau bergeser,
                menghasilkan gelombang seismik yang dirasakan sebagai guncangan.
              </p>
              <button
                className="text-white bg-[#508CAE] px-4 py-3 font-bold rounded-lg hover:opacity-80"
                onClick={handleButtonClick}
              >
                VIDEO EDUKASI GEMPA
              </button>
            </div>
          </div>
          <div className="flex py-16 px-8 bg-[#508CAE]">
            <div className="w-1/2 flex flex-col justify-center items-end">
              <h2 className="font-bold text-2xl w-[340px] mb-16 border-white border-b-8 pb-1 text-right">
                Tsunami
              </h2>
              <p className="text-xl mb-24 w-[550px] text-right">
                Tsunami adalah gelombang laut besar yang disebabkan oleh
                gangguan besar di dasar laut, seperti gempa bumi, letusan gunung
                berapi, atau longsor bawah laut. Terjadinya tsunami dipicu oleh
                pergerakan vertikal tiba-tiba di dasar laut, yang menghasilkan
                gelombang besar yang merambat dengan kecepatan tinggi melintasi
                samudra.
              </p>
              <button
                className="text-black bg-white px-4 py-3 font-bold rounded-lg hover:opacity-80"
                onClick={toEdukasiTsunami}
              >
                VIDEO EDUKASI TSUNAMI
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src={Tsunami} alt="" />
            </div>
          </div>
        </section>
      )}

      {/* Kontak Darurat */}
      {activeSection === "Kontak" && (
        <section className="flex flex-col py-16">
          <h1 className="font-bold text-4xl text-center">Kontak Darurat</h1>
          <div className="flex justify-evenly items-start">
            <div className="flex flex-col items-center justify-evenly h-[543px] pt-8">
              <img src={Bnpb} alt="" className="w-fit" />
              <h2 className="font-bold text-lg text-center w-[290px]">
                Badan Nasional Penanggulangan Bencana (BNPB)
              </h2>
              <p className="font-bold text-lg text-center">
                Telpon: 021-29827793 <br />
                Email: contact@bnpb.go.id
              </p>
              <p className="font-bold text-lg text-center"></p>
            </div>
            <div className="flex flex-col items-center justify-evenly h-[543px]">
              <img src={Pmi} alt="" className="w-fit" />
              <h2 className="font-bold text-lg text-center w-[237px]">
                Palang Merah Indonesia (PMI)
              </h2>
              <p className="font-bold text-lg text-center">
                Telpon : 021-7992325
              </p>
              <p className="font-bold text-lg text-center"></p>
            </div>
            <div className="flex flex-col items-center justify-evenly h-[543px]">
              <img src={Sar} alt="" className="w-fit mb-8" />
              <h2 className="font-bold text-lg text-center w-[290px] mb-4">
                SAR atau Basarnas
              </h2>
              <p className="font-bold text-lg text-center mt-5">Telpon: 115</p>
              <p className="font-bold text-lg text-center"></p>
            </div>
          </div>
        </section>
      )}

      {/* Sumber Info Lain */}
      {activeSection === "Informasi" && (
        <section className="flex flex-col pb-32 py-12">
          <h1 className="font-bold text-4xl text-center mb-16">
            Sumber Informasi Lainnya
          </h1>
          <div className="flex justify-evenly mb-24">
            <img src={SiapSiaga} alt="" />
            <img src={Fprb} alt="" />
            <img src={Fpt} alt="" />
            <img src={DisasterManagement} alt="" />
          </div>
          <div className="flex justify-evenly items-center pl-3">
            <img src={Mercy} alt="" className="w-[120px] h-[130px] ml-2" />
            <img
              src={SiagaBencana}
              alt=""
              className="w-[150px] h-[130px] ml-4"
            />
            <img src={Yeu} alt="" className="w-[150px] h-[130px]" />
            <img src={Kappala} alt="" className="w-[150px] h-[60px]" />
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Edukasi;
