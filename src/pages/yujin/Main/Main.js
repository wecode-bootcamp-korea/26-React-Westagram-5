import React from 'react';
import '../../../styles/common.scss';
import './Main.scss';

class MainYujin extends React.Component {
  // js
  render() {
    return (
      <div className="main">
        <article>
          <section className="peedleft">
            <div className="top">
              <div className="toplogo">
                <div className="topimg">
                  <a>
                    <img src="https://i.ibb.co/t3FPjGR/IMG-5767.jpg" alt="" />
                  </a>
                </div>
                <h4 className="memberid">
                  <a>subakida__</a>
                </h4>
              </div>
              <a>
                <i className="fas fa-ellipsis-h" />
              </a>
            </div>
            <div className="peedimg" />
            <div className="peedundericons">
              <div className="underleft">
                <a>
                  <i className="fas fa-heart" />
                </a>
                <a>
                  <i className="far fa-comment" />
                </a>
                <a>
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
              <div className="underight">
                <a>
                  <i className="far fa-bookmark" />
                </a>
              </div>
            </div>
            <div className="peedunderlikes">
              <div className="likesleft">
                <a>
                  <img
                    src="https://i.ibb.co/jJvsMKy/beauty-1602408542301.jpg"
                    alt=""
                  />
                </a>
                <p>
                  <a href="#">newjiiny__</a>님 외<a href="#"> 30명이</a>{' '}
                  &nbsp;좋아합니다
                </p>
              </div>
            </div>
            <div className="peedtext">
              <p className="canon">
                <a href="#">subakida__</a> 누나 데릴러 온 신수박~~
              </p>
              <div className="id2flexbox">
                <p className="id2">
                  <a href="#">newjiiny__</a> 귀여운 슈바기~~~ 🌝
                </p>
                <a>
                  <i className="far fa-heart" />
                </a>
              </div>
              <span className="minit">
                <p>
                  <a href="#">4분 전</a>
                </p>
              </span>
              <ul id="commentLists">
                <li />
              </ul>
            </div>
            <div className="comment">
              <input
                id="name"
                class="names"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="upload" id="submit">
                게시
              </button>
            </div>
          </section>
          <section className="side-right">
            <div className="side-container">
              <div />
              <div>
                <p>
                  wecode_bootcamp
                  <br />
                </p>
                <p>
                  WeCode<span>위코드</span>
                </p>
              </div>
            </div>
            <div className="side-story">
              <div className="side-navigation">
                <p>스토리</p>
                <div className="see-all">모두 보기</div>
              </div>

              <div className="story">
                <div className="story-img-one" />
                <div className="story-text">
                  <p className="bold">banana</p>
                  <p className="color">2시간 전</p>
                </div>
              </div>
              <div className="story">
                <div className="story-img-two" />
                <div className="story-text">
                  <p className="bold">apple</p>
                  <p className="color">33분 전</p>
                </div>
              </div>

              <div className="story">
                <div className="story-img-three" />
                <div className="story-text">
                  <p className="bold">cherry</p>
                  <p className="color">10시간 전</p>
                </div>
              </div>

              <div className="story">
                <div className="story-img-four" />
                <div className="story-text">
                  <p className="bold">kiwi</p>
                  <p className="color">20분 전</p>
                </div>
              </div>
            </div>

            <div className="side-pick">
              <div className="side-navigation">
                <p>회원님을 위한 추천</p>
                <div className="see-all">모두 보기</div>
              </div>

              <div className="side-wrap">
                <div className="sidewraps">
                  <div className="side-img side-wrap-img1" />
                  <div cass="side-childs">
                    <p className="name">lemon</p>
                    <p className="info">hoo님 외 7명이 팔...</p>
                  </div>
                </div>

                <button>팔로우</button>
              </div>

              <div className="side-wrap">
                <div className="sidewraps">
                  <div className="side-img side-wrap-img2" />
                  <div cass="side-childs">
                    <p className="name">orange</p>
                    <p className="info">god_jaewon님 외...</p>
                  </div>
                </div>

                <button>팔로우</button>
              </div>

              <div className="side-wrap">
                <div className="sidewraps">
                  <div className="side-img side-wrap-img3" />
                  <div cass="side-childs">
                    <p className="name">peach</p>
                    <p className="info">Hwayeon 외 4명이...</p>
                  </div>
                </div>

                <button>팔로우</button>
              </div>
            </div>

            <div className="footer-wrapper">
              <p>
                Instagram 정보 · 지원 · 홍보센터 · API · <br />
                채용정보 개인정보처리방침 · 약관 ·<br /> 디렉터리 · 프로필 ·
                해시태그 · 언어
              </p>
              <p>ⓒ 2021 INSTAGRAM</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default MainYujin;
