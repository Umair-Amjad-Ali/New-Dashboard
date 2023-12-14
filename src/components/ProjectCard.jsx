import { fcarddata } from "../assests";
// import { TbDeviceAnalytics } from "react-icons/tb";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ icon, text, imgURL }) => {
  return (
    <>
      <div className="flex justify-between flex-col gap-3 bg-[#cbede2] p-3 rounded-lg w-[8.5rem] h-[9.5rem]">
        {/* <TbDeviceAnalytics size={35} color="#54D9B3" />
         */}
        {icon}
        {imgURL && <img src={imgURL} alt="" width={35} />}
        <p>{text}</p>
        <img src={fcarddata} alt="fcarddata" width={100} />
      </div>
    </>
  );
};

export default ProjectCard;
