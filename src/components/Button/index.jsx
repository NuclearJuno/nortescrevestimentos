import "./style.scss";

export const PrimaryButton = ({ children, size, icon: Icon, isSubmit, onClick }) => {
  const whatsappNumber = "5547997350585";
  const message = "Gostaria de fazer um orçamento de Pisos Vinílicos, venho pelo site!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  if (isSubmit) {
    return (
      <button type="submit" className={`primary-button ${size}`} onClick={onClick}>
        {children} {Icon ? <Icon /> : ""}
      </button>
    );
  }

  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" className={`primary-button ${size}`}>
      {children} {Icon ? <Icon /> : ""}
    </a>
  );
};