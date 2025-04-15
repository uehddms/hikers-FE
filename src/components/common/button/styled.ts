import styled from "styled-components";

export const BottomBtn = styled.button`
  display: flex;
  width: 20.625rem;
  height: 3.125rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Pretendard";
  background-color: ${({ disabled }) => (disabled ? "#A4A4A4" : "#349989")};
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const GreenBtn = styled.button<{ $padding?: string; $bgColor?: string; $color?: string; $fontSize?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  padding: ${(props) => props.$padding || "0.625rem 1rem"};
  background-color: ${(props) => props.$bgColor || "#349989"};
  color: ${(props) => props.$color || "#FFFFFF"};
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: 600;
  font-family: "Pretendard";
`;
