import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ref, set, get, child } from "firebase/database";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { db, dbRealtime } from "../../firebase";
import Sidebar, { SidebarItem } from "./Sidebar";
import HomeIcon from "../../assets/admin/homeicon.png";
import SosIcon from "../../assets/admin/sosicon.png";
import LogoutIcon from "../../assets/admin/logouticon.png";
import SearchIcon from "../../assets/admin/searchicon.png";
import AdminIcon from "../../assets/admin/adminicon.png";
import MoreIcon from "../../assets/admin/moreicon.png";
import Diagram from "../../assets/admin/diagram.png";

const api = {
  key: "AIzaSyB7EfCydTqqNe8D5FTZHx7__cW7yq6Q6IA",
};

const containerStyle = {
  width: "1000px",
  height: "500px",
};

const center = {
  lat: 1.0,
  lng: 120.0,
};

function Sos() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    console.log(selectedMarker);
  };

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

  // Firestore
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

  // Realtime Database
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    console.log("getting realtime data");
    const fetchAlarmStatus = async () => {
      try {
        const dbRef = ref(dbRealtime);
        const snapshot = await get(child(dbRef, "alarm_on"));
        if (snapshot.exists()) {
          setIsOn(snapshot.val());
          console.log(`Initial alarm_on value: ${snapshot.val()}`);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching initial alarm_on value:", error.message);
      }
    };

    fetchAlarmStatus();
  }, []);

  const handleToggle = async () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);

    try {
      console.log(`Attempting to update alarm_on to: ${newIsOn}`);
      const dbRef = ref(dbRealtime, "alarm_on");
      await set(dbRef, newIsOn); // Changed from update to set
      console.log(`Successfully updated alarm_on to: ${newIsOn}`);
    } catch (error) {
      console.error("Error updating alarm_on:", error.message);
    }
  };

  const markers = data.map((item) => ({
    id: item.id,
    position: {
      lat: item.location.latitude,
      lng: item.location.longitude,
    },
    ...item,
  }));

  // Maps auto centered on marker
  useEffect(() => {
    if (map && markers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(({ position }) => {
        bounds.extend(position);
      });
      map.fitBounds(bounds);
    }
  }, [map, markers]);

  return isLoaded ? (
    <div className="flex font-nunito">
      <div>
        <Sidebar>
          <SidebarItem icon={HomeIcon} text="Dashboard" to="/dashboard" />
          <SidebarItem icon={SosIcon} text="SOS" to="/sos" active />
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
        <section className="bg-[#F5F6FA] h-fit py-10 px-4 flex ">
          <div className="w-full">
            <h1 className="font-bold text-3xl mb-4">SOS</h1>
            <div>
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
                {/* {data.map((item) => (
                  <MarkerF
                    position={{
                      lat: item.location.latitude,
                      lgn: item.location.longitude,
                    }}
                    key={item}
                  ></MarkerF>
                ))} */}
                {markers.map((marker) => (
                  <MarkerF
                    position={marker.position}
                    key={marker.id}
                    onClick={() => handleMarkerClick()}
                  />
                ))}
              </GoogleMap>
            </div>
          </div>

          {/* Right bar */}
          <div className="ml-auto font-poppins w-[240px] bg-white right-2 top-20 rounded-lg">
            <h1 className="border-b border-black p-4 mb-4">DATA</h1>
            <div className="space-y-4 border-b border-black pb-4 px-2">
              <div className="flex items-center justify-between">
                <h2 className="text-[#00B69B] font-extrabold text-sm">
                  STATUS
                </h2>
                <button className="text-white px-3 py-1 rounded-lg bg-[#00B69B] whitespace-nowrap cursor-pointer">
                  ANALYZE &gt;
                </button>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-[#979797] font-light text-sm">HEALTH</h2>
                <button className="text-[#FF0000] text-sm">WARNING</button>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-[#979797] font-light text-sm">
                  TOTAL ALERT
                </h2>
                <button className="text-[#121212] text-sm">
                  {data.length}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-[#979797] font-light text-sm">
                  RECEIVED DATA
                </h2>
                <button className="text-[#121212] text-sm">167 GB</button>
              </div>
            </div>
            <div className="px-2 py-4 flex flex-col border-b border-black">
              <img src={Diagram} alt="" className="mb-2" />
              <h2 className="text-[#979797] font-light text-sm mb-2">
                KIRIM NOTIFIKASI DARURAT
              </h2>
              <div
                className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                  isOn ? "bg-green-400" : "bg-gray-300"
                }`}
                onClick={handleToggle}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    isOn ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
            <div className="p-2">
              <h2 className="text-[#00B69B] font-extrabold text-sm mb-4">
                LAST ACTIVITY
              </h2>
              <div className="space-y-2 border-b border-black pb-4 mb-4">
                <p className="font-bold text-xs text-[#979797]">
                  Dollah have fixed broken detail and now it works good
                </p>
                <p className="text-xs text-[#979797]">Mei 5, at 2:54pm</p>
              </div>
              <div className="space-y-2 border-b border-black pb-4 mb-4">
                <p className="font-bold text-xs text-[#979797]">
                  Broken part of the switch has been hust fived
                </p>
                <p className="text-xs text-[#979797]">Mei 5, at 2:54pm</p>
              </div>
              <div className="space-y-2 border-b border-black pb-4 mb-4">
                <p className="font-bold text-xs text-[#979797]">
                  Fira have reported a bug in data transmission to server
                </p>
                <p className="text-xs text-[#979797]">Mei 5, at 2:54pm</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Sos;
