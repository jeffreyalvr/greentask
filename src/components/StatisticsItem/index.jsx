const StatisticsItem = ({ task, percentage }) => {
  return (
    <div className="flex w-auto h-auto font-semibold">
      <div className="flex gap-3 items-center pr-4">
        <i className="inline-block w-[15px] h-[15px] bg-gray-300 rounded-full"></i>
        <span className="uppercase">{task}</span>
      </div>
      <div
        className="text-[var(--fg-subtle)] border-l-1 border-[var(--border-light)] pl-4"
        title="Tempo aplicado no mês"
      >
        {percentage}%
      </div>
    </div>
  );
};

export default StatisticsItem;
