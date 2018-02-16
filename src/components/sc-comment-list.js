import { SCElement } from './sc-element.js';
import { Comment } from './sc-comment.js';

let html = String.raw;

export class CommentList extends SCElement {
  
  static component(comments) {
    return html`
      <sc-comment-list>
        ${comments}
      </sc-comment-list>
    `;
  }

  getComment(docName) {
    return this.querySelector(`$_${docName}`);
  }

  addComment(state, id) {
    const el = document.createElement('sc-comment');
    el.id = id;
    el.innerHTML = Comment.template(state);
    this.appendChild(el);
  }

}
