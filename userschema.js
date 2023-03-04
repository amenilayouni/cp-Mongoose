const mongoose = require ('mongoose')


const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFoods:[String],
})
module.exports = mongoose.model('user',UserSchema )