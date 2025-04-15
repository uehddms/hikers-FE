import * as Styled from "./styled";
import { ReactNode } from "react";

type GreenBtnProps = {
  onClick?: () => void;
  children: ReactNode;
  padding?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
};

export const GreenBtn = ({ onClick, children, padding, bgColor, color, fontSize }: GreenBtnProps) => {
  return (
    <Styled.GreenBtn onClick={onClick} $padding={padding} $bgColor={bgColor} $color={color} $fontSize={fontSize}>
      {children}
    </Styled.GreenBtn>
  );
};
