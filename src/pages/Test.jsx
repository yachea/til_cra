import React, { use, useState } from "react";
import LoginForm from "../components/form/LoginForm";

function Test() {
  //js 자리
  // 변수 관리

  const [errorMessage, setErrorMessage] = useState("");
  // 모든 데이터가 모여지는 변수다.
  const [formData, setFormData] = useState({
    user_id: "",
    user_email: "",
    user_pw: "",
  });
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    if (formData.user_id === "") {
      setErrorMessage("아이디를 입력하세요");
      return;
    }
    if (formData.user_email === "") {
      setErrorMessage("이메일을 입력하세요");
      return;
    }
    if (formData.user_pw === "") {
      setErrorMessage("비밀번호를 입력하세요");
      return;
    }
    console.log("백엔드로 데이터 보내요~");

    // 쿼리 스트링으로 보내기 백엔드에게 보낼때
    console.log(
      `/login/?id=${formData.user_id}&email=${formData.user_email}&pw=${formData.user_pw}`,
    );
    // 객체로 보내기
    const data = { ...formData };

    setErrorMessage("");
  };
  // 모든 state 를 하나로 관리 합니다.

  //jsx 자리
  return (
    <div>
      <h1>회원로그인</h1>
      <LoginForm
        formData={formData}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Test;
