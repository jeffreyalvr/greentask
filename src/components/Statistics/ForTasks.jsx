import Chart from "@components/Statistics/Chart";
import StatisticsItem from "@components/Statistics/StatisticsItem";

import alert_icon from "@assets/icons/alert.svg";

const ForTasks = () => {
  // TODO: variável placeholder
  const emptyData = false;

  return (
    <div className="flex flex-col gap-10 w-full h-auto px-10 py-10 bg-white rounded-2xl">
      <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
        Distribuição por tarefa
      </span>

      {emptyData ? (
        <div className="flex flex-col items-center justify-center py-15 gap-3">
          <i className="w-[32px] h-[32px] border-0">
            <img className="w-full h-full" src={alert_icon} />
          </i>
          <p className="text-lg text-[var(--fg-light)]">
            Sem dados para o período.
          </p>
        </div>
      ) : (
        <div className="flex gap-20 h-auto">
          <div className="inline-block w-[200px] h-[200px] bg-gray-300 rounded-full overflow-clip">
            <Chart />
          </div>

          <div className="grid grid-cols-3 w-full h-full gap-x-15 gap-y-5 auto-rows-min">
            <StatisticsItem task="Tarefa 1" percentage={33} total_time={45} />
            <StatisticsItem task="Tarefa 2" percentage={33} total_time={35} />
            <StatisticsItem task="Tarefa 3" percentage={33} total_time={30} />
            <StatisticsItem task="Tarefa 4" percentage={33} total_time={30} />
            <StatisticsItem task="Tarefa 5" percentage={33} total_time={25} />
            <StatisticsItem task="Tarefa 6" percentage={33} total_time={15} />
            <StatisticsItem task="Tarefa 7" percentage={33} total_time={15} />
            <StatisticsItem task="Tarefa 8" percentage={33} total_time={5} />
            <StatisticsItem task="Tarefa 9" percentage={33} total_time={5} />
            <StatisticsItem task="Tarefa 10" percentage={33} total_time={5} />
            <StatisticsItem task="Tarefa 11" percentage={33} total_time={5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ForTasks;
