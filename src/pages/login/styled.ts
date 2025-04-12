import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const imgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 65px 0 100px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 110px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const GoSignUpBtn = styled.button`
  display: flex;
  width: 330px;
  height: 50px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Pretendard";
  border: 1px solid #eee;
  background-color: #eee;
  color: #3b3b3b;
  cursor: pointer;
  & span {
    color: #349989;
    font-size: 16px;
    font-weight: 700;
  }
`;
