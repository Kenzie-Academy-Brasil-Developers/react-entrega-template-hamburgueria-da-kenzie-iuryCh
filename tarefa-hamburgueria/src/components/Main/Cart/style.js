import styled from "styled-components";

export const StyledEmptyCart = styled.div`
  height: 220px;
  min-width: 80%;

  .box_title {
    height: 65px;
    width: 100%;

    background-color: var(--Color-primary);
    border-radius: 8px 8px 0 0;

    display: flex;

    h2 {
      width: inherit;
      color: white;
      padding-inline: 20px;

      font: var(--Heading-18);
      display: inherit;
      align-items: center;
    }
  }

  .box_content {
    height: 150px;
    background-color: var(--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h3 {
      font: var(--Heading-18);
      color: var(--color-dark);
    }

    p {
      font: var(--Caption-12);
    }
  }
`;
export const StyledCart = styled.div``;
