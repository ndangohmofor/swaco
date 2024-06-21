import mongoose from 'mongoose';
import Role from './Role';
import Status from './Status';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    location: String,
    phoneNumber: {
      type: String,
      required: true,
      max: 10,
      unique: true,
    },
    otp: {
      type: String,
      required: false,
      max: 5,
    },
    status: {
      type: Status,
      required: true,
    },
    role: {
      type: Role,
      required: true,
    },
    picturePath: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);
export default User;
