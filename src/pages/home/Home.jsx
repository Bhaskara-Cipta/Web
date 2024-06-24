import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../assets/home/herobg.png";
import DonationCard from "./DonationCard";
import Popup from "./Popup";
import PopupDonasi from "./PopupDonasi";
import Unesco from "../../assets/home/unesco.png";
import Ceara from "../../assets/home/ceara.png";
import Urca from "../../assets/home/urca.png";
import Geo from "../../assets/home/geo.png";
import WeatherImg from "../../assets/home/weatherimage.png";
import { fetchDonations } from "../../firestore";

const api = {
  key: "ff28f567152d73b9ad58ed19d0e84e54",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupData, setPopupData] = useState("");
  const [popupBgColor, setPopupBgColor] = useState("");
  const [popupDonasi, setPopupDonasi] = useState(false);
  const [weatherMedan, setWeatherMedan] = useState({});
  const [weatherJakarta, setWeatherJakarta] = useState({});
  const [weatherMaluku, setWeatherMaluku] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [donations, setDonations] = useState([]);

  const handleButtonClick = (message, data, bgColor) => {
    setPopupMessage(message);
    setPopupData(data);
    setPopupBgColor(bgColor);
    setPopupVisible(true);
  };

  const clickPopupDonasi = () => {
    setPopupDonasi(true);
  };

  const closePopupDonasi = () => {
    setPopupDonasi(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupMessage("");
    setPopupData("");
    setPopupBgColor("");
  };

  const getWeather = (city, setWeather) => {
    fetch(`http://localhost:5000/weather?city=${city}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          setWeather(result);
        } else {
          setError(`Error fetching data for ${city}: ${result.message}`);
        }
      })
      .catch((error) => {
        setError(`Error fetching data for ${city}: ${error.message}`);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getWeather("Medan", setWeatherMedan);
    getWeather("Jakarta", setWeatherJakarta);
    getWeather("Maluku", setWeatherMaluku);
    fetchDonations()
      .then((data) => {
        setDonations(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Error fetching donations: ${error.message}`);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (
    !weatherJakarta ||
    !weatherMaluku ||
    !weatherMedan ||
    Object.keys(weatherJakarta).length === 0 ||
    Object.keys(weatherMaluku).length === 0 ||
    Object.keys(weatherMedan).length === 0
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      {/* Hero section */}
      <section
        className="flex items-center px-24"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="flex flex-col items-start space-y-8">
          <h1 className="font-bold text-white text-6xl">
            Mari Peduli Terhadap <br />
            Gempa Bumi
          </h1>
          <p className="font-medium text-lg text-white">
            Ketika bumi bergoncang, kita merasakan kelemahan kita <br /> sebagai
            manusia. Namun, dalam kelemahan itu, kita juga <br /> menemukan
            kekuatan untuk bangkit bersama.
          </p>
          <button className="text-white bg-[#508CAE] py-3 px-5 font-bold rounded-lg">
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* Weather Section */}
      <section className="flex flex-col items-center py-8 gap-y-12">
        <h2 className="font-semibold text-4xl">Perkiraan Cuaca Hari Ini</h2>
        <p className="text-lg font-medium text-center w-[950px]">
          Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) memprakirakan
          terdapat potensi cuaca ekstrem berupa hujan lebat-sangat lebat, angin
          kencang, dan gelombang tinggi dalam periode sepekan ke depan di
          sebagian wilayah Indonesia.
        </p>
        <div className="flex w-full justify-center gap-16">
          <div className="rounded-xl shadow-lg flex flex-col items-center justify-center px-12 py-8 gap-y-4">
            <h3 className="font-bold text-2xl">{weatherMedan.name}</h3>
            <img src={WeatherImg} alt="" />
            <h4 className="font-bold text-2xl">
              {weatherMedan.weather[0].main}
            </h4>
            <p className="font-bold text-2xl">{weatherMedan.main.temp}&deg;C</p>
          </div>
          <div className="rounded-xl shadow-lg flex flex-col items-center justify-center px-12 py-8 gap-y-4">
            <h3 className="font-bold text-2xl">{weatherJakarta.name}</h3>
            <img src={WeatherImg} alt="" />
            <h4 className="font-bold text-2xl">
              {weatherJakarta.weather[0].main}
            </h4>
            <p className="font-bold text-2xl">
              {weatherJakarta.main.temp}&deg;C
            </p>
          </div>
          <div className="rounded-xl shadow-lg flex flex-col items-center justify-center px-12 py-8 gap-y-4">
            <h3 className="font-bold text-2xl">{weatherMaluku.name}</h3>
            <img src={WeatherImg} alt="" />
            <h4 className="font-bold text-2xl">
              {weatherMaluku.weather[0].main}
            </h4>
            <p className="font-bold text-2xl">
              {weatherMaluku.main.temp}&deg;C
            </p>
          </div>
        </div>
      </section>

      {/* Donasi */}
      <section className="bg-[#508CAE] flex flex-col justify-center px-12 py-12">
        <h2 className="text-white font-bold text-4xl text-center mx-auto mb-8 border-white border-b-2 pb-4 w-fit">
          Laporan Donasi
        </h2>
        <div className="flex justify-evenly">
          <DonationCard
            onClick={() => clickPopupDonasi()}
            title={donations[0].title}
            nominal={donations[0].nominal}
            image={donations[0].image}
          />
          <DonationCard
            onClick={() => clickPopupDonasi()}
            title={donations[0].title}
            nominal={donations[0].nominal}
            image={donations[0].image}
          />
          <DonationCard
            onClick={() => clickPopupDonasi()}
            title={donations[0].title}
            nominal={donations[0].nominal}
            image={donations[0].image}
          />
        </div>
      </section>
      {popupDonasi && <PopupDonasi onClose={closePopupDonasi} />}

      {/* Status Gunung */}
      <section className="flex flex-col items-center justify-between py-24 gap-y-16">
        <h2 className="font-bold text-4xl text-center">
          Status Gunung Api Diatas Normal
        </h2>
        <div className="space-x-16">
          <button
            className="text-white hover:opacity-80 font-bold text-2xl w-[235px] py-3 bg-[#F3C31A] rounded-xl"
            onClick={() =>
              handleButtonClick(
                "Siaga (Level III)",
                <li>G. Anak Krakatau</li>,
                "bg-[#F3C31A]"
              )
            }
          >
            Waspada Level II
          </button>
          <button
            className="text-white hover:opacity-80 font-bold text-2xl w-[235px] py-3 bg-[#F3751A] rounded-xl"
            onClick={() =>
              handleButtonClick(
                "Waspada (Level II)",
                <li>G. Awu</li>,
                "bg-[#F3751A]"
              )
            }
          >
            Siaga Level III
          </button>
          <button
            className="text-white hover:opacity-80 font-bold text-2xl w-[235px] py-3 bg-[#E60000] rounded-xl"
            onClick={() =>
              handleButtonClick(
                "Awas (Level IV)",
                <li>G. Lewatobi Laki-laki</li>,
                "bg-red-500"
              )
            }
          >
            Waspada Level IV
          </button>
        </div>
      </section>
      {isPopupVisible && (
        <Popup
          message={popupMessage}
          data={popupData}
          bgColor={popupBgColor}
          onClose={closePopup}
        />
      )}

      {/* Mitra Siaga Gempa */}
      <section className="flex flex-col items-center justify-between py-12 gap-y-8">
        <h2 className="font-bold text-4xl text-center">Mitra Siaga Gempa</h2>
        <div className="flex items-center gap-x-10">
          <img src={Unesco} alt="" className="h-fit" />
          <img src={Ceara} alt="" className="h-fit" />
          <img src={Urca} alt="" className="h-fit" />
          <img src={Geo} alt="" className="h-fit" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
