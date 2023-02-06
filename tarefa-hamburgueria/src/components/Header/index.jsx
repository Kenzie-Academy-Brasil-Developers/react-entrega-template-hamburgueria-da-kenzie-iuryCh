import burguerKenzie from "../../assets/imagens/burguerKenzie.svg";
import StyledHeader from "./style.js";
import InputSearch from "./InputSearch";

function Header({setFilteredProducts}) {
  return (
    <StyledHeader>
      <div className="box_logo">
        <img src={burguerKenzie} alt="logo" />
      </div>
      <InputSearch setFilteredProducts={setFilteredProducts}/>
    </StyledHeader>
  );
}

export default Header;
