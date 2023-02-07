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

  @media (min-width: 1020px) {
    margin-top: 0;
    width: 55%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledProductList;
