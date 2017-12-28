'use strict';

var express = require('express');
var request = require('request');

var router = express.Router();
var username = process.env.USER_NAME;
var oauthToken = process.env.GIT_TOKEN;
require('dotenv').config();

var userOptions = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

var repoOptions = {
  url: 'https://api.github.com/users/' + username + '/repos',
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

router.get('/user', function (req, res) {
  console.log('inside /user');
  request(userOptions, function (error, response, body) {
    if (response && response.statusCode === 200) {
      res.send(body);
    } else {
      console.log(res);
      res.sendStatus(500);
    }
  });
});

router.get('/repos', function (req, res) {
  console.log('inside /repos');
  request(repoOptions, function (error, response, body) {
    if (response && response.statusCode === 200) {
      res.send(body);
    } else {
      console.log(res);
      res.sendStatus(500);
    }
  });
});

module.exports = router;
