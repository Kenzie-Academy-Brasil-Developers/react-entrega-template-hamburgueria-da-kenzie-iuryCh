import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 100vh;
  width: 90%;
  margin-left: 30px;

  @media (min-width: 1020px) {
    padding: 40px 0px;
    margin: 0 90px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
`;

export default StyledMain;
