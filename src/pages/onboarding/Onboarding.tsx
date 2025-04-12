import { BottomBtn } from "../../components/common/button/BottomBtn";
import { NotMemberYet } from "../../components/onboarding/NotMemberYet";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const handleGoLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Styled.Wrapper>
        <BottomBtn onClick={handleGoLogin} disabled={false}>
          로그인
        </BottomBtn>
        <NotMemberYet />
      </Styled.Wrapper>
    </>
  );
};

export default Onboarding;
