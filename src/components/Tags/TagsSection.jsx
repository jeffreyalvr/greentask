import { useState } from "react";

import Separator from "@components/Separator";

const TagsSection = ({ colors, editTagData }) => {
  const [addTagBoxVisible, setAddTagBoxVisible] = useState(false);
  const [tagName, setTagName] = useState(editTagData?.name || "");

  // Usando coalescência nula para evitar valor nulo com id 0
  const [selectedColor, setSelectedColor] = useState(
    editTagData?.colorId ?? null
  );

  const handleTagName = (e) => {
    const value = e.target.value;
    setTagName(value);
  };

  const selectColor = (value) => {
    if (value === selectedColor) return;
    setSelectedColor(value);
  };

  const toggleAddTagBoxVisibility = () => {
    setAddTagBoxVisible(!addTagBoxVisible);
  };

  const cancelAddTag = () => {
    toggleAddTagBoxVisibility();
    setTagName("");
    setSelectedColor(null);
  };

  return (
    <>
      {editTagData || addTagBoxVisible ? (
        <div className="flex flex-col gap-10 max-w-[600px] h-auto px-10 py-10 bg-white rounded-2xl">
          <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
            {editTagData ? `Alterando ${editTagData.name}` : "Criar nova tag"}
          </span>

          <div className="flex flex-col gap-3">
            <span className="text-lg text-[var(--fg-light)] font-semibold">
              Nome
            </span>
            {/* Ligar o input a um state */}
            <input
              type="text"
              placeholder="Insira um nome aqui..."
              className="w-full h-auto p-3 bg-[var(--activity-item-color)] border-1 border-[var(--border-light)] rounded-md shadow-md"
              value={tagName}
              onChange={handleTagName}
            />
          </div>

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

          <Separator />

          <div className="w-full flex justify-end items-center gap-2">
            <button
              className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-secondary-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-secondary)]"
              onClick={cancelAddTag}
            >
              Cancelar
            </button>
            <button className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]">
              Criar
            </button>
          </div>
        </div>
      ) : (
        <button
          className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]"
          onClick={toggleAddTagBoxVisibility}
        >
          Criar nova tag
        </button>
      )}
    </>
  );
};

export default TagsSection;
