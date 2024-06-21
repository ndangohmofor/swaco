const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['ADMIN', 'USER', 'GUEST'],
    required: true,
  },
});

const status = mongoose.model('Role', roleSchema);
module.exports = status;
