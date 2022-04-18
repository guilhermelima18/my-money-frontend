import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
