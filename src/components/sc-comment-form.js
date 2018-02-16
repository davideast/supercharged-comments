import { SCElement } from './sc-element.js'
let html = String.raw;

export class CommentForm extends SCElement {

  static template(state) {
    return html`
      <sc-author></sc-author>
      <textarea></textarea>
      <button class="sc-btn">Send</button>    
    `;
  }

  static component(state) {
    return html`
      <sc-comment-form>
        ${this.template(state)}
      </sc-comment-form>
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
