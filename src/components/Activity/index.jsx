import ActivityItem from "./ActivityItem";

const Activity = () => {
  return (
    <div className="flex gap-3 flex-wrap w-full">
      <ActivityItem task="Tarefa 1" startedAt="12:00" totalTime={2} />
      <ActivityItem task="Tarefa 2" startedAt="12:00" totalTime={2} />
      <ActivityItem task="Tarefa 3" startedAt="12:00" totalTime={2} />
      <ActivityItem task="Tarefa 4" startedAt="12:00" totalTime={2} />
      <ActivityItem task="Tarefa 5" startedAt="12:00" totalTime={2} />
      <ActivityItem task="Tarefa 6" startedAt="12:00" totalTime={2} />
      <ActivityItem task="Tarefa 7" startedAt="12:00" totalTime={2} />
    </div>
  );
};

export default Activity;
