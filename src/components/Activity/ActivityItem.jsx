import useTagStore from "@/store/useTagStore";
import useColorStore from "@store/useColorStore";

const ActivityItem = ({ tagId, startedAt, totalTime }) => {
  const getColorHex = useColorStore((state) => state.getColorById);
  const getTagById = useTagStore((state) => state.getTagById);
  const tag = getTagById(tagId);
  const colorHex = getColorHex(tag.colorId);

  return (
    <div className="flex w-[450px] h-[68px] items-center justify-between px-10 py-3 text-[var(--fg-dark)] font-semibold bg-[var(--item-bg)] rounded-md shadow-md">
      <div className="flex gap-3 items-center pr-4">
        <i
          className="inline-block w-[15px] h-[15px] rounded-full"
          style={{
            backgroundColor: colorHex,
          }}
        ></i>
        {tag ? (
          <span className="uppercase">{tag.name}</span>
        ) : (
          <span className="uppercase text-gray-400 italic">Indefinido</span>
        )}
        <span
          className="px-2 py-0.5 rounded-sm bg-[var(--border-light)] text-[var(--fg-light)]"
          title="Hora de início"
        >
          {startedAt}
        </span>
      </div>
      <div
        className="text-[var(--fg-subtle)] border-l-1 border-[var(--border-light)] pl-4"
        title="Tempo total"
      >
        {/* TODO: Criar função util para formatação de tempo */}
        {totalTime / 60} h
      </div>
    </div>
  );
};

export default ActivityItem;
