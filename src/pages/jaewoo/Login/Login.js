import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <body>
        <div class="bigbox">
          <div class="logoTop"> westagram</div>

          <div class="login">
            <div>
              <input class="id" placeholder="전화번호,사용자이름 또는 이메일" />
            </div>
            <div>
              <input class="pwd" placeholder="비밀번호" />
            </div>
            <div>
              <Link to="/Main">
                <button class="btn">로그인</button>
              </Link>
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
