const Section = ({ title, children }) => {
  return (
    <section className="flex flex-col py-20 gap-8 border-0">
      <h1 className="text-3xl text-[var(--accent-primary)] font-bold uppercase">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Section;
