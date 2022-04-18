import { MenuSidebarContext } from "../../contexts/MenuSidebarContext";
import { Button } from "../Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { HeaderContainer, NavContainer } from "./styles";
import { useContext } from "react";

export const Header = () => {
  const { menuSidebarToggle, setMenuSidebarToggle } =
    useContext(MenuSidebarContext);

  return (
    <HeaderContainer>
      <NavContainer width={!menuSidebarToggle ? "5%" : "20%"}>
        <RiMoneyDollarBoxFill fontSize={30} />
        {menuSidebarToggle && <h1>My Money</h1>}
      </NavContainer>
      <Button onClick={() => setMenuSidebarToggle(!menuSidebarToggle)}>
        <GiHamburgerMenu fontSize={24} color="white" />
      </Button>
    </HeaderContainer>
  );
};
