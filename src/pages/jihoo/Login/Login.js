import React, { Component } from 'react';
import './Login.scss';
// import '../../styles/Common.scss';

class LoginJihoo extends React.Component {
  goMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return <div>지후님 로그인 페이지</div>;
  }
}

export default LoginJihoo;
