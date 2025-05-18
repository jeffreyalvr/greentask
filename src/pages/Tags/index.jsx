import Sidebar from "@components/Sidebar";
import Section from "@components/Section";
import Separator from "@components/Separator";

import AddTag from "@components/Tags/AddTag";
import TagsList from "@components/Tags/TagsList";

import useColorStore from "@/store/useColorStore";

const Tags = () => {
  const colors = useColorStore((state) => state.colors);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <Section title="Minhas tags">
          <AddTag colors={colors} />
          <Separator />
          <TagsList colors={colors} />
        </Section>
      </main>
    </div>
  );
};

export default Tags;
