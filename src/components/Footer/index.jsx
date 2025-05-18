import light_icon from "@assets/icons/light.svg";
import dark_icon from "@assets/icons/dark.svg";

import useThemeStore from "@/store/useThemeStore";

const Footer = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <footer className="w-full flex flex-col gap-8 py-4 border-dashed border-t-2 border-[var(--border-dark)]">
      <span className="text-[var(--fg-light)]">
        Feito por{" "}
        <a
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
          className="text-[var(--accent-primary)] font-semibold hover:underline"
        >
          @jeffreyalvr.
        </a>
      </span>

      <div className="flex gap-2 w-full">
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
    </footer>
  );
};

export default Footer;
