import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import otpGenerator from 'otp-generator';

/** REGISTER USER */
export const register = async (req, res) => {
  try {
    const { firstName, lastName, location, phoneNumber, picturePath } =
      req.body;

    let user = await User.findOne({ phoneNumber });
    if (user) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    let otp = otpGenerator.generate(5, {
      digits: true,
      alphabets: false,
      specialChars: false,
      upperCase: false,
    });
    const hashedOtp = await bcrypt.hash(otp, 10);

    const newUser = new User({
      firstName,
      lastName,
      location,
      phoneNumber,
      otp: hashedOtp,
<<<<<<< HEAD
      status: 'REGISTERED',
      role: 'GUEST',
=======
>>>>>>> d9096534d9ab02b54ba10c94b885fa5911855aed
      picturePath,
    });

    console.log('newUser', newUser);

    const savedUser = await newUser.save();
    let smsSent = false;

    if (smsSent) {
      return res.status(201).json({
        user: savedUser,
        message: 'Enter the OTP sent to your number',
      });
    } else {
      return res.status(201).json({
        user: savedUser,
        message: 'Failed to send OTP via SMS',
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
