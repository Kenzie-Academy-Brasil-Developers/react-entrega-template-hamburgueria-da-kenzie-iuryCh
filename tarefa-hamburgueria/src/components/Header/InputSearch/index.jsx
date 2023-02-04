import StyledInputSearch from "./style.js";

function InputSearch() {
  return (
    <StyledInputSearch>
      <input
        className="box-search--input"
        type="text"
        placeholder="Digitar pesquisa"
      />
      <button className="box_search--button">Pesquisar</button>
    </StyledInputSearch>
  );
}

export default InputSearch;
