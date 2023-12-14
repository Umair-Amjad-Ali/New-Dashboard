import { graph } from "../assests";
import CardHeader from "./CardHeader";
const Revenue = () => {
  return (
    <>
      <div className="bg-white px-10 py-5 rounded-lg w-4/5 max-lg:w-full max-lg:mb-10">
        <div className="flex justify-between  ">
          <CardHeader title="Revenue" minititlle="Year" value="2020" />
        </div>
        <hr className="mt-6" />
        <div className=" mt-10  ">
          <img src={graph} alt="graph" />
        </div>
      </div>
    </>
  );
};

export default Revenue;
