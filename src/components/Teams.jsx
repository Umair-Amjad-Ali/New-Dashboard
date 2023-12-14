import Teamsperson from "./Teamsperson";
import CardHeader from "./CardHeader";
const Teams = () => {
  return (
    <>
      <div className="bg-slate-50 py-4 rounded-lg w-[25rem] flex-wrap">
        <div className="flex justify-between px-10 ">
          <CardHeader title="Team" minititlle="project" value="Uplabs" />
        </div>
        <hr className="mt-5 mb-8" />
        <div className="flex flex-col gap-4 px-10 ">
          <Teamsperson />
          <Teamsperson />
          <Teamsperson />
        </div>
        <p
          className="flex justify-end text-slate-400 mt-4 mr-10"
          onClick={() => {}}
        >
          View All (5)
        </p>
      </div>
    </>
  );
};

export default Teams;
