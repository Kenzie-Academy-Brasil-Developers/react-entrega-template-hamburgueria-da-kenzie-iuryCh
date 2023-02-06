import StyledButton from "./style.js";

function Button({ currentSale, product, setCurrentSale }) {
  function handleClick(id) {

    if (currentSale.length == 0) {
      setCurrentSale([product]);
    } else if (currentSale.length > 0) {
      const productIds = currentSale.map((element) => element.id);
      
      if (!productIds.some((product) => product == id)) {
        setCurrentSale([...currentSale, product]);
      }
    }
    return product;
  }
  return (
    <StyledButton
      id={product.id}
      onClick={(event) => {
        handleClick(event.target.id);
      }}
    >
      Adicionar
    </StyledButton>
  );
}

export default Button;
