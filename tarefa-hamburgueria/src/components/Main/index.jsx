import StyledMain from "./style.js";
import ProductList from "./ProductsList";
import Cart from "./Cart";

function Main({
  products,
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
}) {
  return (
    <StyledMain>
      <ProductList
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
      <Cart
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
    </StyledMain>
  );
}

export default Main;
