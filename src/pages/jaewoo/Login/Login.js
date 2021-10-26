import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('./Main-jaewoo');
  };

  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
    };
  }

  handleIdinput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwdinput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <body>
        <div class="bigbox">
          <div class="logoTop"> westagram</div>

          <div class="login">
            <div>
              <input
                class="id"
                placeholder="전화번호,사용자이름 또는 이메일"
                type="text"
                onChange={this.handleIdinput}
              />
            </div>
            <div>
              <input
                class="pwd"
                placeholder="비밀번호"
                type="password"
                onChange={this.handlePwdinput}
              />
            </div>
            <div>
              <button
                className={
                  this.state.id.indexOf('@') !== -1 &&
                  this.state.password.length > 5
                    ? 'changeButtonColor btn'
                    : 'noramlButtonColor btn'
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
          </div>
          <div class="forget">
            <span class="lostPassword">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
