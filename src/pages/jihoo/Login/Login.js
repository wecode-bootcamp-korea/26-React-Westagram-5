import React, { Component } from 'react';
import './Login.scss';

class LoginJihoo extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/main-jihoo');
  };

  handleIdInput = e => {
    //IdInout은 event의 약자 e를 인자로 받음
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      password: e.target.value,
    });
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
              onChange={this.handleIdInput}
            />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
          </div>
          <button
            className={
              this.state.id.indexOf('@') !== -1 &&
              this.state.password.length > 5
                ? 'changeButtonColor btn'
                : 'normalButtonColor btn'
            }
            onClick={this.goToMain}
            disabled={
              this.state.id.indexOf('@') !== -1 &&
              this.state.password.length > 5
                ? false
                : true
            }
          >
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
