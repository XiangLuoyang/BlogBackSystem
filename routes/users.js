var express = require('express');
var router = express.Router();
var app = express();
/* GET users listing. */
var questions = require('../data/questions');
app.get('/123', function (req, res) {
  res.json(qusetions);
})
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;