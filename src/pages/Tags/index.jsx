import Sidebar from "../../components/Sidebar";

const Tags = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 px-10">
        <div className="flex gap-30 border-b-2 border-b-[var(--border-light)]">
          tags
        </div>
      </main>
    </div>
  );
};

export default Tags;
