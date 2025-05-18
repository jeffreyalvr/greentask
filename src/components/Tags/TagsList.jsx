import { Link } from "react-router-dom";

import Separator from "@components/Separator";

import edit_icon from "@assets/icons/edit.svg";
import trash_icon from "@assets/icons/trash.svg";
import clock_icon from "@assets/icons/clock.svg";

import useTagStore from "@/store/useTagStore";

const TagsList = ({ colors }) => {
  const tags = useTagStore((state) => state.tags);

  return (
    <div className="flex gap-5 w-full flex-wrap">
      {tags.map((tag) => {
        const tagColor = colors.find((c) => c.id === tag.colorId);

        return (
          <div
            key={tag.id}
            className="flex flex-col gap-2 w-[450px] h-auto px-10 py-5 text-[var(--fg-dark)] font-semibold bg-[var(--item-bg)] rounded-md shadow-md"
          >
            <div className="flex gap-3 items-center py-2">
              <i
                className="inline-block w-[15px] h-[15px] rounded-full"
                style={{
                  backgroundColor: tagColor ? tagColor.hexColor : "#cccccc",
                }}
              ></i>
              <span className="uppercase">{tag.name}</span>
            </div>

            <Separator />

            <div className="flex w-full h-auto items-center justify-between">
              <div className="flex gap-3 justify-start">
                <Link
                  to={`/tags/edit/${tag.id}`}
                  title="Editar tag"
                  className="w-auto h-auto p-2 flex items-center border-2 rounded-md border-[var(--border-light)] hover:border-[var(--accent-opaque)]"
                >
                  <i className="w-full h-full flex items-center justify-center border-0">
                    <img
                      className="invert-on-dark w-[24px] h-[24px]"
                      src={edit_icon}
                      alt="Editar"
                    />
                  </i>
                </Link>

                <button
                  title="Excluir"
                  className="w-auto h-auto p-2 flex items-center border-2 rounded-md border-[var(--border-light)] hover:border-[var(--accent-opaque)]"
                >
                  <i className="w-full h-full flex items-center justify-center border-0">
                    <img
                      className="invert-on-dark w-[24px] h-[24px]"
                      src={trash_icon}
                      alt="Excluir"
                    />
                  </i>
                </button>
              </div>

              <div className="flex items-center justify-end gap-3">
                <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
                  <img
                    className="invert-on-dark w-fit h-fit"
                    src={clock_icon}
                    title="Quantidade de usos"
                  />
                </i>
                <div
                  className="w-fit px-3 py-1 rounded-sm bg-[var(--border-light)] text-[var(--fg-light)]"
                  title="Quantidade de usos"
                >
                  {0}
                </div>

                <div
                  className="text-[var(--fg-subtle)] border-l-1 border-[var(--border-light)] pl-3"
                  title="Tempo total"
                >
                  {0} h
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TagsList;
