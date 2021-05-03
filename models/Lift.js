const mongoose = require('mongoose');

const LiftSchema = new mongoose.Schema({
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
  metric: {
    type: Boolean,
    default: false
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Lift = mongoose.model('lift', LiftSchema);