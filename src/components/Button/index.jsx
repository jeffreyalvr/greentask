const Button = ({ texto }) => {
  return (
    <button className="w-max px-2 py-3 rounded-md bg-[var(--bg-color)] border-4 border-transparent cursor-pointer active:border-[var(--accent-primary)]">
      <span className="font-bold text-[var(--fg-light)]">{texto}</span>
    </button>
  );
};

export default Button;
