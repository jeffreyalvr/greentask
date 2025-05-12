import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <div className="container flex flex-col gap-2 mx-auto md:w-[40rem]">
      <Header />
      <BoxOverride
        title="Página não encontrada"
        gap={2.5}
        padding={{ paddingX: 2.5, paddingY: 2.5 }}
      >
        <span className="text-[var(--fg-light)] dark:text-[var(--fg-dark)]">
          A página procurada não existe.
        </span>
        <LinkButton text="Voltar ao início" route="/" />
      </BoxOverride>
      <Footer />
    </div>
  );
};

export default NotFound;
