import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import Sidebar, { SidebarItem } from "./Sidebar";
import HomeIcon from "../../assets/admin/homeicon.png";
import SosIcon from "../../assets/admin/sosicon.png";
import ContactIcon from "../../assets/admin/contacticon.png";
import SettingsIcon from "../../assets/admin/settingsicon.png";
import LogoutIcon from "../../assets/admin/logouticon.png";
import SearchIcon from "../../assets/admin/searchicon.png";
import AdminIcon from "../../assets/admin/adminicon.png";
import MoreIcon from "../../assets/admin/moreicon.png";
import PersonIcon from "../../assets/admin/personicon.png";
import UpTrendIcon from "../../assets/admin/uptrendicon.png";
import SalesGraphic from "../../assets/admin/salesgraphic.png";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reports"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(dataArray);
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex font-nunito h-screen">
      <div className="">
        <Sidebar>
          <SidebarItem
            icon={HomeIcon}
            text="Dashboard"
            to="/dashboard"
            active
          />
          <SidebarItem icon={SosIcon} text="SOS" to="/sos" />
          <hr className="py-3" />
          <SidebarItem icon={LogoutIcon} text="Logout" to="/" />
        </Sidebar>
      </div>

      {/* Search Bar */}
      <div className="w-full">
        <div className="w-full py-2 float-start flex items-center px-8 bg-white">
          <div className="flex items-center py-2 pl-8 bg-[#F5F6FA] rounded-3xl w-fit">
            <img src={SearchIcon} alt="" className=" h-full mr-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F5F6FA] w-full mr-16 outline-none"
            />
          </div>
          <div className="flex ml-auto gap-x-4">
            <img src={AdminIcon} alt="" />
            <div className="flex items-center gap-x-4">
              <div>
                <h2 className="font-bold text-sm text-[#404040]">Raja</h2>
                <p className="font-medium text-sm text-[#565656]">Admin</p>
              </div>
              <div>
                <img src={MoreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="bg-[#F5F6FA] h-screen py-20 px-4">
          <h1 className="font-bold text-3xl mb-8">Dashboard</h1>
          <div className="flex justify-evenly mb-12">
            {/* Card */}
            <div className="bg-white w-[275px] rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between ">
                <div className="space-y-4">
                  <h2 className="font-semibold text-[#202224] opacity-70">
                    Laporan Masuk
                  </h2>
                  <h3 className="font-bold text-[#202224] text-2xl">
                    {data.length}
                  </h3>
                </div>
                <img
                  src={PersonIcon}
                  alt=""
                  className="p-4 bg-[#8280FF] bg-opacity-30 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <img src={UpTrendIcon} alt="" className="mr-1" />
                <p className="font-semibold text-[#202224] opacity-70">
                  <span className="text-[#00B69B]">8.5%</span> Up from yesterday
                </p>
              </div>
            </div>
            <div className="bg-white w-[275px] rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between ">
                <div className="space-y-4">
                  <h2 className="font-semibold text-[#202224] opacity-70">
                    Laporan Diproses
                  </h2>
                  <h3 className="font-bold text-[#202224] text-2xl">8,600</h3>
                </div>
                <img
                  src={PersonIcon}
                  alt=""
                  className="p-4 bg-[#8280FF] bg-opacity-30 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <img src={UpTrendIcon} alt="" className="mr-1" />
                <p className="font-semibold text-[#202224] opacity-70">
                  <span className="text-[#00B69B]">8.5%</span> Up from yesterday
                </p>
              </div>
            </div>
            <div className="bg-white w-[275px] rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between ">
                <div className="space-y-4">
                  <h2 className="font-semibold text-[#202224] opacity-70">
                    Laporan Selesai
                  </h2>
                  <h3 className="font-bold text-[#202224] text-2xl">51</h3>
                </div>
                <img
                  src={PersonIcon}
                  alt=""
                  className="p-4 bg-[#8280FF] bg-opacity-30 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <img src={UpTrendIcon} alt="" className="mr-1" />
                <p className="font-semibold text-[#202224] opacity-70">
                  <span className="text-[#00B69B]">8.5%</span> Up from yesterday
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            {/* Card */}
            <div className="bg-white rounded-xl p-4 shadow-lg w-[275px]">
              <div className="flex items-center justify-between ">
                <div className="space-y-4">
                  <h2 className="font-semibold text-[#202224] opacity-70">
                    Total User
                  </h2>
                  <h3 className="font-bold text-[#202224] text-2xl">12,878</h3>
                </div>
                <img
                  src={PersonIcon}
                  alt=""
                  className="p-4 bg-[#8280FF] bg-opacity-30 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <img src={UpTrendIcon} alt="" className="mr-1" />
                <p className="font-semibold text-[#202224] opacity-70">
                  <span className="text-[#00B69B]">8.5%</span> Up from yesterday
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg w-[275px]">
              <div className="flex items-center justify-between ">
                <div className="space-y-4">
                  <h2 className="font-semibold text-[#202224] opacity-70">
                    Total Laporan Masuk
                  </h2>
                  <h3 className="font-bold text-[#202224] text-2xl">12,567</h3>
                </div>
                <img
                  src={PersonIcon}
                  alt=""
                  className="p-4 bg-[#8280FF] bg-opacity-30 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <img src={UpTrendIcon} alt="" className="mr-1" />
                <p className="font-semibold text-[#202224] opacity-70">
                  <span className="text-[#00B69B]">8.5%</span> Up from yesterday
                </p>
              </div>
            </div>
            <div className="bg-white w-[275px] rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <h2 className="font-semibold text-[#202224] opacity-70">
                    Total Laporan Selesai
                  </h2>
                  <h3 className="font-bold text-[#202224] text-2xl">40,689</h3>
                </div>
                <img
                  src={PersonIcon}
                  alt=""
                  className="p-4 bg-[#8280FF] bg-opacity-30 rounded-2xl"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <img src={UpTrendIcon} alt="" className="mr-1" />
                <p className="font-semibold text-[#202224] opacity-70">
                  <span className="text-[#00B69B]">8.5%</span> Up from yesterday
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
