import { SCElement } from './sc-element.js';

let html = String.raw;

export class CommentList extends SCElement {
  
  static component(comments) {
    return html`
      <sc-comment-list>
        ${comments}
      </sc-comment-list>
    `;
  }

  connectedCallback() {
    
  }  

}
