const mongoose = require('mongoose');

const LiftSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  set: {
    type: Number,
    required: true
  },
  rep: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  metric: {
    type: String
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Lift = mongoose.model('lift', LiftSchema);