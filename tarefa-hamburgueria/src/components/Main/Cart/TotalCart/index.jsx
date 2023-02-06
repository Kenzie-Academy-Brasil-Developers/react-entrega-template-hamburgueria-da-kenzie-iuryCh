import StyledTotalCart from "./style.js";

function TotalCart({ currentSale, setCurrentSale }) {
  const TotalPrice = currentSale.reduce((pV, cV) => pV + cV.price, 0);

  return (
    <StyledTotalCart>
      <div className="box_content">
        <p>Total</p>
        <span>R$ {TotalPrice.toFixed(2)}</span>
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
