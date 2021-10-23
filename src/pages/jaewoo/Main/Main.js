import React from 'react';
import './Main.scss';

class MainJaewoo extends React.Component {
  render() {
    return (
      <body>
        <div>
          <div className="main">
            <div className="mainBox1">
              <section className="Box1Section">
                <div className="profileBox">
                  <div className="viewName">
                    <img alt="hi there" src="images/jaewoo/my.jpg" />
                    <div className="userName">ahnjaewoo</div>
                  </div>
                  <div className="viewPicture">
                    <img alt="hi there" src="images/jaewoo/my.jpg" />
                  </div>
                  <div className="followingBox">
                    <div className="leftSection">
                      <i className="far fa-heart" />
                      <i className="far fa-comment" />
                      <i className="fas fa-upload" />
                    </div>
                    <div className="rightSection">
                      <i className="far fa-bookmark" />
                    </div>
                  </div>
                  <div className="commentViewBox">
                    jo_original
                    <br />
                    ohyoun
                    <br />
                  </div>
                  <div className="commentBox">
                    <input className="comment" placeholder="댓글입력" />
                    <button className="coMmnetbutton" />
                  </div>
                </div>

                <div className="rightProfile">
                  <div className="rightBox">
                    <img
                      alt="hi there"
                      className="pid"
                      src="images/jaewoo/my.jpg"
                    />
                    username
                  </div>
                  <div className="rightBox1">
                    <div className="recommendSection">
                      <span>스토리</span>
                      <span>모두보기</span>
                    </div>
                    <div className="personView">
                      <img
                        alt="hi there"
                        className="plus"
                        src="images/jaewoo/my.jpg"
                      />
                      <div className="rightSmallBox">
                        <span>jowonrae123</span>
                        <br />
                        <span>16분전 ohyoon외 2명</span>
                      </div>
                    </div>
                    <div className="personView">
                      <img
                        alt="hi there"
                        className="plus"
                        src="images/jaewoo/my.jpg"
                      />
                      <div className="rightSmallBox">
                        <span>sanghwaban</span>
                        <br /> <span>2시간전 ohyoon외 5명</span>
                      </div>
                    </div>
                    <div className="personView">
                      <img
                        alt="hi there"
                        className="plus"
                        src="images/jaewoo/my.jpg"
                      />
                      <div className="rightSmallBox">
                        <span>ohyounkwon</span>
                        <br /> <span>3시간전 ohyoon외 12명</span>
                      </div>
                    </div>
                  </div>
                  <div className="rightBox1">
                    <div className="recommendSection">
                      <span>회원을위한 추천</span>
                      <span>모두보기</span>
                    </div>
                    <div className="personView">
                      <img
                        alt="hi there"
                        className="plus"
                        src="images/jaewoo/my.jpg"
                      />
                      <div className="rightSmallBox">
                        <span>gangilkim</span>
                        <br /> <span>16분전 ohyoon외 3명</span>
                      </div>
                    </div>
                    <div className="personView">
                      <img
                        alt="hi there"
                        className="plus"
                        src="images/jaewoo/my.jpg"
                      />
                      <div className="rightSmallBox">
                        <span>seonghuckyoon</span>
                        <br /> <span>2시간전 ohyoon외 4명</span>
                      </div>
                    </div>
                    <div className="personView">
                      <img
                        alt="hi there"
                        className="plus"
                        src="images/jaewoo/my.jpg"
                      />
                      <div className="rightSmallBox">
                        <span>dohoonkim</span>
                        <br /> <span>3시간전 ohyoon외 6명</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default MainJaewoo;
