import StyledProductList from './style.js';
import Product from './Product';

function ProductList({ newFilterProducts, currentSale, setCurrentSale }) {
  return (
    <StyledProductList>
      {newFilterProducts.map((product) => (
        <Product
          key={product.id}
          currentSale={currentSale}
          product={product}
          setCurrentSale={setCurrentSale}
        />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
