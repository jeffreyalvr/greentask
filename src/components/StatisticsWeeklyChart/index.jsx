const days = [
  { name: "segunda-feira", value: 0 },
  { name: "terça-feira", value: 10 },
  { name: "quarta-feira", value: 30 },
  { name: "quinta-feira", value: 50 },
  { name: "sexta-feira", value: 40 },
  { name: "sábado", value: 60 },
  { name: "domingo", value: 40 },
];

const maxBarHeight = 250;
const minBarHeight = 3;
const maxValue = Math.max(...days.map((d) => d.value));

const StatisticsWeeklyChart = () => {
  return (
    <div className="flex flex-col gap-10 w-[650px] h-auto px-10 py-10 bg-white rounded-2xl">
      <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
        Atividade da semana
      </span>

      <div className="h-auto w-auto flex items-end gap-10 justify-center">
        <div className="flex gap-5 w-auto h-full items-end">
          {days.map((day, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 w-15 items-center justify-end"
            >
              <span className="text-[var(--fg-subtle)] font-semibold text-xs">
                {day.value}h
              </span>
              <div
                className="w-6 bg-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-opaque)]"
                style={{
                  height: `${Math.max(
                    (day.value / maxValue) * maxBarHeight,
                    minBarHeight
                  )}px`,
                }}
                title={`${day.value}h`}
              ></div>
              <span className="text-[var(--fg-light)] font-semibold uppercase">
                {day.name.slice(0, 3)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsWeeklyChart;
