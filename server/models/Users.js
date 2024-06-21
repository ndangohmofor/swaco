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
    },
    status: {},
    picturePath: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);
