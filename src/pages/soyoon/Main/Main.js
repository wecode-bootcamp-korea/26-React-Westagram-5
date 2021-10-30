import React from 'react';
import './Main.scss';
import Comment from './Comment';
import Side from './side/Side';
import { Link } from 'react-router-dom';

class MainSoyoon extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
      deleteId: 0,
    };
  }

  textChange = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  add = () => {
    const { newComment, comments, deleteId } = this.state;

    if (newComment.length > 0) {
      const arr = {
        deleteId: deleteId,
        text: newComment,
      };

      this.setState({
        comments: comments.concat(arr),
        newComment: '',
        deleteId: deleteId + 1,
      });
    }
  };

  deleteComment = deleteId => {
    const { comments } = this.state;

    const commentBox = comments;
    const filterBox = commentBox.filter(el => el.deleteId !== deleteId);
    this.setState({ comments: filterBox });
  };

  pressEnter = e => {
    const { newComment } = this.state;

    if (e.key === 'Enter' && newComment.length > 0) {
      this.add();
    }
  };

  render() {
    console.log(this.state.comments);
    console.log(this.state.deleteId);
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
                deleteComment={this.deleteComment}
                pressEnter={this.pressEnter}
              />
            </div>
          </section>

          <Side />
        </article>
      </main>
    );
  }
}

export default MainSoyoon;
