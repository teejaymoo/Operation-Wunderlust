const mongoose = require('mongoose')

const landmarkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  likeIt: {
    type: Boolean
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Landmark', landmarkSchema)
