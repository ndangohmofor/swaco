import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['ADMIN', 'USER', 'GUEST'],
    default: 'GUEST',
    required: true,
  },
});

const Role = mongoose.model('Role', roleSchema);
export default Role;
