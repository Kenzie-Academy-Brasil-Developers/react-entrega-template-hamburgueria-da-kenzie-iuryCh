import StyledInputSearch from "./style.js";

function InputSearch({setFilteredProducts}) {
  return (
    <StyledInputSearch>
      <input
        className="box-search--input"
        type="text"
        placeholder="Digitar pesquisa"
      />
      <button type="submit" className="box_search--button">Pesquisar</button>
    </StyledInputSearch>
  );
}

export default InputSearch;
