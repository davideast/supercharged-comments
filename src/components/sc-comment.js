import { SCElement } from './sc-element.js';

let html = String.raw;

export class Comment extends SCElement {
  static template(state) {
    return html`
      <sc-author>
      </sc-author>
      <div class="sc-comment-text">Yo.</div>
    `;
  }

  static component(state) {
    return html`
      <sc-comment>
        ${this.template(state)}
      </sc-comment>
    `;
  }

  connectedCallback() {

  } 
}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = Comment.template();
}
