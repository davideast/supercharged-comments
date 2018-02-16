const functions = require('firebase-functions');
const firebase = require('firebase/app');
const firestore = require('firebase/firestore');
const express = require('express');
const fs = require('fs');
const { Comment } = require('./components/sc-comment');
const { CommentForm } = require('./components/sc-comment-form');
const { CommentList } = require('./components/sc-comment-list');

const index = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
const firebaseApp = firebase.initializeApp(functions.config().firebase);
const app = express();

const pageBuilder = (index) => {
  return {
    page: index,
    replace(holder, replacement) {
      this.page = this.page.replace(holder, replacement);
    },
    addCommentForm(state) {
      this.replace('<!-- ::COMMENT_FORM:: -->', 
        CommentForm.component(state));
      return this;
    },
    addCommentList(state) {
      const comments = state.comments.map(c => Comment.component(c, c.id)).join('');
      const commentList = CommentList.component(comments);
      this.replace('<!-- ::COMMENT_LIST:: -->', commentList);
      return this;
    },
    build() {
      return this.page;
    }
  }
};

app.get('/', (req, res) => {
  const commentsRef = firebaseApp.firestore().collection('comments');
  commentsRef.orderBy('timestamp').get().then(snap => {
    const comments = snap.docs.map(d => Object.assign({ id: d.id }, d.data()));
    const state = { comments };
    const page = pageBuilder(index)
      .addCommentForm({ authorName: 'David East' })
      .addCommentList(state)
      .build();
    res.send(page);
  });
});

exports.supercharged = functions.https.onRequest(app);
