import styled from "styled-components";

const StyledTotalCart = styled.div`
  border-top: 2px solid #80808063;
  margin: 10px;
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  .box_content {
    padding-inline: 5px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    p,
    span {
      font: var(--Body-14);
    }
  }
  .box_button {
    /* width: 100%;
    height: 40px; */
    button {
      width: 100%;
      border: none;
      height: 40px;

      background-color: var(--grey-20);
      font: var(--Headline-16);
      color: var(--grey-50);
    }
  }
`;

export default StyledTotalCart;
