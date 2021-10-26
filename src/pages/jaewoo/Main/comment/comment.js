import React, { Component } from 'react';

export class comment extends Component {
  constructor() {
    super();
    this.state = {
      newReply: '',
      replies: [{ text: '' }],
    };
  }
  textChange = e => {
    this.setState({ newReply: e.target.value });
  };
  buttonClick = () => {
    let arr = this.state.replies;
    arr = arr.concat({ text: this.state.newReply });
    this.setState({ newReply: '', replies: arr });
  };
  enterClick = e => {
    if (e.key === 'Enter') {
      this.buttonClick();
      e.target.value = '';
    }
  };

  render() {
    return (
      <ul className="commentViewBox">
        {this.state.replies.map(e => (
          <li>{e.text}</li>
        ))}
        <li>
          <strong>jo_original </strong> jo_original
        </li>
        <li>
          <strong>jo_original </strong> jo_original
        </li>
        <div class="buttonWrapper">
          <textarea
            className="commnetText"
            placeholder="댓글 달기"
            onChange={this.textChange}
            onKeyPress={this.enterClick}
          />
          <button className="comment-Press" onClick={this.buttonClick}>
            게시
          </button>
        </div>
      </ul>
    );
  }
}

export default comment;
