var express = require('express');
var router = express.Router()


router.get('/', function (req, res) {
  res.send('User Home Page');
});
router.get('/search', function (req, res) {
  res.send('Search');
});

    // var breweries = require('./breweries.js');

    // init api route. all api routes will begin with /api
module.exports = router