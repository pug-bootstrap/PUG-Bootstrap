var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('breadcrumb', { title: 'Pug Bootstrap' });
});

module.exports = router;
