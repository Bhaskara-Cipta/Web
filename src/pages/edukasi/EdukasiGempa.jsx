import React from "react";
import ReactPlayer from "react-player";
import Bumi from "../../assets/edukasi/detailgempa.png";
import Hero from "../../assets/profile/herobgnogradient.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function EdukasiGempa() {
  return (
    <div className="font-poppins">
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
        <div className="flex flex-col items-center justify-center cursor-pointer bg-cyan-900 p-3 rounded-xl gap-y-2 hover:opacity-80">
          <img src={Bumi} alt="" />
          <h2 className="font-bold text-2xl text-white">Edukasi Gempa Bumi</h2>
        </div>
      </section>

      {/* Video Headline */}
      <section className="py-24">
        <div className="w-[50%] h-[500px] mx-auto px-8 py-8 shadow-xl rounded-xl">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=O6GjGUWmRmc"
            loop
            width={"100%"}
            height={"100%"}
            className=""
          />
        </div>
      </section>

      {/* Video Lainnya */}
      <section>
        <h2 className="font-medium text-3xl pl-36 mb-12">Video Lainnya</h2>
        <div className="space-y-20 mb-16">
          <div className="flex justify-evenly">
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=8-ZZ3uzZkp0&pp=ygUNZWR1a2FzaSBnZW1wYQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=qD7w_sEkYco&pp=ygUNZWR1a2FzaSBnZW1wYQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=G61B0FVeyZA&pp=ygUFZ2VtcGE%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=rVstZmQE-HU&pp=ygUNZWR1a2FzaSBnZW1wYQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=0dGvIEVFjQc&pp=ygUNZWR1a2FzaSBnZW1wYQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=A6QPP1X6IEM&pp=ygUNZWR1a2FzaSBnZW1wYQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default EdukasiGempa;
