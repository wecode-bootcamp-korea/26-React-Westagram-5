import React, { Component } from 'react';
import './Login.scss';
// import '../../styles/Common.scss';

class LoginJihoo extends React.Component {
  goMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return (
      <section className="login">
        <h2 className="login-title">WESTAGRAM</h2>
        <div className="input-container">
          <div className="input-wrap">
            <input
              id="id"
              type="text"
              placeholder="전화번호,사용자이름 또는 이메일"
            />
            <input id="password" type="password" placeholder="비밀번호" />
          </div>
          <button onClick={this.goMain} className="btn" type="submit">
            로그인
          </button>
        </div>
        <div className="last">
          <p>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </section>
    );
  }
}

export default LoginJihoo;
