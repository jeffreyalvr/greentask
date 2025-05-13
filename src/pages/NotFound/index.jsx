import warning_icon from "../../assets/icons/warning.png";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full py-30">
      <i className="w-[80px] h-[80px] border-0">
        <img className="w-full h-full" src={warning_icon} />
      </i>
      <span className="text-2xl font-bold text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
        A página procurada não existe.
      </span>
    </div>
  );
};

export default NotFound;
