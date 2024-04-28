import React, { useState, useRef } from 'react';
import './App.css'



const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordInputRef = useRef(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d|(?=.*\W)).{8,15}$/;
    return passwordPattern.test(password);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{9,12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      passwordInputRef.current.focus();
    } else if (!isValidPassword(password)) {
      alert('비밀번호는 영어 대소문자, 숫자, 특수문자 중 2종류 조합의 8-15자여야 합니다.');
      passwordInputRef.current.focus();
    } else if(!isValidPhoneNumber(phonenumber)){
      alert('휴대폰 번호를 제대로 입력해주세요');
    } else {

      console.log('폼 제출 완료!:');
      console.log('이름:', username);
      console.log('이메일:', email);
      console.log('비밀번호:', password);
      console.log('휴대폰 번호:', phonenumber)
    }
  };


    return (
      <div className='signup-form'>
        <h2>회원가입</h2>
        <hr></hr>
        <div className='form_id'>
          <h3>계정 정보</h3>
          <form onSubmit={handleSubmit}>
            <div className='form_email'>
              <h5>이메일</h5>
              <input
                type="email"
                placeholder='업무용 이메일을 입력해 주세요'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form_pw'>
              <h5>비밀번호</h5>
              <input
                type="password"
                placeholder='영어 대소문자, 숫자, 특수문자 중 2종료 조합의 8-15자'
                value={password}
                name='register_pw'
                ref={passwordInputRef}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='form_pw'>
              <h5>비밀번호 확인</h5>
              <input
                type="password"
                placeholder='비밀번호를 다시 입력해 주세요'
                value={confirmPassword}
                maxLength='20'
                name='register_pwcheck'
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className='form_name'>
              <h5>이름</h5>
              <input
                type="text"
                placeholder='이름을 입력해 주세요.'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <h5>휴대폰번호</h5>
            <div className='form_call'>
              <input
                type="number"
                value={phonenumber}
                placeholder='하이픈(-)을 제외한 숫자만 입력해주세요'
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button type='submit'>인증 요청</button>
            </div>
            <div className='form_button'>
              <button type="submit">가입하기</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default SignUpForm;
