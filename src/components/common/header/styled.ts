import styled from "styled-components";

export const HeaderText = styled.span`
  color: #3b3b3b;
  font-size: 1.25rem;
  font-family: "Pretendard";
  font-weight: 700;
  word-wrap: break-word;
`;

export const TextWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(80%);
`;

export const BackBtnWrapper = styled.button`
  position: relative;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Wrapper = styled.div<{ $isOnboarding?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: ${({ $isOnboarding }) => ($isOnboarding ? "2.8125rem 0 0 0.8125rem" : "2.8125rem 0 0 0.1875rem")};
  position: relative;
`;
