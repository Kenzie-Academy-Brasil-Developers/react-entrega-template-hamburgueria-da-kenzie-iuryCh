import StyledTotalCart from "./style.js";

function TotalCart({ currentSale, setCurrentSale }) {
  const totalPrice = currentSale.reduce((pV, cV) => pV + cV.price, 0);

  return (
    <StyledTotalCart>
      <div className="box_content">
        <p>Total</p>
        <span>R$ {totalPrice.toFixed(2)}</span>
      </div>
      <div className="box_button">
        <button
          onClick={() => {
            setCurrentSale([]);
          }}
        >
          Remover Todos
        </button>
      </div>
    </StyledTotalCart>
  );
}

export default TotalCart;
