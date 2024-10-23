import bcrypt from 'bcrypt';
import User from '../models/User.js';
import otpGenerator from 'otp-generator';
import { sendOtp, verifyOtp } from '../util/send-sms.js';

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

    const { referenceId } = await sendOtp(phoneNumber);

    const newUser = new User({
      firstName,
      lastName,
      location,
      phoneNumber,
      otp: hashedOtp,
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
