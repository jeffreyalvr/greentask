import ActivityItem from "../ActivityItem";

const StatisticsDayChart = () => {
  return (
    <div className="flex flex-col gap-10 w-[650px] h-auto px-10 py-10 bg-white rounded-2xl">
      <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
        Atividade de hoje
      </span>

      <div className="h-auto w-auto flex items-end gap-10 justify-center">
        <div className="flex gap-3 flex-wrap w-full">
          <ActivityItem task="Tarefa 1" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 2" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 3" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 4" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 5" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 6" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 7" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 4" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 5" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 6" startedAt="12:00" totalTime={2} />
          <ActivityItem task="Tarefa 7" startedAt="12:00" totalTime={2} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsDayChart;
