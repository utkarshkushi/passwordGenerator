const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    name: {type:String, required:true},
    password: {type:String, required:true}
})

const model = mongoose.model('Password', passwordSchema);

module.exports = model;