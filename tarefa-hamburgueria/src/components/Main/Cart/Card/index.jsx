import StyledListCard from "./style.js";
function Card({ current, setCurrentSale, currentSale, removeCard }) {
  function removeCard(id) {
    const filterdCards = currentSale.filter((element) => element.id === id);

    return setCurrentSale([filterdCards]);
  }
  return (
    <StyledListCard id={current.id}>
      <div className="box_imagem">
        <img src={current.img} alt={current.name} />
      </div>
      <div className="box_content">
        <h2>{current.name}</h2>
        <p>{current.category}</p>
      </div>
      <div className="box_button">
        <button
          id={current.id}
          onClick={(event) => {
            removeCard(event.target.id);
          }}
        >
          Remover
        </button>
      </div>
    </StyledListCard>
  );
}

export default Card;
