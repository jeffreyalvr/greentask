import Sidebar from "../../components/Sidebar";
import Section from "../../components/Section";
import Separator from "../../components/Separator";

import TagsSection from "../../components/Tags/TagsSection";
import TagsList from "../../components/Tags/TagsList";

const Tags = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <Section title="Minhas tags">
          <TagsSection />
          <Separator />
          <TagsList />
        </Section>
      </main>
    </div>
  );
};

export default Tags;
