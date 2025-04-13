import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10vh 0 5vh 0;
  align-items: center;
  gap: 2rem;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  width: 100%;
  flex-grow: 1; //남은 공간 채우기
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
`;
