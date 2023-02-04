import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 100px;
  height: 40px;

  border: none;
  border-radius: var(--standard-radius);

  background-color: var(--Color-primary);
  color: #ffffff;

  :hover {
    background-color: var(--Color-primary-50);
  }
`;

export default StyledButton;
