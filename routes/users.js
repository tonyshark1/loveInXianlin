var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user.js');
var Post = require('../models/post.js');
var formidable = require('formidable');
var fs = require('fs');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/


router.get('/account', function(req, res, next) {
  res.render('account', { title: '我的主页', source: 'uploads/test.jpg' });
});

module.exports = router;
