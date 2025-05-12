import Section from "../Section";
import ActivityItem from "../ActivityItem";

const Activity = () => {
  return (
    <Section title="Atividade">
      <div className="flex flex-col gap-3">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </div>
    </Section>
  );
};

export default Activity;
