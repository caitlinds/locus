const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    address: {
        type: String,
        required: true
      },
    checkedInUsers: [usersSchema]
  }, {
    timestamps: true
  })

module.exports = mongoose.model('Location', locationSchema);