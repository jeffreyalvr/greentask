import Section from "../Section";
import StatisticsDailyChart from "../StatisticsDailyChart";
import StatisticsForTasks from "../StatisticsForTasks";
import StatisticsMenu from "../StatisticsMenu";

const Statistics = () => {
  return (
    <>
      <StatisticsMenu />

      <Section title="Estatísticas do período">
        <StatisticsForTasks />
        <StatisticsDailyChart />
      </Section>
    </>
  );
};

export default Statistics;
