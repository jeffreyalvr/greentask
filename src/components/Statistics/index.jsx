import { useState } from "react";

import Section from "@components/Section";
import Activity from "@components/Activity";

import WeeklyChart from "@components/Statistics/WeeklyChart";
import MonthlyChart from "@components/Statistics/MonthlyChart";
import YearChart from "@components/Statistics/YearChart";
import ForTasks from "@components/Statistics/ForTasks";
import StatisticsMenu from "@components/Statistics/StatisticsMenu";

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
          <ForTasks />
        </div>
      ),
    },
    {
      key: "weekly",
      content: (
        <div className="flex gap-10">
          <WeeklyChart />
          <ForTasks />
        </div>
      ),
    },
    {
      key: "monthly",
      content: (
        <div className="flex flex-col gap-10">
          <MonthlyChart />
          <ForTasks />
        </div>
      ),
    },
    {
      key: "year",
      content: (
        <div className="flex flex-col gap-10">
          <YearChart />
          <ForTasks />
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
