import React from 'react';
import './Login.scss';

class LoginSungho extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      disabled: true,
    };
  }

  handleIdInput = event => {
    this.setState(
      {
        idValue: event.target.value,
      },
      () => this.buttonOn()
    );
  };

  handlePwInput = event => {
    this.setState(
      {
        pwValue: event.target.value,
      },
      () => this.buttonOn()
    );
  };

  buttonOn = () => {
    console.log(this.state.idValue);
    this.setState({
      disabled:
        this.state.idValue.includes('@') && this.state.pwValue.length > 4
          ? false
          : true,
    });
  };

  goToMain = () => {
    fetch('http://10.58.6.96:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));

    this.props.history.push('/main-sungho');
  };

  componentDidMount() {}

  render() {
    return (
      <div class="login-page">
        <h1>Westagram</h1>
        <form action="" id="loginForm">
          <input
            onChange={this.handleIdInput}
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            className="pw"
            type="password"
            placeholder="비밀번호"
          />
          <button
            className={
              this.state.idValue.includes('@') && this.state.pwValue.length > 4
                ? 'buttonAble'
                : 'buttonDisable'
            }
            type="button"
            disabled={this.state.disabled}
            onClick={this.goToMain}
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
