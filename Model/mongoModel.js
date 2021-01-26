var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({
    name: {

      type: String,
        default: ''

    },
    email: {

      type: String,
        default: ''

    }
},{timestamps:true});

module.exports = mongoose.model('User', User);