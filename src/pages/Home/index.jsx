import Sidebar from "../../components/Sidebar";
import TaskSection from "../../components/TaskSection";
import Activity from "../../components/Activity";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col h-fit px-10">
        <TaskSection />
        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>
        <Activity />
      </main>
    </div>
  );
};

export default Home;
