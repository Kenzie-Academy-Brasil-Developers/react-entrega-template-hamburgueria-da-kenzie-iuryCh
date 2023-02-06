import styled from "styled-components";

const StyledApp = styled.div`
  width: 80%;
  margin: 20px 33px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font: var(--Heading-26);
    span {
      color: var(--grey-50);
    }
  }

  button {
    border: none;

    min-width: 100px;
    width: 20%;
    height: 50px;

    background-color: var(--Color-primary);
    color: white;
    border-radius: var(--standard-radius);
  }
`;
export default StyledApp;
