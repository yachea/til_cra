import React, { useState } from "react";
import RegisterForm from "../components/form/RegisterForm";

function RegisterPage() {
  // js 자리
  // 백엔드로 보낼 데이터를 위한 리액트 변수
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_pass: "",
    user_pass_confirm: "",
    user_nickname: "",
    user_birth: "",
    user_gender: "여성",
    user_interest_default: ["코딩", "여행", "디자인", "운동", "기타"],
    user_interest: [],
    user_location_default: ["서울", "경기", "대구", "부산", "광주"],
    user_location: "",
    user_intro: "",
    user_image: null,
    user_image_preview: "",
  });
  // 필수 항목 체크 오류 메세지 리액트 변수
  const [errMessage, setErrMessage] = useState("");

  // jsx 자리
  return (
    <div>
      <h1>회원가입</h1>
      <RegisterForm formData={formData} errMessage={errMessage} />
    </div>
  );
}

export default RegisterPage;
