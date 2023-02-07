import { useEffect } from "react";
import { toast } from "react-toastify";
import StyledInputSearch from "./style.js";

function InputSearch({
  setNewFilterProducts,
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

    setNewFilterProducts(productsFiltered);
    if (filteredProducts.length == 0) {
      toast.warning("Favor digite algum produto");
    }
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
