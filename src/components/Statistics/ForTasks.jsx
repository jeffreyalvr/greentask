import Chart from "@components/Statistics/Chart";
import StatisticsItem from "@components/Statistics/StatisticsItem";

import alert_icon from "@assets/icons/alert.svg";

import useColorStore from "@/store/useColorStore";
import useTagStore from "@/store/useTagStore";

const ForTasks = () => {
  const colors = useColorStore((state) => state.colors);
  const tags = useTagStore((state) => state.tags);

  return (
    <div className="flex flex-col gap-10 w-full h-auto px-10 py-10 bg-white rounded-2xl">
      <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
        Distribuição por tarefa
      </span>

      {tags ? (
        <div className="flex gap-20 h-auto">
          <div className="inline-block w-[200px] h-[200px] bg-gray-300 rounded-full overflow-clip">
            {/* FIXME: PieChart placeholder para listagem de dados */}
            <Chart />
          </div>

          <div className="grid grid-cols-3 w-full h-full gap-x-15 gap-y-5 auto-rows-min">
            {/* FIXME: Código placeholder para listagem de dados */}
            {tags.map((tag) => {
              const tagColor = colors.find((c) => c.id === tag.colorId);

              return (
                <StatisticsItem
                  tagColor={tagColor}
                  tagName={tag.name}
                  percentage={33}
                  total_time={35}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-15 gap-3">
          <i className="w-[32px] h-[32px] border-0">
            <img className="w-full h-full" src={alert_icon} />
          </i>
          <p className="text-lg text-[var(--fg-light)]">
            Sem dados para o período.
          </p>
        </div>
      )}
    </div>
  );
};

export default ForTasks;
