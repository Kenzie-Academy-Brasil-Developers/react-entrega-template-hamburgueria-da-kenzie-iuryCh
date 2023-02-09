import StyledListCard from "./style.js";

function Card({ current, setCurrentSale, currentSale }) {
  function removeCard(id) {
    const filteredCards = currentSale.filter((element) => {
      return +element.id !== +id;
    });
    setCurrentSale(filteredCards);
  }

  return (
    <StyledListCard id={current.id}>
      <div className="box_container">
        <div className="box_imagem">
          <img src={current.img} alt={current.name} />
        </div>
        <div className="box_content">
          <h2>{current.name}</h2>
          <p>{current.category}</p>
        </div>
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
