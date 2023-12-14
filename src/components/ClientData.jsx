/* eslint-disable react/prop-types */
const ClientData = ({ name, work }) => {
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <p className=" text-[#52DBB2]">{name}</p>
        <p className=" text-[#6C7172]">{work}</p>
      </div>
    </>
  );
};

export default ClientData;
