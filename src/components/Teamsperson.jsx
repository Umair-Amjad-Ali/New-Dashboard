import { profile } from "../assests";
import { RiMessage2Fill } from "react-icons/ri";
const Teamsperson = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap ">
        <div className="flex gap-3 justify-center items-center flex-wrap">
          <img
            src={profile}
            alt="profile"
            height={35}
            width={35}
            className=" rounded-full"
          />
          <p className=" text-slate-400">Umair Amjad</p>
        </div>
        <span className=" text-slate-300">
          <RiMessage2Fill size={20} />
        </span>
      </div>
    </>
  );
};

export default Teamsperson;
