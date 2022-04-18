import styled from "styled-components";

type AsideContainerProps = {
  width: string;
};

export const AsideContainer = styled.aside<AsideContainerProps>`
  background-color: #333;
  width: ${(props) => props.width};
  height: calc(100vh - 100px);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type AsideLinkProps = {
  justifyContent: string;
};

export const AsideLink = styled.div<AsideLinkProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: 0.5rem;

  &:hover {
    border-left: 3px solid red;
  }

  a {
    button {
      color: white;
    }
  }
`;
