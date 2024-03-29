import burguerKenzie from "../../assets/imagens/burguerKenzie.svg";
import StyledHeader from "./style.js";
import InputSearch from "./InputSearch";

function Header({
  setNewFilterProducts,
  products,
  search,
  filteredProducts,
  setSearch,
  setFilteredProducts,
}) {
  return (
    <StyledHeader>
      <div className="box_logo">
        <img src={burguerKenzie} alt="logo" />
      </div>
      <InputSearch
        setNewFilterProducts={setNewFilterProducts}
        search={search}
        products={products}
        setSearch={setSearch}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
    </StyledHeader>
  );
}

export default Header;
