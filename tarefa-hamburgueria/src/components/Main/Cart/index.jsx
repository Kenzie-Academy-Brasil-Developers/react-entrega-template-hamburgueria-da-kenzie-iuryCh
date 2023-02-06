import { StyledCart, StyledEmptyCart } from "./style.js";
import Card from "./Card";
import TotalCart from "./TotalCart";

function Cart({ currentSale, setCurrentSale, cartTotal, setCartTotal }) {
  if (currentSale.length == 0) {
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
        <div className="box_title">
          <h2>Carrinho de Compras</h2>
        </div>
        <ul className="box_content--container">
          {currentSale.map((current) => (
            <Card
              key={current.id}
              currentSale={currentSale}
              current={current}
              setCurrentSale={setCurrentSale}
            />
          ))}
        </ul>
        <TotalCart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </StyledCart>
    );
  }
}

export default Cart;
