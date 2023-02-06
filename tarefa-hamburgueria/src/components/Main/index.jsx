import StyledMain from "./style.js";
import ProductList from "./ProductsList";
import Cart from "./Cart";
import { useState } from "react";

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
