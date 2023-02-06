import StyledInputSearch from "./style.js";

function InputSearch({
  products,
  setSearch,
  filteredProducts,
  setFilteredProducts,
}) {
  function showProducts(event) {
    event.preventDefault();
    setSearch(filteredProducts);

    const productsFiltered = products.filter((product) => {
      return filteredProducts === ""
        ? true
        : product.name.toLowerCase().includes(filteredProducts.toLowerCase());
    });
  }
  return (
    <StyledInputSearch onSubmit={showProducts}>
      <input
        value={filteredProducts}
        onChange={(event) => setFilteredProducts(event.target.value)}
        className="box-search--input"
        type="text"
        placeholder="Digitar pesquisa"
      />
      <button type="submit" className="box_search--button">
        Pesquisar
      </button>
    </StyledInputSearch>
  );
}

export default InputSearch;
