var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
router.get('/', function (req, res, next) {
  l = __dirname.split("\\")
  l.pop()
  l = l.join("/")
  res.sendFile(path.join(l + "/public/html/index.html"));
});

module.exports = router;
