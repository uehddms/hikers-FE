import * as Styled from "./styled";
import { ReactNode } from "react";

type ShareBtnProps = {
  onClick?: () => void;
  children: ReactNode;
  bgColor?: string;
  color?: string;
};

export const ShareBtn = ({ onClick, children, bgColor, color }: ShareBtnProps) => {
  return (
    <Styled.ShareBtn onClick={onClick} style={{ backgroundColor: bgColor, color: color }}>
      {children}
    </Styled.ShareBtn>
  );
};
