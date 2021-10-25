import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginSoyoon extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdInput = e => {
    this.setState({ idValue: e.target.value });
  };

  handlPwInput = e => {
    this.setState({ pwValue: e.target.value });
  };

  goMain = () => {
    this.props.history.push('main-soyoon');
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
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="login-pw"
              onChange={this.handlePwInput}
            />
          </div>
          <button onClick={this.goMain} type="submit" id="login-btn">
            로그인
          </button>
        </div>
        <div className="login-text">
          <p>
            <Link to="/login-soyoon">비밀번호를 잊으셨나요?</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginSoyoon);
