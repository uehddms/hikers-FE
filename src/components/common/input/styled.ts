import styled from "styled-components";

export const inputField = styled.div`
  display: flex;
  width: 330px;
  height: 77px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
export const textTitle = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
`;
export const InputBox = styled.input`
  display: flex;
  width: 330px;
  height: 48px;
  padding: 13px 15px;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  border: 1px solid #c8c8c8;
  outline: #349989;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2) inset;
  &::placeholder {
    color: #c8c8c8;
  }
  &:focus {
    border-radius: 15px;
    border: 1px solid #349989;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(52, 153, 137, 0.6) inset;
  }
`;
