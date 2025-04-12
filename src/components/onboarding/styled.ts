import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const line = styled.div`
  flex-grow: 1;
  height: 0.5px;
  padding: 0 25px;
  background-color: #349989;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  gap: 5px;
  text-decoration: none;
  cursor: pointer;
  color: #349989;
  font-family: "Pretendard";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  & span {
    color: #349989;
    font-family: "Pretendard";
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
