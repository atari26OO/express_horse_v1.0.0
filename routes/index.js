var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res) {
  res.render('index', {
    title : 'Horse'
  });
});

router.get('/client', function (req, res) {
  res.render('client', { // here instead of controller for demo
    title : 'Client'
  });
});

module.exports = router;
