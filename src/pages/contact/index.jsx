import React, { useState } from "react";
import image_contact from "../../assets/imagem-contato.png";
import { PrimaryButton } from "../../components/Button";
import "./style.scss";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error("Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <section className="contact-container">
      <div className="content">
        <div className="left-content">
          <div className="text-container">
            <h2>Entre em contato</h2>
            <h3>Pedido, ajuda, orçamentos.</h3>
          </div>
          {submitted ? (
            <p className="success-message">Obrigado! Sua mensagem foi enviada com sucesso.</p>
          ) : (
            <form
              className="form-container"
              action="https://formspree.io/f/xvgpeypr"
              method="POST"
              onSubmit={handleSubmit}
            >
              <label>
                <input type="text" name="nome" placeholder="Nome" required />
              </label>
              <label>
                <input
                  type="text"
                  name="numero"
                  placeholder="Número com DDD"
                  required
                  minLength="10"
                  maxLength="11"
                  pattern="[0-9]*"
                />
              </label>
              <label>
                <textarea name="mensagem" placeholder="Sua mensagem" required />
              </label>
              <PrimaryButton size="large" isSubmit>
                Enviar
              </PrimaryButton>
            </form>
          )}
        </div>
        <div className="right-content">
          <img src={image_contact} alt="Instalação de piso" />
        </div>
      </div>
    </section>
  );
}

export default Contact;