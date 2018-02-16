import { SCElement } from './sc-element.js'
let html = String.raw;

export class Author extends SCElement {
  static template(state) {
    return html`
    <div class="sc-comment-avatar">
      <div class="sc-circle-avatar"></div>
    </div>
    <div class="sc-comment-name">David East</div>
    `;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
  }

}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = Author.template();
}
