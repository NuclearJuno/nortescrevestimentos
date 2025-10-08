import { Element } from "react-scroll";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer"; // 1. Adicione esta linha
import WhatsAppButton from "./components/WhatsappButton"; // 2. Adicione esta linha

import Home from "./pages/home";
import Products from "./pages/products";
import AboutUs from "./pages/about-us";
import Brands from "./pages/brands";
import OurProcesses from "./pages/our-process";
import Contact from "./pages/contact";

function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="produtos">
        <Products />
      </Element>
      <Element name="sobre-nos">
        <AboutUs />
      </Element>
      <Brands />
      <Element name="como-trabalhamos">
        <OurProcesses />
      </Element>
      <Element name="contato">
        <Contact />
      </Element>
      <WhatsAppButton /> {/* 3. Adicione esta linha */}
      <Footer /> {/* 4. Adicione esta linha */}
    </main>
  );
}

export default App;