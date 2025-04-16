import { Input } from "../../components/common/input/Input";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { BottomBtn } from "../../components/common/button/BottomBtn";
import { Header } from "../../components/common/header/Header";
import * as Styled from "./CourseInfo.styled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const isValid = formValue.username.trim() !== "" && formValue.password.trim() !== "";

  const handleBackBtn = () => {
    navigate("/");
  };

  const handleLogin = () => {
    console.log("로그인 버튼 클릭");
  };

  const handleGoSignUp = () => {
    navigate("/signup");
  };

  return (
    <Styled.Wrapper>
      <Header isOnboarding={true} onClick={handleBackBtn} />
      <Styled.imgWrapper>
        <img src={logo} alt="hikers" />
      </Styled.imgWrapper>
      <Styled.InputWrapper>
        <Input
          title={"아이디"}
          type="text"
          name="username"
          value={formValue.username}
          onChange={handleChange}
          placeholder={"아이디를 입력해 주세요"}
        />
        <Input
          title={"비밀번호"}
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder={"비밀번호를 입력해 주세요"}
        />
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <BottomBtn disabled={!isValid} onClick={handleLogin}>
          로그인
        </BottomBtn>
        <Styled.GoSignUpBtn onClick={handleGoSignUp}>
          하이커스 회원이 아니신가요? <span>회원가입</span>
        </Styled.GoSignUpBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
};

export default Login;
