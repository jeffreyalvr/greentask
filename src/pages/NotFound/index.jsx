import { Link } from "react-router-dom";

import Header from "@components/Header";

import alert_icon from "@assets/icons/alert.svg";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full py-30 gap-10 items-center justify-center">
        <i className="w-[80px] h-[80px] border-0">
          <img className="invert-on-dark w-full h-full" src={alert_icon} />
        </i>
        <span className="text-2xl font-semibold text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
          A página procurada não existe.
        </span>
        <div className="inline-block w-full h-2 border-dashed border-b-2 border-[var(--border-light)]"></div>
        <Link
          to="/"
          type="button"
          className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]"
        >
          Voltar a Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
