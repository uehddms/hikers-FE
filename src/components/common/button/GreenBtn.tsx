import * as Styled from "./styled";
import { ReactNode } from "react";

type GreenBtnProps = {
  onClick?: () => void;
  children: ReactNode;
  padding?: string;
};

export const GreenBtn = ({ onClick, children, padding }: GreenBtnProps) => {
  return (
    <Styled.GreenBtn onClick={onClick} style={{ padding: padding }}>
      {children}
    </Styled.GreenBtn>
  );
};
