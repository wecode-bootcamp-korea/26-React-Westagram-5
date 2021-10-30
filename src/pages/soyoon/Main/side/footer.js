import { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>Instagram 정보</li>
          <li>지원</li>
          <li>홍보</li>
          <li>지원</li>
          <li>홍보센터</li>
          <li>API</li>
        </ul>
        <ul>
          <li>채용정보</li>
          <li>개인정보처리방침</li>
          <li>약관</li>
        </ul>
        <ul>
          <li>디렉터리</li>
          <li>프로필</li>
          <li>해시태그</li>
          <li>언어</li>
        </ul>
        <p>ⓒ 2019 INSTAGRAM</p>
      </footer>
    );
  }
}

export default Footer;
