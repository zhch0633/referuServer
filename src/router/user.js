var express = require('express');
var router = express.Router();
var dbobj = require('../dbinit.js');
var bodyParser = require('body-parser');
UserModel = dbobj.db.getUserModel();

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
     var userID = req.query.userID;
    if(userID === undefined){
        res.status(500).send('Parameter userID is empty for get method');
        console.log('result',"arameter userID is empty for get method");
    } else {
        UserModel.findOne({loginID:userID},function(err,response){
            if(err) {
                res.send(err);
                console.log('result', err);
            } else {
                res.send(response);
                console.log('result','success');
            }
        })        
    }
});

router.post('/',function(req,res){
    console.log(req.body);
    UserModel.findOneAndUpdate({loginID: "mockUser2"},{version:"1",extension:"222"},{upsert:true}, function(err, response){
    if(err){
      console.log(err);
    }
    console.log(response);
  });
    res.send("sussess");
})

router.delete('/',function(req,res){
    var userID = req.query.userID;
    if(userID === undefined){
        res.status(500).send('Parameter userID is empty for delete method');
        console.log('result',"arameter userID is empty for delete method");
    } else {
        res.send(good);
    }
})

module.exports = router;