import { PrimaryButton } from "../../components/Button";
import { WhatsappIcon } from "../../components/Icons";
import "./style.scss";

function Home() {
  return (
    <section className="home-container">
      <div className="content">
        <h1>
          Transforme seus espaços com revestimentos que refletem seu estilo.
          Qualidade e beleza em cada detalhe!
        </h1>
        <h2>
          Nossos profissionais estão a disposição para planejar e auxiliar você
          na escolha certa para seu projeto.
        </h2>
        <PrimaryButton size="large" icon={WhatsappIcon}>
          Faça um orçamento
        </PrimaryButton>
      </div>
    </section>
  );
}

export default Home;