var mongoose = require('mongoose');

var db = function() {
    console.log('Starting init db');
    var options = {
      user: 'server',
      pass: '555Zy83345690!'
    }

    mongoose.connect('mongodb://47.93.39.83:27017/site',options);

    //start generating schema
    var UserSchema = new mongoose.Schema({
        loginID:{type: String, index: {unique: true }},
        version:{type: String}
    });
    mongoose.model('users',UserSchema);
    
    var ReferSchema = new mongoose.Schema({
        jobTitle:{type: String},
        companyName:{type: String},
        jobFunction:{type: String},
        employmentType:{type: String},
        seniorityLevel:{type: String},
        jobDescription:{type: String},
        suggestion:{type:String},
        description:{type:String},
        attachment:{type:String},
        name:{type:String},
        phone:{type:String},
        email:{type:String},
        title:{type:String},
        wechat:{type:String}
    })
    mongoose.model('refer',ReferSchema);
    
    console.log('finish init db');

    return {
        inited: true,
        getUserModel: function(){
            return mongoose.model('users');
        },
        getReferModel: function(){
            return mongoose.model('refer');
        }
    }

    
}();

exports.db = db;
