import Footer from "../Footer";

import dashboard_icon from "../../assets/icons/dashboard.svg";
import history_icon from "../../assets/icons/history.svg";
import tag_icon from "../../assets/icons/tag.svg";
import NavLink from "../NavLink";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-auto min-w-80 max-w-96 h-full px-10 py-18 gap-20 items-center bg-[var(--sidebar-bg)]">
      <h1 className="font-bold text-5xl text-[var(--accent-primary)]">
        greentask.
      </h1>
      <nav className="flex flex-col gap-6 w-full h-auto font-semibold text-[16px]">
        <NavLink url="/" icon={dashboard_icon} text="Dashboard" />
        <NavLink url="/history" icon={history_icon} text="Histórico" />
        <NavLink url="/tags" icon={tag_icon} text="Tags" />
      </nav>
      <Footer />
    </aside>
  );
};

export default Sidebar;
