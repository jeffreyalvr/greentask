import { useState } from "react";

const StatisticsMenu = ({ selectedView, onSelectView }) => {
  const periods = [
    { id: 0, name: "hoje" },
    { id: 1, name: "semana" },
    { id: 2, name: "mês" },
    { id: 3, name: "ano" },
  ];

  const [year, setYear] = useState("2025");
  const [isCurrentYear, setIsCurrentYear] = useState("2025");
  const currentYear = new Date().getFullYear().toString();

  const handleYear = (e) => {
    const value = e.target.value;
    if (year === value) return;

    if (value === currentYear) {
      setIsCurrentYear(true);
      onSelectView(0);
    } else {
      setIsCurrentYear(false);
      onSelectView(3);
    }

    setYear(value);
  };

  return (
    <div className="flex gap-4 w-full h-auto p-5 mt-15 bg-[var(--sidebar-bg)] rounded-2xl items-center">
      <select
        className="px-7 py-2 h-[40px] rounded-4xl border-0 bg-[var(--bg-color)] text-[var(--fg-light)] font-semibold uppercase"
        onChange={handleYear}
        value={year}
      >
        <option>2025</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>

      <div className="inline-block w-2 h-full border-r-2 border-[var(--border-dark)]"></div>

      {isCurrentYear ? (
        periods.map((period) => (
          <button
            className={`w-max px-7 py-2 rounded-4xl font-semibold uppercase cursor-pointer hover:bg-[var(--accent-opaque)] hover:text-white ${
              selectedView === period.id
                ? "bg-[var(--accent-primary)] text-white"
                : "bg-[var(--bg-color)] text-[var(--fg-dark)]"
            }`}
            key={period.id}
            onClick={() => onSelectView(period.id)}
          >
            {period.name}
          </button>
        ))
      ) : (
        <span className="w-full h-full flex items-center text-md text-[var(--fg-dark)] font-semibold">
          Exibindo dados do ano {year}
        </span>
      )}
    </div>
  );
};

export default StatisticsMenu;
