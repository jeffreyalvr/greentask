import Section from "../Section";
import StatisticsDailyChart from "../StatisticsDailyChart";
import StatisticsForTasks from "../StatisticsForTasks";
import StatisticsMenu from "../StatisticsMenu";
import Activity from "../Activity";

const Statistics = () => {
  return (
    <>
      <StatisticsMenu />

      <Section title="Estatísticas do período">
        <div className="flex gap-10">
          <StatisticsDailyChart />
          <StatisticsForTasks />
        </div>

        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>

        <Activity />
      </Section>
    </>
  );
};

export default Statistics;
