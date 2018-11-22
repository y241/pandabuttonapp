var express = require('express');
var router = express.Router();
var speaker = "0";
 /* POST speaker listing. */
router.post('/', function(req, res, next) {
  speaker = req.body.speaker;
  res.send();
});
 /* GET speaker listing. */
router.get('/', function(req, res, next) {
  res.send(speaker);
});
 module.exports = router;