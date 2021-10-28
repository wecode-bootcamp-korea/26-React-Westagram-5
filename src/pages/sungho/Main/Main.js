import React from 'react';
import './Main.scss';
import Child from './Child';

class Mainsungho extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      commentBox: [],
    };
  }

  onInputChange = e => {
    this.setState({
      input: e.target.value,
    });
  };
  commentUpdate = e => {
    if (e.key === 'Enter' && this.state.input.length > 0) {
      e.preventDefault();
      const newCommentBox = this.state.commentBox.concat({
        content: this.state.input,
      });
      this.updateComment(newCommentBox);
    }
  };
  commentUpdateButton = e => {
    if (this.state.input.length > 0) {
      e.preventDefault();
      const newCommentBox = this.state.commentBox.concat({
        content: this.state.input,
      });
      this.updateComment(newCommentBox);
    }
  };

  updateComment = newCommentBox => {
    this.setState({
      commentBox: newCommentBox,
      input: '',
    });
  };
  render() {
    return (
      <>
        <form className="navBar">
          <nav className="nav">
            <div className="left">
              <span className="fab fa-instagram fa" />
              <span className="westagramLogo">westagram</span>
            </div>
            <input className="navSearch" type="text" placeholder="검색" />
            <div className="navRight">
              <img
                className="compass"
                alt="나침반"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <img
                className="heart"
                alt="하트"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="person"
                alt="사람"
                src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </nav>
        </form>
        <div className="main">
          <form action="">
            <div className="feeds">
              <div className="topProfile">
                <img
                  className="topProfileCat "
                  alt="고양이"
                  src="/images/sungho/bigCat.jpg"
                />
                <p className="topProfileText">qt_cat</p>
                <p className="dots">...</p>
              </div>
              <div className="article">
                <img
                  className="cat"
                  alt="고양이"
                  src="/images/sungho/cat.png"
                />
                <div className="bottomIcons">
                  <div className="bottomLeft">
                    <i className="fas fa-heart" />
                    <i className="far fa-comment" />
                    <i className="fas fa-upload" />
                  </div>
                  <div className="bottomRight">
                    <i className="far fa-bookmark" />
                  </div>
                </div>
              </div>
              <div className="comment">
                <img
                  className="bottomProfileCat"
                  alt="고양이"
                  src="/images/sungho/bigCat.jpg"
                />
                <span className="likeComment">
                  <span className="bord">성호님</span> 외{' '}
                  <span className="bord">10명</span>이 좋아합니다
                </span>
              </div>
              <Child
                input={this.state.input}
                commentBox={this.state.commentBox}
                onInputChange={this.onInputChange}
                commentUpdate={this.commentUpdate}
                commentUpdateButton={this.commentUpdateButton}
                updateComment={this.updateComment}
              />
            </div>
            <div className="right">
              <div className="main-right">
                <div className="rightTop">
                  <img
                    alt="고양이"
                    className="rightCenterProfile"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">양성호 입니다!</p>
                  </div>
                </div>
              </div>
              <div className="mainRightCenter">
                <div className="rightCenterWrite">
                  <p className="story">스토리</p>
                  <p className="seeAll">모두 보기</p>
                </div>
                <div className="rightWordCenter">
                  <img
                    alt="고양이"
                    className="rightCenterProfile"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">1분 전</p>
                  </div>
                </div>
                <div className="rightWordCenter">
                  <img
                    alt="고양이"
                    className="rightCenterProfile"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">1시간 전</p>
                  </div>
                </div>
                <div className="rightWordCenter">
                  <img
                    alt="고양이"
                    className="rightCenterProfile"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">1억년 전</p>
                  </div>
                </div>
                <div className="rightWordCenter">
                  <img
                    alt="고양이"
                    className="rightCenterProfile"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">5만년 전</p>
                  </div>
                </div>
              </div>
              <div className="mainRightBottom">
                <div className="rightCenterWrite">
                  <p className="story">회원님을 위한 추천</p>
                  <p className="seeAll">모두 보기</p>
                </div>
                <div className="follow">
                  <p className="followText">팔로우</p>
                  <p className="followText">팔로우</p>
                  <p className="followText">팔로우</p>
                </div>
                <div className="rightWordCenter">
                  <img
                    className="rightCenterProfile"
                    alt="고양이"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">1분 전</p>
                  </div>
                </div>
                <div className="rightWordCenter">
                  <img
                    className="rightCenterProfile"
                    alt="고양이"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">1시간 전</p>
                  </div>
                </div>
                <div className="rightWordCenter">
                  <img
                    className="rightCenterProfile"
                    alt="고양이"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">1억년 전</p>
                  </div>
                </div>
                <div className="rightWordCenter">
                  <img
                    className="rightCenterProfile"
                    alt="고양이"
                    src="/images/sungho/bigCat.jpg"
                  />
                  <div className="explain">
                    <p className="explainUp">qt_cat입니다!!</p>
                    <p className="explainDw">55만년 전</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Mainsungho;
