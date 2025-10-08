import { brands } from "../../utils/brands";
import "./style.scss";

function Brands() {
  return (
    <section className="brands-container">
      <div className="content">
        <div className="text-container">
          <h2>Marcas de Confiança</h2>
        </div>
        <div className="cards-container">
          {brands.map((brand) => (
            <div className="card" key={brand.id}>
              <img src={brand.image} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;