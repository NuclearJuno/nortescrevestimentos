import { products } from "../../utils/products";
import "./style.scss";

function Products() {
  return (
    <section className="products-container">
      <div className="content">
        <div className="text-container">
          <h2>Nossos produtos</h2>
          <h3>Escolha o estilo ideal para o seu ambiente</h3>
        </div>
        <div className="cards-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="image-content">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;