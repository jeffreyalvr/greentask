import Separator from "@components/Separator";

import edit_icon from "@assets/icons/edit.svg";
import trash_icon from "@assets/icons/trash.svg";
import clock_icon from "@assets/icons/clock.svg";

const TagsList = () => {
  return (
    <div className="flex gap-5 w-full">
      <div className="flex flex-col gap-2 w-[450px] h-auto px-10 py-5 text-[var(--fg-dark)] font-semibold bg-[var(--activity-item-color)] rounded-md shadow-md">
        <div className="flex gap-3 items-center py-2">
          <i className="inline-block w-[15px] h-[15px] bg-gray-300 rounded-full"></i>
          <span className="uppercase">tag 1</span>
        </div>

        <Separator />

        <div className="flex w-full h-auto items-center justify-between">
          <div className="flex gap-3 justify-start">
            <button
              title="Editar tag"
              className="w-auto h-auto p-2 flex items-center border-2 rounded-md border-[var(--border-light)] hover:border-[var(--accent-opaque)]"
            >
              <i className="w-full h-full flex items-center justify-center border-0">
                <img
                  className="w-[24px] h-[24px]"
                  src={edit_icon}
                  alt="Editar"
                />
              </i>
            </button>

            <button
              title="Excluir"
              className="w-auto h-auto p-2 flex items-center border-2 rounded-md border-[var(--border-light)] hover:border-[var(--accent-opaque)]"
            >
              <i className="w-full h-full flex items-center justify-center border-0">
                <img
                  className="w-[24px] h-[24px]"
                  src={trash_icon}
                  alt="Excluir"
                />
              </i>
            </button>
          </div>

          <div className="flex items-center justify-end gap-3">
            <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
              <img
                className="w-fit h-fit"
                src={clock_icon}
                title="Quantidade de usos"
              />
            </i>
            <div
              className="w-fit px-3 py-1 rounded-sm bg-gray-200 text-[var(--fg-light)]"
              title="Quantidade de usos"
            >
              {0}
            </div>

            <div
              className="text-[var(--fg-subtle)] border-l-1 border-[var(--border-light)] pl-3"
              title="Tempo total"
            >
              {0}h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsList;
