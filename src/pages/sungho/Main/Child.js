import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <div className="commentOut">
          <ul className="commentWrite">
            {this.props.commentBox.map(x => (
              <li>
                <span className="commentId">성호님&nbsp;&nbsp;</span>
                {x.content}
              </li>
            ))}
          </ul>
        </div>
        <div className="commentBox">
          <input
            value={this.props.input}
            onChange={this.props.onInputChange}
            onKeyPress={this.props.commentUpdate}
            className="commentIn"
            type="text"
            placeholder="댓글 달기..."
          />
          <button
            onClick={this.props.commentUpdateButton}
            type="button"
            className="commentButton"
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}
export default Child;
