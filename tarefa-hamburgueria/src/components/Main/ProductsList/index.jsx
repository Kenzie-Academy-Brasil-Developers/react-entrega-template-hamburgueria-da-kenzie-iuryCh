import StyledProductList from "./style.js";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <StyledProductList>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
