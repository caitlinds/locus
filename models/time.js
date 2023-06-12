const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timeIn: {
    type: Date,
    required: true
  },
  timeOut: {
    type: Date,
    default: null,
  },
  totalHours: {
    type: Number,
    default: null,
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Time', timeSchema);