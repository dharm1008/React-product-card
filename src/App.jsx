import desktop from "./assets/images/image-product-desktop.jpg";
import mobile from "./assets/images/image-product-mobile.jpg";

function App() {
  return (
    <main>
      <article className="product">
        <picture className="product__img">
          <source srcSet={desktop} media="(min-width: 600px)" />
          <img src={mobile} alt="Gabrielle Essence Eau De Parfum" />
        </picture>

        <div className="product__content">
          <p className="product__category">Perfume</p>
          <h1 className="product__title">Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex-group">
            <p className="product__price">
              <span class="visually-hidden">Current price:</span>
              $149.99
            </p>
            <p className="product__original-price">
              <span class="visually-hidden">Original price:</span>
              <s>$169.99</s>
            </p>
          </div>
          <button className="button" data-icon="shopping-cart">Add to Cart</button>
        </div>
      </article>
    </main>
  );
}

export default App;
