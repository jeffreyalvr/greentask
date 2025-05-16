const days = [
  { day: "2", value: 14 },
  { day: "3", value: 12 },
  { day: "4", value: 17 },
  { day: "5", value: 4 },
  { day: "6", value: 10 },
  { day: "7", value: 15 },
  { day: "11", value: 7 },
  { day: "12", value: 4 },
  { day: "15", value: 5 },
  { day: "16", value: 12 },
];

// From day 1 to today
const daysInMonth = new Date().getDate();

const maxBarHeight = 250;
const minBarHeight = 3;
const maxValue = Math.max(...days.map((d) => d.value));

const StatisticsMonthlyChart = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-auto px-10 py-10 bg-white rounded-2xl">
      <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
        Atividade do mês
      </span>

      <div className="h-auto w-auto flex gap-15">
        <div className="w-[300px] flex flex-col gap-5">
          <div className="flex flex-col gap-2 w-full h-auto px-5 py-4 bg-[var(--bg-color)] rounded-md">
            <span className="text-[var(--fg-light)] font-semibold">
              Tempo total dedicado
            </span>
            <span className="text-[var(--fg-dark)] font-semibold">317 h</span>
          </div>
          <div className="flex flex-col gap-2 w-full h-auto px-5 py-4 bg-[var(--bg-color)] rounded-md">
            <span className="text-[var(--fg-light)] font-semibold">
              Ano anterior (2024)
            </span>
            <span className="text-[var(--fg-dark)] font-semibold">0 h</span>
          </div>
          <div className="flex flex-col gap-2 w-full h-auto px-5 py-4 bg-[var(--bg-color)] rounded-md">
            <span className="text-[var(--fg-light)] font-semibold">2023</span>
            <span className="text-[var(--fg-dark)] font-semibold">0 h</span>
          </div>
        </div>

        <div className="flex gap-5 w-auto h-full flex-wrap">
          {Array.from({ length: daysInMonth }, (_, i) => {
            const currentDay = (i + 1).toString();
            const match = days.find((d) => d.day === currentDay);
            const value = match ? match.value : 0;
            const isToday = i + 1 === daysInMonth;

            return (
              <div
                key={i}
                className="flex flex-col gap-3 w-15 items-center justify-end"
              >
                <span className="text-[var(--fg-subtle)] font-semibold text-xs">
                  {value}h
                </span>
                <div
                  className="w-6 bg-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-opaque)]"
                  style={{
                    height: `${Math.max(
                      (value / maxValue) * maxBarHeight,
                      minBarHeight
                    )}px`,
                  }}
                  title={`${value}h`}
                ></div>
                <span
                  className={`font-semibold uppercase border-2 rounded-md px-1 ${
                    isToday
                      ? "text-[var(--accent-opaque)] border-[var(--accent-opaque)]"
                      : "text-[var(--fg-light)] border-transparent"
                  }`}
                >
                  {currentDay}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatisticsMonthlyChart;
