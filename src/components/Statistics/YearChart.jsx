const months = [
  { month: "2", value: 14 },
  { month: "3", value: 13 },
  { month: "4", value: 18 },
  { month: "5", value: 5 },
];

const maxBarHeight = 250;
const minBarHeight = 3;
const maxValue = Math.max(...months.map((m) => m.value));

const YearChart = () => {
  return (
    <div className="flex flex-col gap-10 w-full h-auto px-10 py-10 bg-white rounded-2xl">
      <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
        Atividade do ano
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
          {Array.from({ length: 12 }, (_, i) => {
            const found = months.find((m) => parseInt(m.month) === i + 1);
            const month = {
              name: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
              ][i],
              value: found ? found.value : 0,
            };
            return (
              <div
                key={i}
                className="flex flex-col gap-3 w-15 items-center justify-end"
              >
                <span className="text-[var(--fg-subtle)] font-semibold text-xs">
                  {month.value}h
                </span>

                <div
                  className="w-6 bg-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-opaque)]"
                  style={{
                    height: `${Math.max(
                      (month.value / maxValue) * maxBarHeight,
                      minBarHeight
                    )}px`,
                  }}
                  title={`${month.value}h`}
                ></div>

                <span className="text-[var(--fg-light)] font-semibold uppercase border-2 rounded-md px-1">
                  {month.name.slice(0, 3)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YearChart;
