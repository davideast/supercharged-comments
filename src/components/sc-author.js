import { SCElement } from './sc-element.js'
let html = String.raw;

export class Author extends SCElement {

  get authorName() {
    return this.getAttribute('author-name');
  }

  set authorName(val) {
    return this.setAttribute('author-name', val);
  }

  static template(state) {
    return html`
    <div class="sc-comment-avatar">
      <div class="sc-circle-avatar"></div>
    </div>
    <div class="sc-comment-name">${this.authorName}</div>
    `;
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    this.render();
  }

  render() {
    this.authorNameEl = this.querySelector('.sc-comment-name');
    this.authorNameEl.textContent = this.authorName;
  }

}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = Author.template({ });
}
