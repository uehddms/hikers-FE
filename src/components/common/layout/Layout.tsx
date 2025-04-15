import { ReactNode } from "react";
import * as Styled from "./styled";

export type LayoutProps = {
  children: ReactNode;
  $margin?: string;
};

export const Layout = ({ children, $margin = "0rem" }: LayoutProps) => {
  return <Styled.Layout $margin={$margin}>{children}</Styled.Layout>;
};
