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

export const GreenBtn = styled.button<{ padding?: string }>`
  display: flex;
  height: 1.875rem;
  padding: ${({ padding }) => padding || "0.375rem 1rem"};
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 0.625rem;
  background: #349989;
  color: #ffffff;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

export const ShareBtn = styled.button<{ padding?: string; bgColor?: string; color?: string }>`
  display: flex;
  width: 9.8125rem;
  height: 2.5rem;
  padding: 0.75rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: ${({ bgColor }) => bgColor || "#349989"};
  color: ${({ color }) => color || "#ffffff"};
  font-family: "Pretendard";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;
