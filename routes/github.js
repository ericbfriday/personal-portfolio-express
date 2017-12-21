const express = require('express');
const request = require('request');

const router = express.Router();
const username = process.env.USER_NAME;
const oauthToken = process.env.GIT_TOKEN;
require('dotenv').config();

const userOptions = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  },
};

const repoOptions = {
  url: 'https://api.github.com/users/' + username + '/repos',
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  },
};

router.get('/user', (req, res) => {
  console.log('inside /user');
  request(userOptions, (error, response, body) => {
    if (response && response.statusCode === 200) {
      res.send(body);
    } else {
      console.log(res);
      res.sendStatus(500);
    }
  });
});

router.get('/repos', (req, res) => {
  console.log('inside /repos');
  request(repoOptions, (error, response, body) => {
    if (response && response.statusCode === 200) {
      res.send(body);
    } else {
      console.log(res);
      res.sendStatus(500);
    }
  });
});

module.exports = router;
