var express = require('express');
let upload = require('../controller/file-upload');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/v1/upload', upload.array('image', 1), (req, res) => {
  /* This will be th 8e response sent from the backend to the frontend */
  res.send({ image: req.file });
 });

module.exports = router;
