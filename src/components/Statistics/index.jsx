import { useState } from "react";

import Section from "../Section";
import StatisticsWeeklyChart from "../StatisticsWeeklyChart";
import StatisticsMonthlyChart from "../StatisticsMonthlyChart";
import StatisticsYearChart from "../StatisticsYearChart";
import StatisticsForTasks from "../StatisticsForTasks";
import StatisticsMenu from "../StatisticsMenu";
import Activity from "../Activity";

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
        <div className="flex flex-col gap-10">
          <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
            Atividade de hoje
          </span>
          <Activity />
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
    {
      key: "year",
      content: (
        <div className="flex flex-col gap-10">
          <StatisticsYearChart />
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
