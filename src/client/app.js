
// I do this for the syntax highlighting, lol
const html = String.raw;

let commentTmpl = document.createElement('template');
commentTmpl.innerHTML = html`
  <style>:host { }</style>
  <slot></slot>
`;

class SCComment extends HTMLElement {

  get() {
    return this.getAttribute('name');
  }

  set name(val) {
    this.setAttribute('name', val);
  }
  
  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(commentTmpl.content.cloneNode(true));
  }

}

class SCCommentList extends HTMLElement {

  connectedCallback() {
    this.app = firebase.initializeApp({ 
      "databaseURL":"https://supercharged-comments.firebaseio.com",
      "storageBucket":"supercharged-comments.appspot.com",
      "apiKey":"AIzaSyA-oGg493NHwv0pXs4WcqZuZQ_gNiW-rCc",
      "authDomain":"supercharged-comments.firebaseapp.com",
      "projectId":"supercharged-comments"
    });
    this.firestore = this.app.firestore();
    this.firestore.collection('comments').onSnapshot(this.render);
  }

  render(snapshot) {
    let frag = document.createDocumentFragment();
    snap.docChanges
      .forEach(change => {
        const scComment = this.querySelector(`#_${change.doc.id}`);
        if(!scComment) {
          const el = document.createElement('sc-comment');
          el.innerHTML = html`
            <div class="text">${change.doc.data().text}</div>
          `;
          frag.appendChild(el);
        }
      });
    this.appendChild(frag);
  }

}

customElements.define('sc-comment-list', SCCommentList);
customElements.define('sc-comment', SCComment);
