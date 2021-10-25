import React from 'react';
import '../../../styles/common.scss';
import './Main.scss';

class MainJihoo extends React.Component {
  // js
  render() {
    return (
      <div className="main">
        <article>
          <section className="peedleft">
            <div className="top">
              <div className="toplogo">
                <div className="topimg">
                  <img
                    src="https://i.ibb.co/CQGw903/Kakao-Talk-Image-2021-10-14-18-01-43.jpg"
                    alt=""
                  />
                </div>
                <h4 className="memberid">
                  <span>Cello_daily.0</span>
                </h4>
              </div>
              <span>
                <i className="fas fa-ellipsis-h" />
              </span>
            </div>
            <div className="peedimg" />
            <div className="peedundericons">
              <div className="underleft">
                <span>
                  <i className="fas fa-heart" />
                </span>
                <span>
                  <i className="far fa-comment" />
                </span>
                <span>
                  <i className="fas fa-external-link-alt" />
                </span>
              </div>
              <div className="underight">
                <i className="far fa-bookmark" />
              </div>
            </div>
            <div className="peedunderlikes">
              <div className="likesleft">
                <div>
                  <img
                    src="https://i.ibb.co/CQGw903/Kakao-Talk-Image-2021-10-14-18-01-43.jpg"
                    alt=""
                  />
                </div>
                <p>
                  <span>cookies</span>님 외<span> 10명이</span> 좋아합니다
                </p>
              </div>
            </div>
            <div className="peedtext">
              <p className="canon">
                <div>Cello_daily.0</div> 넌 그냥 항상 이뿨,,, 내사랑...
                <span> 더 보기</span>
              </p>
              <div className="id2flexbox">
                <p className="id2">
                  <div>neceosecius</div> 거봐 좋았잖아~~~ 🌝 🌝
                </p>
                <div>
                  <i className="far fa-heart" />
                </div>
              </div>
              <span className="minit">
                <p>
                  <div>42분 전</div>
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
                  <p className="bold">god_jaewon</p>
                  <p className="color">2시간 전</p>
                </div>
              </div>
              <div className="story">
                <div className="story-img-two" />
                <div className="story-text">
                  <p className="bold">soyoon</p>
                  <p className="color">33분 전</p>
                </div>
              </div>

              <div className="story">
                <div className="story-img-three" />
                <div className="story-text">
                  <p className="bold">ujinSin</p>
                  <p className="color">10시간 전</p>
                </div>
              </div>

              <div className="story">
                <div className="story-img-four" />
                <div className="story-text">
                  <p className="bold">selina</p>
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
                    <p className="name">ockNim</p>
                    <p className="info">hoo님 외 7명이 팔...</p>
                  </div>
                </div>

                <button>팔로우</button>
              </div>

              <div className="side-wrap">
                <div className="sidewraps">
                  <div className="side-img side-wrap-img2" />
                  <div cass="side-childs">
                    <p className="name">dragonYong</p>
                    <p className="info">god_jaewon님 외...</p>
                  </div>
                </div>

                <button>팔로우</button>
              </div>

              <div className="side-wrap">
                <div className="sidewraps">
                  <div className="side-img side-wrap-img3" />
                  <div cass="side-childs">
                    <p className="name">yeju</p>
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
              <p>ⓒ 2019 INSTAGRAM</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default MainJihoo;
