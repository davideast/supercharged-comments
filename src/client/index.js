import { Comment } from './components/sc-comment.js';
import { CommentForm } from './components/sc-comment-form.js';
import { CommentList } from './components/sc-comment-list.js';
import { Author } from './components/sc-author.js';

customElements.define('sc-author', Author);
customElements.define('sc-comment-form', CommentForm);
customElements.define('sc-comment-list', CommentList);
customElements.define('sc-comment', Comment);

Promise.all(
  customElements.whenDefined('sc-comment-form'),
  customElements.whenDefined('sc-comment-list'),
  customElements.whenDefined('sc-comment')
)
.then(() => {

  const scForm = document.querySelector('sc-comment-form');
  scForm.addEventListener('comment-created', e => {
    
  });

});