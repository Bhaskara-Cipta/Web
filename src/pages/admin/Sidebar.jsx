import React, { createContext, useState } from "react";
import SidebarLogo from "../../assets/admin/sidebarlogo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const SidebarContext = createContext();

function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const sidebarWidth = expanded ? 208 : 64;

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, sidebarWidth }}>
      <aside
        className={`h-full ${
          expanded ? "w-52" : "w-[75px]"
        } font-nunito  bg-white border-r shadow-sm z-50 transition-all duration-300`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between ">
            <img
              src={SidebarLogo}
              alt=""
              className={`overflow-hidden mx-auto transition-all ${
                expanded ? "w-fit" : "w-0"
              }`}
            />
            <button
              className="text-3xl text-[#508CAE] mx-auto mr-3 cursor-pointer hover:opacity-80 font-poppins"
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? "<" : ">"}
            </button>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}

export default Sidebar;

export function SidebarItem({ icon, text, active, alert, to }) {
  return (
    <SidebarContext.Consumer>
      {({ expanded }) => (
        <NavLink
          to={to}
          className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            active ? "bg-[#508CAE]" : "hover:bg-[#508CAE] text-gray-600"
          }`}
        >
          <img src={icon} alt="" className={`${expanded ? "mr-4" : "mr-0"}`} />
          {expanded && (
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "w-fit" : "w-0"
              }`}
            >
              {text}
            </span>
          )}
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-[#508CAE] ${
                expanded ? "" : "top-2"
              }`}
            />
          )}
          {!expanded && (
            <div
              className={`
          absolute left-full rounded-md px-2 py-1 ml-6 bg-[#508CAE] text-sm
          invisible opacity-20 -translate-x-3 transition-all group-hover:visible 
          group-hover:opacity-100 group-hover:translate-x-0 text-white
          `}
            >
              {text}
            </div>
          )}
        </NavLink>
      )}
    </SidebarContext.Consumer>
  );
}
