const Button = ({ texto, toggled, image, title, special, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[60px] h-[60px] max-h-[60px] rounded-md border-4 cursor-pointer active:border-[var(--accent-primary)] ${
        toggled ? "border-[var(--accent-primary)]" : "border-transparent"
      } ${special ? "bg-[var(--border-light)]" : "bg-[var(--bg-color)]"}`}
      title={title}
    >
      {image ? (
        <i className="w-full h-full flex items-center justify-center border-0">
          <img
            className="invert-on-dark w-[32px] h-[32px]"
            src={image}
            alt={texto}
          />
        </i>
      ) : (
        <span className="font-bold text-[var(--fg-light)]">{texto}</span>
      )}
    </button>
  );
};

export default Button;
