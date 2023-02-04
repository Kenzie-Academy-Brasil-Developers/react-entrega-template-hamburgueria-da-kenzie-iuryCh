import StyledMain from "./style.js";
import ProductList from "./ProductsList";
import Cart from "./Cart";

function Main({ products }) {
  return (
    <StyledMain>
      <ProductList products={products} />
      <Cart />
    </StyledMain>
  );
}

export default Main;
