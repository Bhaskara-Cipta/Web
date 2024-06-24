import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../assets/profile/herobgnogradient.png";
import About from "../../assets/profile/aboutimgnew.png";
import Stat from "../../assets/profile/stat.png";
import Suitcase from "../../assets/profile/suitcase.png";

function Profile() {
  return (
    <div>
      <Navbar></Navbar>
      <section
        className="font-poppins"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></section>

      {/* About */}
      <section className="bg-[#508CAE] relative flex justify-center items-center py-24 gap-x-8">
        <img src={About} alt="" />
        <div className="space-y-6">
          <h1 className="font-bold text-2xl text-white border-b-4 border-black w-fit">
            About
          </h1>
          <p className="text-white text-xl w-[510px]">
            Website yang menyediakan informasi lengkap mengenai mitigasi dan
            pengawasan bencana gempa bumi dan tsunami. Kami berkomitmen untuk
            memberikan informasi yang berguna dan penting bagi masyarakat untuk
            mengurangi dampak bencana tersebut. Dari penjelasan tentang
            langkah-langkah mitigasi yang efektif hingga informasi terkini
            tentang perkembangan teknologi pengawasan bencana, kami menjadi
            sumber terpercaya.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="flex py-24 items-center justify-center gap-x-36">
        <div
          className="flex flex-col px-4 rounded-xl shadow-lg space-y-8 w-[508px] h-[340px] 
        justify-center items-center border border-[#508CAE] "
        >
          <div className="flex gap-x-6">
            <h2 className="font-bold text-2xl ml-auto text-[#508CAE]">Visi</h2>
            <img src={Stat} alt="" />
          </div>
          <p className="w-[480xp] font-medium text-center ">
            Tidak hanya sebagai sumber informasi yang tidak hanya terpercaya
            namun juga cepat dalam mendeteksi gempa, serta kemampuan dalam
            menyebarkan informasi yang relevan dan akurat kepada masyarakat
            secara luas.
          </p>
        </div>
        <div
          className="flex flex-col px-4 rounded-xl shadow-lg space-y-8 w-[508px] h-[340px] 
        justify-center items-center border border-[#508CAE]"
        >
          <div className="flex gap-x-6">
            <img src={Suitcase} alt="" />
            <h2 className="font-bold text-2xl text-[#508CAE]">Misi</h2>
          </div>
          <ul className="w-[480xp] text-center font-medium">
            1. Menemukan sistem deteksi gempa yang canggih dan responsif untuk
            mendeteksi gempa secara cepat dan akurat. <br />
            2. Menyebarkan pemberitahuan gempa secara cepat dan efektif kepada
            masyarakat melalui berbagai saluran komunikasi, termasuk website,
            aplikasi seluler, dan media sosial.
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Profile;
