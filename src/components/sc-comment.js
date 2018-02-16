import { SCElement } from './sc-element.js';

let html = String.raw;

export class Comment extends SCElement {
  static template(state) {
    return html`
      <sc-author author-name="${state.authorName}">
      </sc-author>
      <div class="sc-comment-text">${state.text}</div>
    `;
  }

  static component(state, id) {
    return html`
      <sc-comment id="_${id}">
        ${this.template(state)}
      </sc-comment>
    `;
  }
}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = Comment.template({ });
}
