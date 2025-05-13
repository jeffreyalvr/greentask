import Section from "../Section";
import StatisticsChart from "../StatisticsChart";
import StatisticsItem from "../StatisticsItem";

const Statistics = () => {
  return (
    <Section title="Estatísticas do mês">
      <div className="flex flex-col gap-10 w-auto h-auto px-10 py-10 bg-white rounded-2xl">
        <div className="flex gap-30">
          <div className="inline-block w-[200px] h-[200px] bg-gray-300 rounded-full overflow-clip">
            <StatisticsChart />
          </div>

          <div className="flex flex-col gap-3">
            <StatisticsItem task="Tarefa 1" percentage={33} />
            <StatisticsItem task="Tarefa 2" percentage={33} />
            <StatisticsItem task="Tarefa 3" percentage={33} />
            <StatisticsItem task="Tarefa 4" percentage={33} />
            <StatisticsItem task="Tarefa 5" percentage={33} />
            <StatisticsItem task="Tarefa 6" percentage={33} />
            <StatisticsItem task="Tarefa 7" percentage={33} />
            <StatisticsItem task="Tarefa 8" percentage={33} />
            <StatisticsItem task="Tarefa 9" percentage={33} />
            <StatisticsItem task="Tarefa 10" percentage={33} />
            <StatisticsItem task="Tarefa 11" percentage={33} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
