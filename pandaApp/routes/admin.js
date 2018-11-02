var express = require('express');
var router = express.Router();
var path = require('path');

/* GET admin listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('./public/admin.html'));
});

module.exports = router;
