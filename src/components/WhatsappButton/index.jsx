import { WhatsappIcon } from "../Icons";
import "./style.scss";

const WhatsAppButton = () => {
  const whatsappNumber = "5547997350585";
  const message = "Gostaria de fazer um orçamento de Pisos Vinílicos, venho pelo site!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Redirecionar para o Whatsapp"
    >
      <span className="whatsapp-icon">
        <WhatsappIcon />
      </span>
    </a>
  );
};

export default WhatsAppButton;