import Sidebar from "../../components/Sidebar";
import TagsSection from "../../components/TagsSection";

const Tags = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <TagsSection />
      </main>
    </div>
  );
};

export default Tags;
