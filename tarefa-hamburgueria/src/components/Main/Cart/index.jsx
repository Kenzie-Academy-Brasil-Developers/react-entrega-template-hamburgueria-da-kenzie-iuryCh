import { StyledCart, StyledEmptyCart } from "./style.js";

function Cart({ props }) {
  if (true) {
    console.log("é true");
    return (
      <StyledEmptyCart>
        <div className="box_title">
          <h2>Carrinho de Compras</h2>
        </div>
        <div className="box_content">
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      </StyledEmptyCart>
    );
  } else {
    return (
      <StyledCart>
        <div>
          <h2>Carrinho de Compras</h2>
        </div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div></div>
      </StyledCart>
    );
  }
}

export default Cart;
