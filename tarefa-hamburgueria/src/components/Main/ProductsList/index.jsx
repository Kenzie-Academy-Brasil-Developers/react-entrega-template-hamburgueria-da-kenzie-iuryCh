import StyledProductList from "./style.js";
import Product from "./Product";

function ProductList({
  newFilterProducts,
  products,
  currentSale,
  setCurrentSale,
}) {
  return (
    <StyledProductList>
      {newFilterProducts.length == 0
        ? products.map((product) => (
            <Product
              key={product.id}
              products={products}
              currentSale={currentSale}
              product={product}
              setCurrentSale={setCurrentSale}
            />
          ))
        : newFilterProducts.map((product) => (
            <Product
              key={product.id}
              products={products}
              currentSale={currentSale}
              product={product}
              setCurrentSale={setCurrentSale}
            />
          ))}
    </StyledProductList>
  );
}

export default ProductList;
