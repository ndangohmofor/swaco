import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['REGISTERED', 'MEMBER'],
  },
});

const Status = mongoose.model('Status', statusSchema);
export default Status;
