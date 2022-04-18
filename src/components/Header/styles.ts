import styled from "styled-components";

type NavContainerProps = {
  width?: string;
};

export const HeaderContainer = styled.header`
  background-color: #333;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const NavContainer = styled.nav<NavContainerProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
`;
