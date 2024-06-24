import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Status from '../models/Status.js';
import Role from '../models/Role.js';
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
      status: Status.REGISTERED,
      role: Role.Guest,
      picturePath,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  let smsSent = false;
  //Send the OTP to the user

  if (smsSent) {
    return res.status(200).json({
      success: true,
      message: 'OTP sent successfully via SMS',
    });
  } else {
    return res.status(500).json({
      success: false,
      message: 'Failed to send OTP via SMS',
    });
  }
};
