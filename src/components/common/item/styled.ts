import { css } from "styled-components";
import styled from "styled-components";
import { LevelCompProps } from "./Level";

export const Level = styled.div<LevelCompProps>`
  border-radius: ${({ $iscard }) => ($iscard ? "0.5rem" : "0.3125rem")};
  display: flex;
  width: ${({ $iscard }) => ($iscard ? "1.5625rem" : "1.25rem")};
  height: ${({ $iscard }) => ($iscard ? "1.5625rem" : "1.25rem")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: ${({ $iscard }) => ($iscard ? "0.875rem" : "0.75rem")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ${({ $level }) => {
    if ($level === "상") {
      return css`
        background-color: #e6cdcd;
        color: #e77575;
      `;
    }
    if ($level === "중") {
      return css`
        background-color: #f2dabd;
        color: #f1870d;
      `;
    }
    if ($level === "하") {
      return css`
        background-color: #b8dbd9;
        color: #349989;
      `;
    }
    return css``;
  }}
`;

export const BooleanWrapper = styled.div`
  /* width: 1.5rem;
  height: 1.5rem; */
  cursor: pointer;
`;
