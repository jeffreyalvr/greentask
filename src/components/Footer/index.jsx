const Footer = () => {
  return (
    <footer className="w-full flex flex-col py-4 border-t-2 border-[var(--border-dark)]">
      <span>
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
    </footer>
  );
};

export default Footer;
