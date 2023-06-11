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

// - Time clock model:
// -  - userId
// - Clock in:
//     - Date
//     - Time
//     - Required
// - Clock out:
//     - Date
//         - default: null
//     - Time 
//         - default: null
// - Total time:
//     - Number of hours
//         - * Calculate by converting and subtracting clock out - clock in timestamps
//         - default: null
// - Timestamp