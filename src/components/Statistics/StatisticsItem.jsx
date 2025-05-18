const StatisticsItem = ({ tagColor, tagName, percentage, total_time }) => {
  return (
    <div className="flex h-fit gap-x-10 gap-y-5 py-2 items-center font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
      <div className="flex gap-3 items-center pr-4">
        <i
          className="inline-block w-[15px] h-[15px] rounded-full"
          style={{ backgroundColor: tagColor ? tagColor.hexColor : "#cccccc" }}
        ></i>
        <span className="text-[var(--fg-dark)] uppercase">{tagName}</span>
      </div>
      <div className="flex gap-8">
        <span
          className="text-[var(--fg-subtle)]"
          title="Porcentagem aplicada no mês"
        >
          {percentage}%
        </span>
        <span className="text-[var(--fg-subtle)]" title="Tempo aplicado no mês">
          {total_time} h
        </span>
      </div>
    </div>
  );
};

export default StatisticsItem;
