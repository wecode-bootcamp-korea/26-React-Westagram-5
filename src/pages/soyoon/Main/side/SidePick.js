import { Component } from 'react';

export class SidePick extends Component {
  render() {
    return (
      <div className="side-pick">
        <div className="side-navi">
          <p>회원님을 위한 추천</p>
          <div>모두 보기</div>
        </div>
        <div className="suggestion">
          <div className="suggestion-left">
            <div className="suggestion-left-img" />
            <div className="left-img-ex">
              <p>sunghomayo</p>
              <p>you_god님 외 2명이 팔...</p>
            </div>
          </div>
          <button>팔로우</button>
        </div>
        <div className="suggestion">
          <div className="suggestion-left">
            <div className="suggestion-left-img" />
            <div className="left-img-ex">
              <p>zeehoojoah</p>
              <p>yeonjeongzzang님 외...</p>
            </div>
          </div>
          <button>팔로우</button>
        </div>
        <div className="suggestion">
          <div className="suggestion-left">
            <div className="suggestion-left-img" />
            <div className="left-img-ex">
              <p>boradori_</p>
              <p>iamwindow님 외 1명이...</p>
            </div>
          </div>
          <button>팔로우</button>
        </div>
      </div>
    );
  }
}

export default SidePick;
