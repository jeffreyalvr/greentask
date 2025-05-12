import Footer from "../Footer";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-auto min-w-80 max-w-96 h-full px-10 py-18 gap-20 items-center bg-[var(--sidebar-bg)]">
      <h1 className="font-bold text-5xl text-[var(--accent-primary)]">
        greentask.
      </h1>
      <div className="flex flex-col gap-6 w-full h-auto font-semibold text-[16px]">
        <a href="#" className="text-[var(--fg-dark)] font-semibold">
          DASHBOARD
        </a>
        <a href="#" className="text-[var(--fg-dark)] font-semibold">
          TIMELINE
        </a>
        <a href="#" className="text-[var(--fg-dark)] font-semibold">
          TAGS
        </a>
      </div>
      <Footer />
    </aside>
  );
};

export default Sidebar;
