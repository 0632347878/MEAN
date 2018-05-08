var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', homepageController);

module.exports = router;

var arrayOfValues = {
 title: 'Express',
 customelem: 'piece'
};

function homepageController(req, res) {
 res.render('index', { arrayOfValues });
}

