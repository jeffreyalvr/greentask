import useThemeStore from "@/store/useThemeStore";

import light_icon from "@assets/icons/light.svg";
import dark_icon from "@assets/icons/dark.svg";

const ThemeToggler = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div className="flex gap-2 w-fit">
      <button
        className={`font-semibold uppercase border-2 rounded-4xl px-3 py-1 text-[var(--fg-light)] hover:border-[var(--accent-opaque)] ${
          theme === "light"
            ? "border-[var(--accent-primary)]"
            : "border-[var(--border-dark)]"
        }`}
        onClick={() => setTheme("light")}
      >
        <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
          <img
            className="invert-on-dark w-fit h-fit"
            src={light_icon}
            title="Ativar tema claro"
            alt="Claro"
          />
        </i>
      </button>
      <button
        className={`font-semibold uppercase border-2 rounded-4xl px-3 py-1 text-[var(--fg-light)] hover:border-[var(--accent-opaque)] ${
          theme === "dark"
            ? "border-[var(--accent-primary)]"
            : "border-[var(--border-dark)]"
        }`}
        onClick={() => setTheme("dark")}
      >
        <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
          <img
            className="invert-on-dark w-fit h-fit"
            src={dark_icon}
            title="Ativar tema escuro"
            alt="Escuro"
          />
        </i>
      </button>
    </div>
  );
};

export default ThemeToggler;
