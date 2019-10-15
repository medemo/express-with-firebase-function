const functions = require('firebase-functions');
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h3>Home Page</h3>
    <ul>
      <li><a href="/web">Home Page</a></li>
      <li><a href="/web/about">About Page</a></li>
      <li><a href="/web/fox">Fox Page</a></li>
    </ul>
  `)
})

app.get('/about', (req, res) => {
  res.send(`
    <h3>About Page</h3>
    <ul>
      <li><a href="/web">Home Page</a></li>
      <li><a href="/web/about">About Page</a></li>
      <li><a href="/web/fox">Fox Page</a></li>
    </ul>
  `)
})

app.get('/fox', (req, res) => {
  res.send(`
    <h3>Fox Page</h3>
    <ul>
      <li><a href="/web">Home Page</a></li>
      <li><a href="/web/about">About Page</a></li>
      <li><a href="/web/fox">Fox Page</a></li>
    </ul>
  `)
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.web = functions.https.onRequest(app);

