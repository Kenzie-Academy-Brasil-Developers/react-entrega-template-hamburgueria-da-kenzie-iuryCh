import StyledMain from "./style.js";
import ProductList from "./ProductsList";
import Cart from "./Cart";

function Main({ newFilterProducts, products, currentSale, setCurrentSale }) {
  return (
    <StyledMain>
      <ProductList
        newFilterProducts={newFilterProducts}
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </StyledMain>
  );
}

export default Main;
