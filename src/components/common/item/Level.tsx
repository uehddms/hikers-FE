import * as Styled from "./styled";
import { ReactNode } from "react";

export type LevelCompProps = {
  $level: string;
  children: ReactNode;
  $iscard?: boolean;
};

export const LevelComp = ({ $level, children, $iscard = false }: LevelCompProps) => {
  return (
    <Styled.Level $level={$level} $iscard={$iscard}>
      {children}
    </Styled.Level>
  );
};
