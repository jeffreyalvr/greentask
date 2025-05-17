import Sidebar from "@components/Sidebar";
import Section from "@components/Section";
import Separator from "@components/Separator";

import TagsSection from "@components/Tags/TagsSection";
import TagsList from "@components/Tags/TagsList";

const colors = [
  { id: 0, name: "vermelho", hex: "f94144" },
  { id: 1, name: "azul", hex: "0096c7" },
  { id: 2, name: "amarelo", hex: "f9c74f" },
  { id: 3, name: "verde", hex: "588157" },
  { id: 4, name: "verde musgo", hex: "90be6d" },
  { id: 5, name: "salmão", hex: "f8ad9d" },
  { id: 6, name: "roxo", hex: "b892ff" },
  { id: 7, name: "laranja", hex: "f3722c" },
  { id: 8, name: "rosa", hex: "ff8fab" },
  { id: 9, name: "cinza", hex: "a5a5a5" },
  { id: 10, name: "verde azulado", hex: "3c6e71" },
  { id: 11, name: "ciano", hex: "70e4ef" },
  { id: 12, name: "magenta", hex: "b43e8f" },
  { id: 13, name: "marrom", hex: "9c6644" },
  { id: 14, name: "bege", hex: "e6ccb2" },
  { id: 15, name: "preto", hex: "242423" },
];

const tags = [
  { id: 0, name: "web development", colorId: 2 },
  { id: 1, name: "leitura", colorId: 0 },
  { id: 2, name: "game dev", colorId: 6 },
  { id: 3, name: "meditação", colorId: 10 },
  { id: 4, name: "workout", colorId: 14 },
];

const Tags = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <Section title="Minhas tags">
          <TagsSection colors={colors} />
          <Separator />
          <TagsList colors={colors} tags={tags} />
        </Section>
      </main>
    </div>
  );
};

export default Tags;
