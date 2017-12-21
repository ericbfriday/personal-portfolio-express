const express = require('express');
const router = express.Router();
const request = require('request');
const username = process.env.USER_NAME;
const oauthToken = process.env.GIT_TOKEN;
require('dotenv').config();

const user_options = {
    url: 'https://api.github.com/users/' + username,
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    }
};

const repo_options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    }
};

router.get('/user', function (req, res, next) {
    request(user_options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
});

router.get('/repos', function (req, res, next) {
    request(repo_options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
});

module.exports = router;