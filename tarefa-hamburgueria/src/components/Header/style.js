import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--grey-0);

  padding: 20px;

  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 1020px) {
    flex-direction: row;
    justify-content: space-between;

    padding-inline: 100px;
  }
`;

export default StyledHeader;
