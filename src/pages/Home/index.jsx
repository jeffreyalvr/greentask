import Sidebar from "@components/Sidebar";
import TaskSection from "@components/TaskSection";
import Activity from "@components/Activity";
import Section from "@components/Section";
import Separator from "@/components/Separator";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <TaskSection />
        <Separator />
        <Section title="Atividade de hoje">
          <Activity />
        </Section>
      </main>
    </div>
  );
};

export default Home;
