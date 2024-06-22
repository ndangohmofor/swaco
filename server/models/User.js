import mongoose from 'mongoose';
import Role from './Role.js';
import Status from './Status.js';

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
      default: null,
    },
    status: {
      type: String,
      enum: [Status.Registered, Status.Member],
      default: Status.Registered,
      required: true,
    },
    role: {
      type: String,
      enum: [Role.Admin, Role.User, Role.Guest],
      default: Role.Guest,
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
