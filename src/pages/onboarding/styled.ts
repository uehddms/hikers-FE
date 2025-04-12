import styled from "styled-components";
import OnboardingImg from "../../assets/Onboarding.svg";

export const Wrapper = styled.div`
  background-image: url(${OnboardingImg});
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  padding-bottom: 33px;
`;
