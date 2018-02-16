import { SCElement } from './sc-element.js'
let html = String.raw;

export class CommentForm extends SCElement {

  static template(state) {
    return html`
      <sc-author author-name="${state.authorName}"></sc-author>
      <textarea id="txtContent"></textarea>
      <button id="btnSend" class="sc-btn">Send</button>    
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
    this.btnSend = this.querySelector('#btnSend');
    this.txtContent = this.querySelector('#txtContent');
    this.btnSend.addEventListener('click', e => {
      const text = this.txtContent.value;
      const event = new CustomEvent('comment-created', { detail: { text } });
      this.dispatchEvent(event);
      this.txtContent.value = '';
    });
  }  

}

let template;
if (typeof window !== 'undefined') {
  template = document.createElement('template');
  template.innerHTML = CommentForm.template({ });
}
