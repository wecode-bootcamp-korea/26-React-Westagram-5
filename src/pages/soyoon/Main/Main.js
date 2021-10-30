import React from 'react';
import './Main.scss';
import Comment from './Comment';
import { Link } from 'react-router-dom';

class MainSoyoon extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
      id: 0,
    };
  }

  textChange = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  add = () => {
    const { newComment, comments, id } = this.state;

    const arr = {
      id: id,
      text: newComment,
    };

    this.setState({
      comments: comments.concat(arr),
      newComment: '',
      id: id + 1,
    });
  };

  delete = id => {
    const { comments } = this.state;

    const commentBox = comments;
    const filterBox = commentBox.filter(el => el.id !== id);
    this.setState({ comments: filterBox });
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.add();
    }
  };

  render() {
    return (
      <main>
        <article className="article">
          <section className="feeds">
            <div className="feeds-head">
              <div className="feeds-head-left">
                <div className="feeds-head-img" />
                <div className="feeds-head-name">
                  <p>eenooyos</p>
                </div>
              </div>
              <div className="feeds-head-right">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-1024.png"
                  alt="dot"
                />
              </div>
            </div>
            <div className="feeds-img" />
            <div className="feeds-img-int">
              <div className="feeds-img-nav">
                <div className="img-nav-wrapper">
                  <div className="heart">
                    <i className="far fa-heart" />
                  </div>
                  <div className="bubble">
                    <i className="far fa-comment" />
                  </div>
                  <div>
                    <i className="far fa-paper-plane" />
                  </div>
                </div>
                <div>
                  <div className="img-nav-wrapper">
                    <i className="far fa-bookmark" />
                  </div>
                </div>
              </div>
              <div className="feeds-img-re">
                <div className="feeds-img-like">
                  <div className="like-img" />
                  <div className="like-img-ex">
                    <p>
                      <Link to="/main-soyoon">S2minjeong</Link>님&nbsp;
                      <Link to="/main-soyoon">외 23명</Link>이 좋아합니다.
                    </p>
                  </div>
                </div>
              </div>
              <Comment
                newComment={this.state.newComment}
                comments={this.state.comments}
                textChange={this.textChange}
                add={this.add}
                delete={this.delete}
                pressEnter={this.pressEnter}
              />
            </div>
          </section>

          <section id="side">
            <div className="side-account">
              <div className="account-img" />
              <div className="account-img-ex">
                <div>
                  <p>wecode_bootcamp</p>
                  <p>
                    WeCode<span>위코드</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="side-story">
              <div className="side-navi">
                <p>스토리</p>
                <div>모두 보기</div>
              </div>
              <div className="story">
                <div className="story-img">
                  <div />
                </div>
                <div className="story-img-ex">
                  <p>sanghyunboy</p>
                  <p>16분 전</p>
                </div>
              </div>
              <div className="story">
                <div className="story-img">
                  <div />
                </div>
                <div className="story-img-ex">
                  <p>you_god</p>
                  <p>20분 전</p>
                </div>
              </div>
              <div className="story">
                <div className="story-img">
                  <div />
                </div>
                <div className="story-img-ex">
                  <p>iamwindow</p>
                  <p>1시간 전</p>
                </div>
              </div>

              <div className="story">
                <div className="story-img">
                  <div />
                </div>
                <div className="story-img-ex">
                  <p>sanghyunboy</p>
                  <p>3시간 전</p>
                </div>
              </div>
              <div className="story">
                <div className="story-img">
                  <div />
                </div>
                <div className="story-img-ex">
                  <p>you_god</p>
                  <p>5시간 전</p>
                </div>
              </div>
              <div className="story">
                <div className="story-img">
                  <div />
                </div>
                <div className="story-img-ex">
                  <p>iamwindow</p>
                  <p>20시간 전</p>
                </div>
              </div>
            </div>
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
          </section>
        </article>
      </main>
    );
  }
}

export default MainSoyoon;
