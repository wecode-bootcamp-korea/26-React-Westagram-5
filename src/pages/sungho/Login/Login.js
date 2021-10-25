import React from 'react';
import './Login.scss';

class LoginSungho extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  render() {
    return (
      <div class="login-page">
        <h1>Westagram</h1>
        <form action="" id="loginForm">
          <input
            onChange={this.handleIdInput}
            class="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            class="pw"
            type="password"
            placeholder="비밀번호"
          />
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
