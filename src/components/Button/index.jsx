const Button = ({ texto, toggled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[60px] py-3 rounded-md bg-[var(--bg-color)] border-4 cursor-pointer active:border-[var(--accent-primary)] ${
        toggled ? "border-[var(--accent-primary)]" : "border-transparent"
      }`}
    >
      <span className="font-bold text-[var(--fg-light)]">{texto}</span>
    </button>
  );
};

export default Button;
