/* eslint-disable react/prop-types */
const CardHeader = ({ title, minititlle, value }) => {
  return (
    <>
      <h1 className=" font-medium">{title}</h1>
      <div className="flex gap-2 justify-center items-center">
        <p className="text-sm text-slate-200 ">{minititlle}</p>
        <p className=" text-md text-slate-600">{value}</p>
      </div>
    </>
  );
};

export default CardHeader;
