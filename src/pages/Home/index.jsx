import Sidebar from "../../components/Sidebar";
import Statistics from "../../components/Statistics";
import Activity from "../../components/Activity";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 px-10">
        <Statistics />
        <Activity />
      </div>
    </div>
  );
};

export default Home;
