var express = require("express")
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('about', {title: "About", message: "About page works"})
})

module.exports = router;