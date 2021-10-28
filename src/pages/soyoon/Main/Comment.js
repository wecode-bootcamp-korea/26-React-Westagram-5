import { render } from 'node-sass';
import React from 'react';

class Comment extends React.Comment {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [{ text: '' }],
    };
  }

  render() {
    return (
      <form id="comment">
        <input type="text" placeholder="댓글 달기..." id="commentInput" />
        <button id="submit">게시</button>
      </form>
    );
  }
}
