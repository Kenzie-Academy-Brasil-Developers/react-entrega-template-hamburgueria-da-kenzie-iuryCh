import Button from "./Button";
import StyledList from "./style.js";

function Product({ product }) {
  return (
    <StyledList id={product.id}>
      <div className="box_img">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="box_content">
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <span>R${product.price.toFixed(2)}</span>
        <Button />
      </div>
    </StyledList>
  );
}

export default Product;
