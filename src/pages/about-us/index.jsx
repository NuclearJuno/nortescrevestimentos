import { PrimaryButton } from "../../components/Button";
import { ArrowRightIcon } from "../../components/Icons";
import "./style.scss";

function AboutUs() {
  return (
    <section className="about-container">
      <div className="content">
        <div className="left-content" />
        <div className="right-content">
          <div className="text-container">
            <h2>Sobre nós</h2>
            <h3>As maiores marcas em pisos com os menores preços.</h3>
          </div>
          <p>
            Instalador e representante comercial de revestimentos (piso laminado,
            piso vinílico e rodapé) em Rio Negrinho e Região Norte de Santa
            Catarina. Produtos e serviços de qualidade, com profissionais
            qualificados em instalação de piso laminado, piso vinílico, rodapé e
            assistência técnica, trabalhando com as melhores marcas do mercado.
            Seu ambiente residencial ou comercial mais bonito, moderno e
            aconchegante.
          </p>
          <PrimaryButton size="large" icon={ArrowRightIcon}>
            Realizar orçamento
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;