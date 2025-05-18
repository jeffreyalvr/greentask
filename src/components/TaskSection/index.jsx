import { useState } from "react";

import { Link } from "react-router-dom";

import Button from "@components/Button";
import Section from "@components/Section";
import Separator from "@components/Separator";

import close_icon from "@assets/icons/close.svg";
import arrow_icon from "@assets/icons/arrow.svg";

import useColorStore from "@store/useColorStore";
import useTagStore from "@store/useTagStore";

const TaskSection = () => {
  const [timeTableVisible, setTimeTableVisible] = useState(false);
  const [selected, setSelected] = useState(5);
  const [selectedTag, setSelectedTag] = useState(null);

  const getColorHex = useColorStore((state) => state.getColorById);
  const colorHex = getColorHex();
  const tags = useTagStore((state) => state.tags);

  const quickValues = [
    { time: 5 },
    { time: 10 },
    { time: 15 },
    { time: 30 },
    { time: 45 },
    { time: 60 },
  ];

  const timeValues = Array.from({ length: 36 }, (_, i) => 5 + i * 5);
  const isQuickValue = quickValues.some((q) => q.time === selected);

  const selectTime = (value) => {
    if (value === selected) return;
    setSelected(value);
  };

  const toggleTimeTable = () => {
    setTimeTableVisible(!timeTableVisible);
  };

  const handleSelectedTag = (e) => {
    const tag = e.target.value;
    setSelectedTag(tag);
  };

  return (
    <Section title="Nova tarefa">
      <div className="flex flex-col gap-10 max-w-[600px] h-auto px-10 py-10 bg-[var(--section-bg)] rounded-2xl">
        <div className="w-[500px] flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl text-[var(--accent-primary)] font-semibold">
            TAREFA:
          </h1>
          <div className="w-full flex gap-4 py-2 px-4 justify-center items-center rounded-4xl border-2 border-[var(--border-light)] text-[var(--fg-light)] font-semibold uppercase">
            {selectedTag ? (
              <i
                className="inline-block w-[15px] h-[15px] rounded-full"
                style={{
                  backgroundColor: colorHex,
                }}
              ></i>
            ) : null}
            <select
              className="w-full py-2 border-0 text-[var(--fg-light)] font-semibold uppercase"
              defaultValue=""
              value={selectedTag}
              onChange={handleSelectedTag}
            >
              <option value="" disabled>
                selecione uma tag
              </option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          <Link
            to="/tags"
            className="font-semibold uppercase border-2 border-[var(--border-light)] rounded-4xl px-3 py-1 text-[var(--accent-opaque)] hover:border-[var(--accent-opaque)]"
          >
            Criar nova tag
          </Link>
        </div>

        <Separator />

        <div className="w-auto flex flex-col items-center gap-4">
          <h1 className="flex flex-col items-center text-xl text-[var(--accent-primary)] font-semibold">
            TEMPO TOTAL:
            <span className="text-xs text-[var(--fg-subtle)]">
              (exibição em minutos)
            </span>
          </h1>

          {timeTableVisible ? (
            <div className="w-full pb-4 flex flex-wrap gap-4">
              {timeValues.map((timeValue) => (
                <Button
                  key={timeValue}
                  onClick={() => {
                    selectTime(timeValue);
                    toggleTimeTable();
                  }}
                  toggled={selected === timeValue}
                  texto={timeValue}
                />
              ))}

              <Button
                onClick={() => toggleTimeTable()}
                image={close_icon}
                title="Fechar"
                texto="X"
                special
              />
            </div>
          ) : (
            <div className="w-full pb-4 flex gap-4">
              {quickValues.map((quickValue) => (
                <Button
                  key={quickValue.time}
                  onClick={() => selectTime(quickValue.time)}
                  toggled={selected === quickValue.time}
                  texto={quickValue.time}
                />
              ))}

              <Button
                onClick={() => toggleTimeTable()}
                image={arrow_icon}
                toggled={!isQuickValue}
                title="Expandir opções"
                texto="+"
                special
              />
            </div>
          )}
        </div>

        <Separator />

        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]">
            iniciar | {selected}"
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TaskSection;
