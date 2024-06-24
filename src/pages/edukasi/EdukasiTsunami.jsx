import React from "react";
import ReactPlayer from "react-player";
import Tsunami from "../../assets/edukasi/edukasitsunami.png";
import Hero from "../../assets/profile/herobgnogradient.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function EdukasiTsunami() {
  return (
    <div>
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
          <img src={Tsunami} alt="" />
          <h2 className="font-bold text-2xl text-white">Edukasi Tsunami</h2>
        </div>
      </section>

      {/* Video Headline */}
      <section className="py-24">
        <div className="w-[50%] h-[500px] mx-auto px-8 py-8 shadow-xl rounded-xl">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7LRXkzoUSgc&pp=ygUPZWR1a2FzaSB0c3VuYW1p"
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
                url="https://www.youtube.com/watch?v=6WisSt9aRZk&pp=ygUPZWR1a2FzaSB0c3VuYW1p"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=QSAQSusgOto&pp=ygUPZWR1a2FzaSB0c3VuYW1p"
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
                url="https://www.youtube.com/watch?v=VT3Xyk36qsM&pp=ygUPZWR1a2FzaSB0c3VuYW1p"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZRWbbTMbQ_c&pp=ygUPZWR1a2FzaSB0c3VuYW1p"
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
                url="https://www.youtube.com/watch?v=PXxscnWG8QA&pp=ygUHdHN1bmFtaQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
            <div className="p-4 rounded-xl shadow-xl h-fit">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=Rh-kizm720g&pp=ygUHdHN1bmFtaQ%3D%3D"
                loop
                width={"440px"}
                height={"240px"}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
}

export default EdukasiTsunami;
