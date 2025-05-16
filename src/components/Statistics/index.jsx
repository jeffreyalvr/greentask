import { useState } from "react";

import Section from "../Section";
import StatisticsDayChart from "../StatisticsDayChart";
import StatisticsWeeklyChart from "../StatisticsWeeklyChart";
import StatisticsMonthlyChart from "../StatisticsMonthlyChart";
import StatisticsForTasks from "../StatisticsForTasks";
import StatisticsMenu from "../StatisticsMenu";

const Statistics = () => {
  const [selectedView, setSelectedView] = useState(0);

  const handleSelectedView = (viewIndex) => {
    if (viewIndex === selectedView) return;
    setSelectedView(viewIndex);
  };

  const views = [
    {
      key: "day",
      content: (
        <div className="flex gap-10">
          <StatisticsDayChart />
          <StatisticsForTasks />
        </div>
      ),
    },
    {
      key: "weekly",
      content: (
        <div className="flex gap-10">
          <StatisticsWeeklyChart />
          <StatisticsForTasks />
        </div>
      ),
    },
    {
      key: "monthly",
      content: (
        <div className="flex flex-col gap-10">
          <StatisticsMonthlyChart />
          <StatisticsForTasks />
        </div>
      ),
    },
  ];

  return (
    <>
      <StatisticsMenu
        selectedView={selectedView}
        onSelectView={setSelectedView}
      />

      <Section title="Estatísticas do período">
        {views[selectedView].content}
      </Section>
    </>
  );
};

export default Statistics;
