import Section from "../Section";
import StatisticsItem from "../StatisticsItem";

const Statistics = () => {
  return (
    <Section title="Desempenho">
      <div className="flex gap-30">
        <div className="inline-block w-[200px] h-[200px] bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-3">
          <StatisticsItem task="Tarefa 1" percentage={33} />
          <StatisticsItem task="Tarefa 2" percentage={33} />
          <StatisticsItem task="Tarefa 3" percentage={33} />
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
