var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET home page. */
router.post('/new', function(req, res, next) {
  console.log(req.body)
  models.Thread.create({title: req.body.title,
                        description: req.body.description});
  res.redirect('/');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
