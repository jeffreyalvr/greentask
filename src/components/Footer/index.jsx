import ThemeToggler from "@components/ThemeToggler";

const Footer = () => {
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

      <ThemeToggler />
    </footer>
  );
};

export default Footer;
