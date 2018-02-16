const functions = require('firebase-functions');
const firebase = require('firebase/app');
const firestore = require('firebase/firestore');
const express = require('express');
const fs = require('fs');
const { Comment } = require('./components/sc-comment');
const { CommentForm } = require('./components/sc-comment-form');

// this is lit-html on the server, lol
const html = String.raw;
const index = fs.readFileSync(`${__dirname}/index.html`, 'utf8');

const firebaseApp = firebase.initializeApp(functions.config().firebase);

const app = express();

app.get('/', (req, res) => {
  const state = { authorName: 'David East' };
  const html = index.replace('<!-- ::COMMENT_FORM:: -->', CommentForm.component(state));
  res.send(html);
});

exports.supercharged = functions.https.onRequest(app);
