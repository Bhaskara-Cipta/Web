import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../assets/profile/herobgnogradient.png";
import Bumi from "../../assets/edukasi/bumi.png";
import Call from "../../assets/edukasi/call.png";
import informasiLain from "../../assets/edukasi/informasilain.svg";
import InfoGempa from "../../assets/gempabumi/imginfogempa.png";
import Bagikan from "../../assets/gempabumi/bagikan.svg";
import Popup from "./Popup";
import Calendar from "../../assets/gempabumi/calendar.svg";
import Clock from "../../assets/gempabumi/clock.svg";

const api = {
  base: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=-10.6&minlongitude=95&maxlatitude=6.1&maxlongitude=141",
  rawan:
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-04-08&endtime=2024-04-09&minlatitude=-10.6&minlongitude=95&maxlatitude=6.1&maxlongitude=141",
  key: "AIzaSyB7EfCydTqqNe8D5FTZHx7__cW7yq6Q6IA",
};

const containerStyle = {
  width: "1300px",
  height: "500px",
};

const center = {
  lat: 1.0,
  lng: 120.0,
};

function Gempabumi() {
  // Google Maps
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB7EfCydTqqNe8D5FTZHx7__cW7yq6Q6IA",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // Others
  const [activeSection, setActiveSection] = useState("Gempa");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [gempa, setGempa] = useState([]);
  const [rawanGempa, setRawanGempa] = useState([]);
  const [informasiGempa, setInformasiGempa] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  const handleCombinedClick = (gempaIndex) => {
    setInformasiGempa(gempa[gempaIndex]);
    handleNavigationClick("Gempa");
  };

  const getGempa = () => {
    fetch(`${api.base}`)
      .then((res) => res.json())
      .then((result) => {
        setGempa(result.features);
        console.log(gempa);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const getRawanGempa = () => {
    fetch(`${api.rawan}`)
      .then((res) => res.json())
      .then((result) => {
        setRawanGempa(result.features);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const convertToDate = (timestamp) => {
    const date = new Date(timestamp);

    const dateOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat("id-ID", dateOptions).format(
      date
    );

    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    };

    const formattedTime = new Intl.DateTimeFormat("id-ID", timeOptions).format(
      date
    );

    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  useEffect(() => {
    setIsLoading(true);
    getRawanGempa();
    getGempa();
  }, []);

  useEffect(() => {
    if (gempa.length > 0) {
      setInformasiGempa(gempa[0]);
      setIsLoading(false);
    }
  }, [gempa]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!gempa || gempa.length === 0 || !informasiGempa) {
    return <div>Loading...</div>;
  }

  return isLoaded ? (
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
          onClick={() => handleNavigationClick("Riwayat")}
        >
          <img src={Call} alt="" />
          <h2 className="font-bold text-2xl text-white">Riwayat Gempa</h2>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer hover:bg-cyan-900 p-3 rounded-xl gap-y-2"
          onClick={() => handleNavigationClick("Peta")}
        >
          <img src={informasiLain} alt="" />
          <h2 className="font-bold text-2xl text-white">Peta Rawan Gempa</h2>
        </div>
      </section>

      {/* Informasi Gempa */}
      {activeSection === "Gempa" && (
        <section className="py-12 ">
          <h2 className="text-center w-[420px] mb-8 mx-auto  pb-1 font-bold text-2xl border-b-8 border-[#508CAE]">
            Informasi Gempa Bumi
          </h2>
          <div className="flex justify-evenly">
            <div>
              <img src={InfoGempa} alt="" />
            </div>
            <div className="space-y-6 py-8">
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">Magnitudo</h3>
                <p className="font-bold text-2xl">
                  {informasiGempa.properties.mag} SR
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">
                  Waktu Gempa
                </h3>
                <p className="font-bold text-2xl">
                  {convertTimestamp(informasiGempa.properties.time)}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">Lintang</h3>
                <p className="font-bold text-2xl">
                  {informasiGempa.geometry.coordinates[1]}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">Bujur</h3>
                <p className="font-bold text-2xl">
                  {informasiGempa.geometry.coordinates[0]}
                </p>
              </div>
              <div
                className="flex gap-x-4 bg-[#508CAE] w-fit py-3 px-6 rounded-lg cursor-pointer hover:opacity-80"
                onClick={() => handleButtonClick()}
              >
                <p className="font-bold text-sm text-white">Bagikan</p>
                <img src={Bagikan} alt="" />
              </div>
            </div>
            <div className="space-y-6 py-8">
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">Kedalaman</h3>
                <p className="font-bold text-2xl">
                  {informasiGempa.geometry.coordinates[2]} KM
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">
                  Potensi Tsunami
                </h3>
                <p className="font-bold text-2xl">Tidak</p>
              </div>
              <div>
                <h3 className="font-bold text-[#26909E] text-2xl">
                  Wilayah Dirasakan
                </h3>
                <p className="font-bold text-2xl">
                  {informasiGempa.properties.place}
                </p>
              </div>
              <div className="">
                <h3 className="font-bold text-[#26909E] text-2xl">
                  Tingkat Resiko
                </h3>
                <p className="font-bold text-2xl">Sedang</p>
              </div>
            </div>
          </div>
        </section>
      )}
      {isPopupVisible && <Popup onClose={closePopup} />}

      {/* Riwayat Gempa */}
      {activeSection === "Riwayat" && (
        <section className="py-12">
          <h2 className="text-center w-[380px] mb-8 mx-auto  pb-1 font-bold text-2xl border-b-8 border-[#508CAE]">
            Riwayat Gempa
          </h2>
          <div className="px-12 flex flex-wrap mx-auto gap-8 w-[1500px]">
            {/* {gempa.map((earthquake) => (
              <RiwayatGempa key={earthquake.id} earthquake={earthquake} />
            ))} */}
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[0].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[0].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[0].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[0].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(0)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[1].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[1].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[1].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[1].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(1)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[2].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[2].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[2].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[2].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(2)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[3].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[3].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[3].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[3].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(3)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[4].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[4].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[4].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[4].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(4)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[5].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[5].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[5].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[5].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(5)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[6].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[6].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[6].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[6].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(6)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[7].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[7].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[7].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[7].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(7)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[8].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[8].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[8].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[8].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(8)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[9].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[9].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[9].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[9].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(9)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[10].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[10].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[10].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[10].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(10)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[11].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[11].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[11].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[11].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(11)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[12].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[12].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[12].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[12].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(12)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[13].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[13].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[13].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[13].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(13)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[14].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[14].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[14].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[14].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(14)}
              >
                &gt;
              </button>
            </div>
            <div
              className="w-[324px] h-[105px] font-poppins flex items-center px-6 border-[2px] border-[#508CAE] rounded-xl relative"
              style={{
                background: "linear-gradient(to left, #FFFFFF 96%, #508CAE 4%)",
              }}
            >
              <div className="text-[#508CAE] rounded-full p-4 mr-2 bg-[#FFE6E6] font-bold text-2xl">
                {gempa[15].properties.mag}
              </div>
              <div className="">
                <h2 className="text-[#1D1A1A] font-bold line-clamp-1">
                  {gempa[15].properties.place}
                </h2>
                <div className="flex">
                  <img src={Calendar} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[15].properties.time).date}
                  </p>
                </div>
                <div className="flex">
                  <img src={Clock} alt="" />
                  <p className="font-bold text-xs ml-2">
                    {convertToDate(gempa[15].properties.time).time} WIB
                  </p>
                </div>
              </div>
              <button
                className="text-3xl absolute right-3 text-[#508CAE]"
                onClick={() => handleCombinedClick(15)}
              >
                &gt;
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Peta Rawan Gempa */}
      {activeSection === "Peta" && (
        <section className="py-12 flex flex-col items-center">
          <h2 className="text-center w-[380px] mb-8 mx-auto  pb-1 font-bold text-2xl border-b-8 border-[#508CAE]">
            Peta Rawan Gempa
          </h2>
          <div className="">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
              }}
            >
              {/* {testPoints.map((point, i) => (
                <MarkerF position={point} key={i}></MarkerF>
              ))} */}
              <MarkerF
                position={{
                  lat: rawanGempa[0].geometry.coordinates[1],
                  lng: rawanGempa[0].geometry.coordinates[2],
                }}
              ></MarkerF>
              <MarkerF
                position={{
                  lat: rawanGempa[1].geometry.coordinates[1],
                  lng: rawanGempa[1].geometry.coordinates[2],
                }}
              ></MarkerF>
              <MarkerF
                position={{
                  lat: rawanGempa[2].geometry.coordinates[1],
                  lng: rawanGempa[2].geometry.coordinates[2],
                }}
              ></MarkerF>
              <MarkerF
                position={{
                  lat: rawanGempa[3].geometry.coordinates[1],
                  lng: rawanGempa[3].geometry.coordinates[2],
                }}
              ></MarkerF>
            </GoogleMap>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer></Footer>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Gempabumi);
