import Button from "./Button";
import StyledList from "./style.js";

function Product({ products, currentSale, product, setCurrentSale }) {
  
  return (
    <StyledList id={product.id}>
      <div className="box_img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="box_content">
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <span>R${product.price.toFixed(2)}</span>
        <Button
          products={products}
          currentSale={currentSale}
          product={product}
          setCurrentSale={setCurrentSale}
        />
      </div>
    </StyledList>
  );
}

export default Product;
