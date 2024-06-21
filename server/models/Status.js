import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['REGISTERED', 'MEMBER'],
  },
});

const status = mongoose.model('Status', statusSchema);
export default status;
