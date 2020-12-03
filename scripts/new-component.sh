#!/usr/bin/sh

# Create component
touch components/$1.pug
echo "//- $1.pug
//- $1 mixins

//- $1
mixin $1()
  block
" >> components/$1.pug

# Create demo view
touch demo/views/$1.pug
echo "extends layout
include components/$1

block content
  h2 $1
" >> demo/views/$1.pug

# Create demo route
touch demo/routes/$1.js
echo "var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('$1', { title: 'Pug Bootstrap' });
});

module.exports = router;" >> demo/routes/$1.js


