let html = String.raw;

export class Author extends HTMLElement {
  static template(state) {
    return html`
    <div class="sc-comment-avatar">
      <div class="sc-circle-avatar"></div>
    </div>
    <div class="sc-comment-name">David East</div>
    `;
  }

  connectedCallback() {
    
  }  

}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = Author.template();
}
