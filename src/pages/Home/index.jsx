import Sidebar from "../../components/Sidebar";
import TaskSection from "../../components/TaskSection";
import Activity from "../../components/Activity";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 px-10">
        <div className="flex gap-30 border-b-2 border-b-[var(--border-light)]">
          <TaskSection borderless />
        </div>
        <Activity />
      </main>
    </div>
  );
};

export default Home;
