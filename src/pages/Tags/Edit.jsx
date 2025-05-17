import { useParams } from "react-router-dom";

import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";

import TagsSection from "@/components/Tags/TagsSection";

const Edit = () => {
  const { id } = useParams();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <Section title="Editar tag">
          <TagsSection />
        </Section>
      </main>
    </div>
  );
};

export default Edit;
