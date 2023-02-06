import styled from "styled-components";

const StyledInputSearch = styled.form`
  position: relative;
  background-color: white;
  border-radius: var(--standard-radius);
  border: 2px solid var(--grey-20);

  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: var(--standard-radius);
    padding-left: 15px;
    outline: none;

    font: var(--Headline-16);
    color: var(--grey-50);

    ::placeholder {
      font: var(--Headline-16);
      letter-spacing: 1px;
      color: var(--grey-20);
    }

    :focus {
      border: 2px solid var(--grey-100);
    }
  }

  button {
    position: absolute;
    right: 15px;
    border: none;
    border-radius: var(--standard-radius);

    width: 107px;
    height: 40px;

    background-color: var(--Color-primary);

    color: white;
    font: var(--Body-600);
    letter-spacing: 1px;

    :hover {
      background-color: var(--Color-primary-50);
    }
  }

  @media (min-width: 1020px) {
    height: 60px;
    width: 365px;
  }
`;

export default StyledInputSearch;
