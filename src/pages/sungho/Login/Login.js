import React from 'react';
import './Login.scss';

class LoginSungho extends React.Component {
  render() {
    return (
      <div class="login-page">
        <h1>Westagram</h1>
        <form action="" id="loginForm">
          <input
            class="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input class="pw" type="password" placeholder="비밀번호" />
          <button class="button" type="button" disabled>
            로그인{' '}
          </button>
        </form>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default LoginSungho;
