import CardHeader from "./CardHeader";
import ProjectCard from "./ProjectCard";
import { TbDeviceAnalytics } from "react-icons/tb";
import { scarddata, fcard, tcard } from "../assests";
const Projects = () => {
  return (
    <>
      <div className="flex justify-between px-10">
        <CardHeader title="Projects" minititlle="Month" value="October" />
      </div>
      <hr className="mt-5 mb-5" />
      <div className="flex gap-4 px-10 justify-center flex-wrap">
        <ProjectCard
          icon={<TbDeviceAnalytics size={35} color="#54D9B3" />}
          text="Analytics Design"
        />
        <ProjectCard imgURL={scarddata} text="Design System" />
        <ProjectCard imgURL={tcard} text="Virtual Community" />
        <ProjectCard imgURL={fcard} text="Fitness App" />
        {/* <ProjectCard imgURL={fcard} text="Fitness App" /> */}
      </div>
    </>
  );
};

export default Projects;
