const ActivityItem = ({ task, startedAt, totalTime }) => {
  return (
    <div className="flex w-[450px] h-[68px] items-center justify-between px-10 py-3 text-[var(--fg-dark)] font-semibold bg-[var(--activity-item-color)] rounded-md shadow-md">
      <div className="flex gap-3 items-center pr-4">
        <i className="inline-block w-[15px] h-[15px] bg-gray-300 rounded-full"></i>
        <span className="uppercase">{task}</span>
        <span
          className="px-2 py-0.5 rounded-sm bg-gray-200 text-[var(--fg-light)]"
          title="Hora de início"
        >
          {startedAt}
        </span>
      </div>
      <div
        className="text-[var(--fg-subtle)] border-l-1 border-[var(--border-light)] pl-4"
        title="Tempo total"
      >
        {totalTime}h
      </div>
    </div>
  );
};

export default ActivityItem;
