import React from 'react';
import './Login.scss';

class LoginYujin extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: event.target.value,
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
              this.state.idInputValue.indexOf('@') !== -1 &&
              this.state.pwInputValue.length > 5
                ? 'changeButtonColor'
                : 'normalButtonColor'
            }
            disabled={
              this.state.idInputValue.indexOf('@') !== -1 &&
              this.state.pwInputValue.length > 5
                ? false
                : true
            }
            onClick={this.goMain}
            type="submit"
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

export default LoginYujin;
