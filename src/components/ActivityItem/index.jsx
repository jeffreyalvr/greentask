const ActivityItem = ({ task, totalTime }) => {
  return (
    <div className="flex w-[450px] h-[68px] items-center justify-between px-10 py-3 text-[var(--fg-dark)] font-semibold bg-[var(--activity-item-color)] rounded-md shadow-md">
      <div className="flex gap-3 items-center">
        <i className="inline-block w-[15px] h-[15px] bg-gray-300 rounded-full"></i>
        <span className="uppercase">{task}</span>
      </div>
      <div className="text-[var(--fg-subtle)] border-l-1 border-[var(--border-light)] pl-4">
        {totalTime}h
      </div>
    </div>
  );
};

export default ActivityItem;
