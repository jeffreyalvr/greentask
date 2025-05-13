const Section = ({ title, borderless, children }) => {
  return (
    <section
      className={`flex flex-col py-20 gap-8 ${
        borderless ? "border-b-2 border-b-[var(--border-light)]" : "border-0"
      }`}
    >
      <h1 className="text-3xl text-[var(--accent-primary)] font-bold uppercase">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Section;
