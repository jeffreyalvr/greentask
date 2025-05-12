import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Tarefa 1", value: 33 },
  { name: "Tarefa 2", value: 33 },
  { name: "Tarefa 3", value: 33 },
];

const COLORS = ["#D8D24D", "#4DB7D8", "#61D84D"];

const StatisticsChart = () => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default StatisticsChart;
