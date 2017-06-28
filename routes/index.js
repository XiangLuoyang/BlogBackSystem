var express = require('express');
var router = express.Router();
/*Get Hello World Page*/
router.get('/helloworld',function(req,res){
  res.render('helloworld',{title:'hello,world'});
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
