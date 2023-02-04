import styled from "styled-components";

const StyledList = styled.li`
  border: 2px solid var(--grey-20);
  border-radius: 5px;

  margin-bottom: 10px;

  height: 358px;

  :focus-within {
    border: 2px solid var(--grey-100);
  }
  .box_img {
    background-color: var(--grey-0);
    min-width: 300px;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
      width: 50%;
    }
  }

  .box_content {
    height: 55%;

    margin-left: 15px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

    h2 {
      font: var(--Heading-18);
    }

    p {
      font: var(--Caption-12);
    }

    span {
      font: var(--Heading-14);
      color: var(--Color-primary);
    }
  }
`;
export default StyledList;
