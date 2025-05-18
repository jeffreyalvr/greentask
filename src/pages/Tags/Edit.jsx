import { useParams, Navigate } from "react-router-dom";

import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import EditTag from "@/components/Tags/EditTag";

import useTagStore from "@/store/useTagStore";
import useColorStore from "@/store/useColorStore";

const Edit = () => {
  const { id } = useParams();

  const colors = useColorStore((state) => state.colors);
  const getColorById = useColorStore((state) => state.getColorById);
  const getTagById = useTagStore((state) => state.getTagById);
  const tag = getTagById(Number(id));
  const hexColor = getColorById(tag.colorId);

  if (!tag) return <Navigate to="/404" replace />;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col h-fit px-10">
        <Section title="Editar tag">
          <EditTag colors={colors} hexColor={hexColor} editTagData={tag} />
        </Section>
      </main>
    </div>
  );
};

export default Edit;
