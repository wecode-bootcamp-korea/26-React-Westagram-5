import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Comment extends Component {
  render() {
    const { comments, deleteComment, textChange, pressEnter, newComment, add } =
      this.props;
    return (
      <>
        <div className="feeds-commit">
          <p>
            <Link to="/main-soyoon" class="name">
              eenooyos
            </Link>
            아이고 두야.. 이렇게 하는거 맞는거... <span>더보기</span>
          </p>

          <ul id="comment-wrapper">
            <li>
              <span className="name">yeonjeongzzang</span>
              <span> 마라탕조아용😏</span>
              <span class="delete"> x </span>
            </li>

            {comments.map((el, deleteId) => {
              return (
                <li key={deleteId}>
                  <span className="name">{USER_NAME}</span>
                  <span>{el.text}</span>
                  <span
                    onClick={() => deleteComment(deleteId)}
                    className="delete"
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>

          <p>42분 전</p>
        </div>
        <div id="comment">
          <input
            type="text"
            placeholder="댓글 달기..."
            id="commentInput"
            onChange={textChange}
            onKeyPress={pressEnter}
            value={newComment}
          />
          <button id="submit" onClick={add}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;

const USER_NAME = 'eenooyos ';
