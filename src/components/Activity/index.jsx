import Section from "../Section";
import ActivityItem from "../ActivityItem";

const Activity = () => {
  return (
    <Section title="Atividade">
      <div className="flex flex-col gap-3">
        <ActivityItem task="Tarefa 1" totalTime={2} />
        <ActivityItem task="Tarefa 2" totalTime={2} />
        <ActivityItem task="Tarefa 3" totalTime={2} />
      </div>
    </Section>
  );
};

export default Activity;
