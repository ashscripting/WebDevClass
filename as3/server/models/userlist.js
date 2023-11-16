let mongoose = require('mongoose');

// create a model class
let userModel = mongoose.Schema({
        Name:String,
        Lastname:String,
        UserId:Number,
    },
    {
        collection:"user-list"
    });
module.exports = mongoose.model('user',userModel);
