import { CiSearch } from "react-icons/ci";
import { Revenue, Teams, Clients, Projects } from "../components";

const Home = () => {
  return (
    <>
      <div>
        <div className="flex justify-between px-10 py-10 w-full max-lg:flex-col max-lg:gap-10 max-lg:w-full max-sm:justify-center max-sm:items-center max-sm:mt-20 max-md:mt-20">
          <div className="flex flex-col">
            <h1 className=" text-4xl text-[#ABAEAF]">
              Hi <span className=" font-medium">Umair Amjad</span>,
            </h1>
            <p className=" leading-10 text-slate-400 text-md">
              you can manage your whole team from here,
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search ..."
              className=" w-[20rem] pl-12 py-4 rounded-lg bg-slate-300 placeholder:text-slate-500 outline-none  "
            />
            <span className="absolute left-4 top-4 text-slate-500 ">
              <CiSearch size={25} />
            </span>
          </div>
        </div>
        <div className="flex justify-between w-full px-10 max-lg:flex-wrap">
          <div className="flex flex-col gap-10">
            <Revenue />
          </div>
          <div className="flex flex-col">
            <Teams />
          </div>
        </div>
        <div className="flex justify-between mx-14 gap-8 mt-10 max-lg:flex-col">
          <div className="bg-slate-50 py-5 rounded-lg w-[23rem] h-64 max-lg:w-full">
            <Clients />
          </div>
          <div className="bg-slate-50  py-5 rounded-lg flex-grow mb-5 flex-wrap">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
