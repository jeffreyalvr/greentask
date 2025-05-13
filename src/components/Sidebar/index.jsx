import Footer from "../Footer";

import { Link } from "react-router-dom";

import dashboard_icon from "../../assets/icons/dashboard.svg";
import history_icon from "../../assets/icons/history.svg";
import tag_icon from "../../assets/icons/tag.svg";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-auto min-w-80 max-w-96 h-full px-10 py-18 gap-20 items-center bg-[var(--sidebar-bg)]">
      <h1 className="font-bold text-5xl text-[var(--accent-primary)]">
        greentask.
      </h1>
      <div className="flex flex-col gap-6 w-full h-auto font-semibold text-[16px]">
        <Link
          to="/"
          className="flex gap-4 items-center text-[var(--fg-dark)] font-semibold"
        >
          <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
            <img className="w-fit h-fit" src={dashboard_icon} />
          </i>
          DASHBOARD
        </Link>
        <Link
          to="/history"
          className="flex gap-4 items-center justify-start text-[var(--fg-dark)] font-semibold"
        >
          <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
            <img className="w-fit h-fit" src={history_icon} />
          </i>
          HISTÓRICO
        </Link>
        <Link
          to="/tags"
          className="flex gap-4 items-center justify-start text-[var(--fg-dark)] font-semibold"
        >
          <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
            <img className="w-fit h-fit" src={tag_icon} />
          </i>
          TAGS
        </Link>
      </div>
      <Footer />
    </aside>
  );
};

export default Sidebar;
