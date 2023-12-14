import CardHeader from "./CardHeader";
import ClientData from "./ClientData";
const Clients = () => {
  return (
    <>
      <div>
        <div className="flex justify-between px-10">
          <CardHeader title="Clients" minititlle="project" value="Uplabs" />
        </div>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-col justify-center px-10 gap-3">
          <ClientData name="Sajid Naeem" work="FreeLancer" />
          <ClientData name="Umair Amjad" work="Developer" />
          <ClientData name="Ahsan" work="Developer" />
          <ClientData name="Mujtaba" work="Developer" />
        </div>
      </div>
    </>
  );
};

export default Clients;
