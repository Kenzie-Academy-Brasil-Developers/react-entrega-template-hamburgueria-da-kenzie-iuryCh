import styled from "styled-components";

const StyledProductList = styled.ul`
  height: auto;
  width: auto;

  margin-top: 15px;

  display: flex;
  align-items: center;
  gap: 20px;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export default StyledProductList;
