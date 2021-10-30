import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Comment extends Component {
  render() {
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

            {this.props.comments.map((el, id) => {
              return (
                <li key={id}>
                  <span className="name">{USER_NAME}</span>
                  <span>{el.text}</span>
                  <span onClick={() => this.props.delete(id)} className="oogog">
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
            onChange={this.props.textChange}
            onKeyPress={this.props.pressEnter}
            value={this.props.newComment}
          />
          <button id="submit" onClick={this.props.add}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;

const USER_NAME = 'eenooyos ';
