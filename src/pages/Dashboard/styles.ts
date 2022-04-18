import styled from "styled-components";

export const DashboardContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 800px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
