import { useState } from "react";
import { Link } from "react-scroll";
import { PrimaryButton } from "../Button"; // (Vamos criar este componente depois)
import { CloseIcon, MenuIcon } from "../Icons"; // (E este também)
import norte_sc_logo from "../../assets/norte-sc-logo.png";
import "./style.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="nav-container">
        <img src={norte_sc_logo} alt="Logo da Nort SC Revestimentos" />
        <nav className={`nav-content ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="produtos" spy={true} smooth={true} offset={0} duration={500} href="produtos" onClick={() => setIsOpen(false)}>
                Produtos
              </Link>
            </li>
            <li>
              <Link to="sobre-nos" spy={true} smooth={true} offset={-150} duration={500} href="sobre-nos" onClick={() => setIsOpen(false)}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="como-trabalhamos" spy={true} smooth={true} offset={-150} duration={500} href="como-trabalhamos" onClick={() => setIsOpen(false)}>
                Como trabalhamos
              </Link>
            </li>
            <li>
              <Link to="contato" spy={true} smooth={true} offset={0} duration={500} href="contato" onClick={() => setIsOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <button className="responsive-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className="desktop-button">
            <PrimaryButton size="large" icon={false}>
                Peça um orçamento
            </PrimaryButton>
        </div>
      </div>
    </header>
  );
};