let html = String.raw;

export class CommentForm extends HTMLElement {

  static template(state) {
    return html`
      <sc-author></sc-author>
      <textarea></textarea>
      <button class="sc-btn">Send</button>    
    `;
  }

  connectedCallback() {

  }  

}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = CommentForm.template();
}
