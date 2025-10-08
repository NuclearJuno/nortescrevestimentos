import { Element } from "react-scroll";
import { Navbar } from "./components/Navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import AboutUs from "./pages/about-us"; // Corrigido
import Brands from "./pages/brands";
import OurProcesses from "./pages/our-process";

// import "./App.css"; // Não precisamos mais deste se usamos o style.scss global

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
      <Element name="como-trabalhamoos">
        <OurProcesses />
      </Element>
      <Element name="contato">
        {/* <Contact /> */}
      </Element>
      {/* <WhatsAppButton /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default App;