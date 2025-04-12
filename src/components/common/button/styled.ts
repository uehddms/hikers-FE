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
