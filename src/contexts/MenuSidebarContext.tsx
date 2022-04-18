import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type MenuSidebarContextProps = {
  menuSidebarToggle: boolean;
  setMenuSidebarToggle: Dispatch<SetStateAction<boolean>>;
};

type MenuSidebarProviderProps = {
  children: ReactNode;
};

export const MenuSidebarContext = createContext({} as MenuSidebarContextProps);

export function MenuSidebarProvider({ children }: MenuSidebarProviderProps) {
  const [menuSidebarToggle, setMenuSidebarToggle] = useState(true);

  return (
    <MenuSidebarContext.Provider
      value={{ menuSidebarToggle, setMenuSidebarToggle }}
    >
      {children}
    </MenuSidebarContext.Provider>
  );
}
