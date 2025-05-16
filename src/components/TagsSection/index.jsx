import { useState } from "react";

import Section from "../Section";

const colors = [
  { id: 0, name: "vermelho", hex: "f94144" },
  { id: 1, name: "azul", hex: "0096c7" },
  { id: 2, name: "amarelo", hex: "f9c74f" },
  { id: 3, name: "verde", hex: "588157" },
  { id: 4, name: "verde musgo", hex: "90be6d" },
  { id: 5, name: "salmão", hex: "f8ad9d" },
  { id: 6, name: "roxo", hex: "b892ff" },
  { id: 7, name: "laranja", hex: "f3722c" },
  { id: 8, name: "rosa", hex: "ff8fab" },
  { id: 9, name: "cinza", hex: "a5a5a5" },
  { id: 10, name: "verde azulado", hex: "3c6e71" },
  { id: 11, name: "ciano", hex: "70e4ef" },
  { id: 12, name: "magenta", hex: "b43e8f" },
  { id: 13, name: "marrom", hex: "9c6644" },
  { id: 14, name: "bege", hex: "e6ccb2" },
  { id: 15, name: "preto", hex: "242423" },
];

const TagsSection = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const selectColor = (value) => {
    if (value === selectedColor) return;
    setSelectedColor(value);
  };

  return (
    <Section title="Minhas tags">
      <div className="flex flex-col gap-10 max-w-[600px] h-auto px-10 py-10 bg-white rounded-2xl">
        <div className="flex flex-col gap-3">
          <span className="text-lg text-[var(--fg-light)] font-semibold">
            Nome da tag
          </span>
          <input
            type="text"
            placeholder="Insira um nome aqui..."
            className="w-full h-auto p-3 bg-[var(--activity-item-color)] border-1 border-[var(--border-light)] rounded-md shadow-md"
          />
        </div>

        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>

        <div className="flex flex-col gap-3">
          <span className="text-lg text-[var(--fg-light)] font-semibold">
            Cor
          </span>
          <div className="flex gap-3 flex-wrap">
            {colors.map((color) => (
              <button
                title={color.name.toUpperCase()}
                className={`w-auto h-auto p-2 flex items-center border-2 rounded-md hover:border-[var(--accent-opaque)] ${
                  selectedColor === color.id
                    ? "border-[var(--accent-primary)]"
                    : "border-[var(--border-light)]"
                }`}
                key={color.id}
                onClick={() => {
                  selectColor(color.id);
                }}
              >
                <i
                  className={`inline-block w-[18px] h-[18px] rounded-full`}
                  style={{ backgroundColor: "#" + color.hex }}
                ></i>
              </button>
            ))}
          </div>

          {selectedColor !== null ? (
            <span className="text-sm text-[var(--fg-light)]">
              {colors
                .find((color) => color.id === selectedColor)
                .name.toUpperCase()}
            </span>
          ) : null}
        </div>

        <div className="inline-block h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>

        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]">
            Criar
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TagsSection;
