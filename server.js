const throng = require('throng');

const WORKERS = process.env.WEB_CONCURRENCY || 250;
const PORT = process.env.PORT || 5000;
const BLITZ_KEY = process.env.BLITZ_KEY;

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

function start() {
  const crypto = require('crypto');
  const express = require('express');
  const blitz = require('blitzkrieg');
  const app = express();

  app
    .get('/get', getResponse)
    .post('/post', postResponse)
    .listen(PORT, onListen);


  function getResponse(req, res, next) {
  	setTimeout(function SimulateDb() {
      res.json({ message : 'everything is ok'});
    },300).unref();
  }

  function postResponse(req, res, next) {
    res.json({ message : 'Post went OK'});
  }

  function onListen() {
    console.log('Listening on', PORT);
  }
}