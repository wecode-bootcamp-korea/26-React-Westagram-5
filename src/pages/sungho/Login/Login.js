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
            className="id"
            type="text"
            value={this.state.idValue}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            className="pw"
            type="password"
            value={this.state.pwValue}
            placeholder="비밀번호"
          />
          <button
            className={
              this.state.idValue.includes('@') && this.state.pwValue.length > 4
                ? 'buttonAble'
                : 'buttonDisable'
            }
            type="button"
            disabled={
              this.state.idValue.includes('@') && this.state.pwValue.length > 4
                ? false
                : true
            }
          >
            로그인{' '}
          </button>
        </form>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default LoginSungho;
