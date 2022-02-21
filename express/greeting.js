var express = require('express');
var router = express.Router();

router.get('/',function(req,res)
{
    res.send("Bonjour le monde");
});

router.get('/hey',function(req,res)
{
    res.send("hey buddy! whats up");
});

module.exports = router;