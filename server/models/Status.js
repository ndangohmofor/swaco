import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['REGISTERED', 'MEMBER'],
    default: 'REGISTERED',
  },
});

const Status = mongoose.model('Status', statusSchema);
export default Status;
