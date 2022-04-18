import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuSidebarContext } from "../../contexts/MenuSidebarContext";
import { MdDashboard, MdOutlineAttachMoney } from "react-icons/md";
import { Button } from "../Button";
import { AsideContainer, AsideLink } from "./styles";

export const Sidebar = () => {
  const { menuSidebarToggle } = useContext(MenuSidebarContext);

  return (
    <AsideContainer width={!menuSidebarToggle ? "5%" : "20%"}>
      <AsideLink justifyContent={!menuSidebarToggle ? "center" : "flex-start"}>
        <Link to="/">
          <Button>
            <MdDashboard fontSize={30} />
            {menuSidebarToggle && "Dashboard"}
          </Button>
        </Link>
      </AsideLink>
      <AsideLink justifyContent={!menuSidebarToggle ? "center" : "flex-start"}>
        <Link to="/ciclos-pagamentos">
          <Button>
            <MdOutlineAttachMoney fontSize={30} />
            {menuSidebarToggle && "Ciclos de Pagamentos"}
          </Button>
        </Link>
      </AsideLink>
    </AsideContainer>
  );
};
