import Section from "../Section";
import StatisticsDailyChart from "../StatisticsDailyChart";
import StatisticsForTasks from "../StatisticsForTasks";
import StatisticsMenu from "../StatisticsMenu";

const Statistics = () => {
  return (
    <>
      <StatisticsMenu />

      <Section title="Estatísticas do período">
        <div className="flex gap-10">
          <StatisticsDailyChart />
          <StatisticsForTasks />
        </div>
      </Section>
    </>
  );
};

export default Statistics;
