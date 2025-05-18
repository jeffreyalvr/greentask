import { Link } from "react-router-dom";

const NavLink = ({ url, icon, text }) => {
  return (
    <Link
      to={url}
      className="flex gap-4 items-center text-[var(--fg-dark)] font-semibold hover:text-[var(--accent-primary)] uppercase"
    >
      <i className="w-[24px] h-[24px] flex items-center justify-center border-0">
        <img className="invert-on-dark w-fit h-fit" src={icon} />
      </i>
      {text}
    </Link>
  );
};

export default NavLink;
