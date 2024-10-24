import User from '../models/User.js';
import { sendOtp, verifyOtp } from '../util/send-sms.js';
import jwt from 'jsonwebtoken';

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
      picturePath,
    });

    console.log('newUser', newUser);
    await newUser.save();
    res.status(201).json({ referenceId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* VERIFY OTP */
export const confirmOtp = async (req, res) => {
  try {
    const { referenceId, phoneNumber, otpCode } = req.body;

    const user = await User.findOne({ phoneNumber });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const { success, message } = await verifyOtp(
      referenceId,
      phoneNumber,
      otpCode,
    );

    if (!success) {
      res.status(400).json({ success, message });
      return;
    }

    //If user is in registered status, change it to verified and update status in the DB
    if (user.status === 'REGISTERED') {
      user.status = 'VERIFIED';
      await User.findOneAndUpdate(
        { phoneNumber },
        { status: 'VERIFIED' },
        { returnOriginal: false },
      );
    }

    const token = jwt.sign(
      { id: user._id, phoneNumber },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    );
    res.status(200).json({ success, user, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* LOGIN USER */

export const login = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    //If user exists, send them an OTP
    const { referenceId } = await sendOtp(phoneNumber);
    res.status(200).json({ referenceId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
