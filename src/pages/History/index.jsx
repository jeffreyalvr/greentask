import Sidebar from "../../components/Sidebar";
import Statistics from "../../components/Statistics";

const History = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 px-10">
        <Statistics />
      </main>
    </div>
  );
};

export default History;
