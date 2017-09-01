var express = require('express');
var router = express.Router();
var dbobj = require('../dbinit.js');
var bodyParser = require('body-parser');
ReferModel = dbobj.db.getReferModel();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    var sess = req.session;
    console.log('Session: ', req.sessionID)
    next();
});

//router.use(bodyParser.json);
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

router.get('/',function(req,res){
    var newRefer = new ReferModel({
        jobTitle:"mocktitle",
        companyName:"mock",
        jobFunction:"mock",
    });
    newRefer.save(function(err,self){
        if(err){
            res.send("submit failed");
        } else {
            res.send("success")
        }
    })
});

router.post('/',function(req,res){
    console.log(req.body);
    res.send("success");
})

module.exports = router;