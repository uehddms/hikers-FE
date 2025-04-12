import styled from "styled-components";

export const BottomBtn = styled.button`
  display: flex;
  width: 330px;
  height: 50px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Pretendard";
  background-color: ${({ disabled }) => (disabled ? "#A4A4A4" : "#349989")};
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
