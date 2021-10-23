import React from 'react';
import './Login.scss';

class LoginSoyoon extends React.Component {
  goMain = () => {
    this.props.history.push('/main-soyoon');
  };

  render() {
    return (
      <div className="Login">
        <section className="login-name">
          <h1>WESTAGRAM</h1>
        </section>
        <div className="login-wrapper">
          <div className="login-input">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              id="login-email"
            />
            <input type="password" placeholder="비밀번호" id="login-pw" />
          </div>
          <button onClick={this.goMain} type="submit" id="login-btn">
            로그인
          </button>
        </div>
        <div className="login-text">
          <p>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginSoyoon;
