
// DEPENDENCIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = Schema({
  username: String,
  password: String,
  tShirtImage: [{type:String}],
  jeansImage: [{type:String}],
  pantsImage: [{type:String}],
  hatImage: [{type:String}],
  sneakersImage: [{type:String}],
  watchImage: [{type:String}],
  jacketImage: [{type:String}],
  mannequinImage: [{type:String}],
  clothingType: [{type:String}],
  messages: [String, String, String]
})

const User = mongoose.model('User', userSchema)

module.exports = User