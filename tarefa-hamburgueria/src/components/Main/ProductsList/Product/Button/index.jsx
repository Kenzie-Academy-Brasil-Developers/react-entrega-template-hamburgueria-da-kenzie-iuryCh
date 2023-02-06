import StyledButton from "./style.js";

function Button({ products, currentSale, product, setCurrentSale }) {
  function handleClick(id) {
    const productFound = products.find((element) => element.id == id);
    if (currentSale.length == 0) {
      setCurrentSale([...currentSale, productFound]);
    } else if (currentSale.length > 0) {
      const productIds = currentSale.map((element) => element.id);
      if (productIds.some((product) => product === id)) {
        setCurrentSale([...currentSale, productFound]);
      }
    }
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
