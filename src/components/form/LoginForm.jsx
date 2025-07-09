import styled from "@emotion/styled";
import React from "react";
import InputField from "./InputField";
//전역자리
const FormContainer = styled.div`
  width: 100%;
  padding: 25px;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
const ErrorText = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 12px;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  max-width: 200px;
  margin: 30px auto;
  display: block;
  border-radius: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`;
function LoginForm({ formData, errorMessage, handleChange, handleSubmit }) {
  // js 자리

  // jsx 자리
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputField
          label="아이디"
          type="text"
          name="user_id"
          id="user_id"
          value={formData.user_id}
          placeholder="아이디를 입력하세요"
          onChange={handleChange}
        />

        <InputField
          label="이메일"
          type="email"
          name="user_email"
          id="user_email"
          value={formData.user_email}
          placeholder="이메일을 입력하세요"
          onChange={handleChange}
        />
        <InputField
          label="비밀번호"
          type="password"
          name="user_pw"
          id="user_pw"
          value={formData.user_pw}
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
        {/* <input type="submit" /> botton을 쓰는 이유가 디자인하기 더 편해서*/}
      </form>
      <ErrorText>{errorMessage}</ErrorText>
    </FormContainer>
  );
}

export default LoginForm;
