var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login'
  });
});

router.get('/sign-up', function(req, res, next) {
  res.render('signup', {
    title: 'Sign Up'
  });
});
module.exports = router;
