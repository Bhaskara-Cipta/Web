import Facebook from "../assets/footer/Facebook.svg";
import Instagram from "../assets/footer/Instagram.svg";
import WhatsApp from "../assets/footer/WhatsApp.svg";

function Footer() {
  return (
    <div className="bg-[#508CAE] flex justify-between px-28 py-16">
      <div className="text-white font-bold ">
        <h1 className="mb-8">IMPORTANT LINKS</h1>
        <ul className="underline">Kantor Pusat</ul>
        <ul className="underline">Jl. Angkasa I No.2</ul>
        <ul className="underline">Kemayoran</ul>
        <ul className="underline">Jakarta Pusat, DKI</ul>
        <ul className="underline">Jakarta 10610</ul>
        <ul className="underline">PO Box 3540</ul>
      </div>
      <div className="font-bold text-white">
        <h1 className="mb-8">CONTACTS</h1>
        <ul className="underline">Call Center (021) 196</ul>
        <ul className="underline mb-4">Fax (021) 4246703</ul>
        <div className="flex ">
          <img src={Instagram} alt="" className="cursor-pointer" />
          <img src={WhatsApp} alt="" className="cursor-pointer" />
          <img src={Facebook} alt="" className="cursor-pointer" />
        </div>
      </div>
      <div className="font-bold text-white">
        <h1>APLIKASI MOBILE</h1>
      </div>
    </div>
  );
}

export default Footer;
