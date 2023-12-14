import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdHome, IoIosSettings } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";

import { useStateContext } from "../Context/ContextProvider";

import React from "react";

const iconComponents = {
  IoMdHome: IoMdHome,
  RiTeamFill: RiTeamFill,
  IoCall: IoCall,
  FaCalendarAlt: FaCalendarAlt,
  SiSimpleanalytics: SiSimpleanalytics,
  IoIosSettings: IoIosSettings,
};

import { links } from "../content/data";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 ";
  const normalLink =
    "flex item-center  gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-slate-600 hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className=" flex justify-between items-center ">
            <Link
              to="/home"
              onClick={() => handleCloseSideBar}
              className="ml-3 mt-4 text-xl font-medium tracking-tight text-[#52DBB2]"
            >
              <span>Umair Web</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-slate-200 mt-4 block md:hidden mr-3"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={crypto.randomUUID()}>
                <p className=" text-slate-500 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    key={crypto.randomUUID()}
                    to={`/${link.name}`}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className=" flex justify-center items-center ">
                      {iconComponents[link.icon]
                        ? React.createElement(iconComponents[link.icon])
                        : null}
                      {/* {link.icon === "IoMdHome" ? <IoMdHome /> : null}
                      {link.icon === "RiTeamFill" ? <RiTeamFill /> : null}
                      {link.icon === "IoCall" ? <IoCall /> : null}
                      {link.icon === "FaCalendarAlt" ? <FaCalendarAlt /> : null}
                      {link.icon === "SiSimpleanalytics" ? (
                        <SiSimpleanalytics />
                      ) : null}
                      {link.icon === "IoIosSettings" ? <IoIosSettings /> : null} */}
                    </span>
                    <span className="  capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
