import React, { useState } from "react";
import Calendar from "../../assets/gempabumi/calendar.svg";
import Clock from "../../assets/gempabumi/clock.svg";
import DetailGempa from "./DetailGempa";

function RiwayatGempa({ earthquake }) {
  const { properties, geometry } = earthquake;
  const { title, mag, place, time } = properties;
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
  };

  const { date, time: formattedTime } = convertTimestamp(time);

  const openDetail = () => {
    setIsPopupVisible(true);
  };

  const closeDetail = () => {
    setIsPopupVisible(false);
  };

  return (
    <div
      className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
      style={{
        background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
      }}
    >
      <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
        {mag}
      </div>
      <div className="">
        <h2 className="text-[#1D1A1A] font-bold line-clamp-1">{place}</h2>
        <div className="flex">
          <img src={Calendar} alt="" />
          <p className="font-bold text-xs ml-2">{date}</p>
        </div>
        <div className="flex">
          <img src={Clock} alt="" />
          <p className="font-bold text-xs ml-2">{formattedTime}</p>
        </div>
      </div>
      <button
        className="text-3xl absolute right-3 text-[#508CAE]"
        onClick={openDetail}
      >
        &gt;
      </button>
      {isPopupVisible && (
        <DetailGempa onClose={closeDetail} earthquake={earthquake} />
      )}
    </div>
  );
}

export default RiwayatGempa;
