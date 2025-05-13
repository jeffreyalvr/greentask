import Sidebar from "../../components/Sidebar";
import Statistics from "../../components/Statistics";
import Activity from "../../components/Activity";

const History = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 px-10">
        <Statistics />
        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>
        <Activity />
      </main>
    </div>
  );
};

export default History;
