import { useState } from "react";
import Button from "../Button";
import Section from "../Section";

const TaskSection = () => {
  const [selected, setSelected] = useState(5);

  const timeValues = Array.from({ length: 36 }, (_, i) => 5 + i * 5);

  const selectTime = (value) => {
    setSelected(value);
  };

  return (
    <Section title="Nova tarefa" width={500}>
      <div className="flex flex-col gap-10 w-full h-auto px-10 py-10 bg-white rounded-2xl">
        <div className="w-[500px] flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-[var(--accent-primary)] font-semibold">
            TAREFA:
          </h1>
          <select className="py-2 px-4 rounded-4xl border-2 border-gray-300 text-[var(--fg-light)] font-semibold uppercase">
            <option>leitura</option>
            <option>web development</option>
            <option>game dev</option>
            <option>japonês</option>
            <option>italiano</option>
            <option>meditação</option>
            <option>workout</option>
          </select>
        </div>
        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>
        <div className="w-[500px] flex flex-col items-center gap-4">
          <h1 className="flex flex-col items-center text-xl text-[var(--accent-primary)] font-semibold">
            TEMPO TOTAL:
            <span className="text-xs text-[var(--fg-subtle)]">
              (exibição em minutos)
            </span>
          </h1>
          <div className="w-full pb-4 flex flex-row gap-4 overflow-x-auto">
            {timeValues.map((value) => (
              <Button
                key={value}
                onClick={() => selectTime(value)}
                toggled={selected === value}
                texto={value}
              />
            ))}
          </div>
        </div>
        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button className="w-max px-10 py-4 rounded-4xl text-white bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]">
            iniciar
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TaskSection;
