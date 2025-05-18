import ThemeToggler from "@components/ThemeToggler";

const Header = () => {
  return (
    <header className="flex gap-8 w-full h-[130px] px-10 items-center justify-center bg-[var(--sidebar-bg)]">
      <h1 className="font-bold text-5xl text-[var(--accent-primary)]">
        greentask.
      </h1>

      <ThemeToggler />
    </header>
  );
};

export default Header;
