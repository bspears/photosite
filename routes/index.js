var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ben Spears' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Ben Spears' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Ben Spears' });
});

module.exports = router;
