const Button = ({ texto, toggled, title, special, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[60px] py-3 rounded-md border-4 cursor-pointer active:border-[var(--accent-primary)] ${
        toggled ? "border-[var(--accent-primary)]" : "border-transparent"
      } ${special ? "bg-[var(--border-light)]" : "bg-[var(--bg-color)]"}`}
      title={title}
    >
      <span className="font-bold text-[var(--fg-light)]">{texto}</span>
    </button>
  );
};

export default Button;
