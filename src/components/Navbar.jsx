/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../Context/ContextProvider";
import { FaBell } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { profile } from "../assests";
import { useEffect } from "react";
const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between px-6 py-2 md:mx-6 relative">
      <span
        onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        className="text-xl rounded-full p-2 hover:bg-slate-200  "
      >
        <AiOutlineMenu />
      </span>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <span className=" text-slate-600 flex justify-center items-center ">
            <FaBell className="text-2xl" />
          </span>
          <div className="flex gap-3 items-center ">
            <img
              src={profile}
              alt=""
              height={35}
              width={35}
              className=" rounded-full "
            />
            <p className=" text-slate-600">Umair Amjad</p>
            <AiOutlineDown size={15} color="#000000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
