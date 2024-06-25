import mongoose from 'mongoose';

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
      expiresAt: { type: Date, expires: 600 },
    },
    status: {
      type: String,
      enum: ['REGISTERED', 'MEMBER', 'VERIFIED'],
      default: 'REGISTERED',
      required: true,
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER', 'GUEST'],
      default: 'GUEST',
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
