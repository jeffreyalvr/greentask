import Header from "@components/Header";
import Separator from "@components/Separator";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full py-30 gap-10 items-center justify-center">
        <div className="flex flex-col gap-10 w-[450px] h-auto px-10 py-10 bg-[var(--section-bg)] rounded-2xl">
          <span className="pb-4 text-xl text-[var(--fg-light)] font-semibold border-b-2 border-dashed border-b-[var(--border-light)]">
            Cadastro greentask.
          </span>

          <div className="flex flex-col gap-3">
            <span className="text-lg text-[var(--fg-light)] font-semibold">
              Nome
            </span>
            {/* Ligar o input a um state */}
            <input
              type="text"
              placeholder="Como você se chama?"
              className="w-full h-auto p-3 bg-[var(--item-bg)] border-1 border-[var(--border-light)] rounded-md shadow-md"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-lg text-[var(--fg-light)] font-semibold">
              E-mail
            </span>
            {/* Ligar o input a um state */}
            <input
              type="email"
              placeholder="Digite seu e-mail..."
              className="w-full h-auto p-3 bg-[var(--item-bg)] border-1 border-[var(--border-light)] rounded-md shadow-md"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-lg text-[var(--fg-light)] font-semibold">
              Senha
            </span>
            {/* Ligar o input a um state */}
            <input
              type="password"
              placeholder="Digite uma senha..."
              className="w-full h-auto p-3 bg-[var(--item-bg)] border-1 border-[var(--border-light)] rounded-md shadow-md"
            />
          </div>

          <Separator />

          <div className="w-full flex justify-center items-center gap-2">
            <button className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-[var(--accent-opaque)] uppercase cursor-pointer hover:bg-[var(--accent-primary)]">
              Criar conta
            </button>
          </div>
        </div>

        <Separator />

        <Link
          to="/login"
          className="w-max px-10 py-4 rounded-4xl text-white font-semibold bg-blue-400 uppercase cursor-pointer hover:bg-blue-500"
        >
          Já tem conta? Entrar
        </Link>
      </div>
    </>
  );
};

export default Signup;
