import Header from "../../components/Header";
import Separator from "../../components/Separator";

const Zen = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full py-30 gap-10 items-center justify-center">
        <div className="w-[300px] h-[300px] bg-gray-300 rounded-full"></div>

        <span className="text-8xl font-semibold text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
          49:31
        </span>

        <div className="w-auto flex gap-3 py-2 px-4 justify-center items-center rounded-4xl border-2 border-gray-300 text-[var(--fg-light)] font-semibold uppercase">
          <i className="inline-block w-[15px] h-[15px] bg-gray-300 rounded-full"></i>
          <span>tag 1</span>
        </div>

        <Separator />

        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-secondary-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-secondary)]">
            Parar
          </button>
        </div>
      </div>
    </>
  );
};

export default Zen;
