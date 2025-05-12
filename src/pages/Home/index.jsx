import Sidebar from "../../components/Sidebar";
import TaskSection from "../../components/TaskSection";
import Statistics from "../../components/Statistics";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 gap-10 p-10">
        <Statistics />
        <TaskSection />
      </div>
    </div>
  );
};

export default Home;
