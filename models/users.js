
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
  glassesImage: [{type:String}],
  mannequinImage: [{type:String}],
  clothingType: [{type:String}],
  currentTShirtImage: [{type:String}],
  currentJeansImage: [{type:String}],
  currentPantsImage: [{type:String}],
  currentHatImage: [{type:String}],
  currentSneakersImage: [{type:String}],
  currentWatchImage: [{type:String}],
  currentGlassesImage: [{type:String}],
  messages: [String, String, String]
})

const User = mongoose.model('User', userSchema)

module.exports = User