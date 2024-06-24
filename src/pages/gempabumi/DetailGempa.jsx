/* eslint-disable react/prop-types */
import InfoGempa from "../../assets/gempabumi/imginfogempa.png";
import Bagikan from "../../assets/gempabumi/bagikan.svg";
import Popup from "./Popup";
import { useState } from "react";

function DetailGempa({ onClose, earthquake }) {
  const { properties, geometry } = earthquake;
  const { title, mag, place, time } = properties;
  const [isPopupVisible, setPopupVisible] = useState(false);

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="w-fit py-6 h-fit z-10 fixed flex flex-col items-center font-poppins rounded-3xl shadow-2xl 
    mx-auto my-auto inset-0 bg-white"
    >
      <h2 className="text-center mb-8 mx-auto  pb-1 font-bold text-xl ">
        Informasi Gempa Bumi
      </h2>
      <div className="flex items-center justify-evenly">
        <div className="w-3/12">
          <img src={InfoGempa} alt="" className="" />
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">Magnitudo</h3>
            <p className="font-bold text-lg">{mag} SR</p>
          </div>
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">Waktu Gempa</h3>
            <p className="font-bold text-lg">{convertTimestamp(time)}</p>
          </div>
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">Lintang</h3>
            <p className="font-bold text-lg">{geometry.coordinates[1]}</p>
          </div>
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">Bujur</h3>
            <p className="font-bold text-lg">{geometry.coordinates[0]}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">Kedalaman</h3>
            <p className="font-bold text-lg">{geometry.coordinates[2]} KM</p>
          </div>
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">
              Potensi Tsunami
            </h3>
            <p className="font-bold text-lg">Tidak</p>
          </div>
          <div>
            <h3 className="font-bold text-[#26909E] text-lg">
              Wilayah Dirasakan
            </h3>
            <p className="font-bold text-lg">{place}</p>
          </div>
          <div className="">
            <h3 className="font-bold text-[#26909E] text-lg">Tingkat Resiko</h3>
            <p className="font-bold text-lg">Sedang</p>
          </div>
        </div>
      </div>
      <div
        className="flex gap-x-4 bg-[#508CAE] w-fit py-2 px-3 mr-12 mt-4 rounded-lg cursor-pointer hover:opacity-80"
        onClick={() => handleButtonClick()}
      >
        <p className="font-bold text-sm text-white">Bagikan</p>
        <img src={Bagikan} alt="" />
      </div>
      <button
        onClick={onClose}
        className="text-black text-3xl py-2 px-4 rounded-lg absolute right-1 top-1"
      >
        X
      </button>
      {isPopupVisible && <Popup onClose={closePopup} />}
    </div>
  );
}

export default DetailGempa;
