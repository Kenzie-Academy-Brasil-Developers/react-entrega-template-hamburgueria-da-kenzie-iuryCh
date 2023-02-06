import styled from "styled-components";

const StyledListCard = styled.li`
  display: flex;
  justify-content: space-between;

  .box_imagem {
    height: 70px;
    width: 70px;

    background-color: var(--grey-0);

    display: inherit;
    align-items: center;
    justify-content: center;

    img {
      height: 50%;
      width: 50%;
    }
  }
  .box_content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    margin-right: 85px;
    margin-top: 10px;

    h2 {
      font: var(--Heading-14);
    }

    p {
      font: var(--Caption-12);
    }
  }

  .box_button {
    button {
      border: none;
      background-color: transparent;
      font: var(--Caption-12);
      color: #bdbdbd;
    }
  }
`;

export default StyledListCard;
