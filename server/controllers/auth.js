import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Status from '../models/Status.js';
import Role from '../models/Role.js';

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
    res.status(500).json({ message: error.message });
  }
};
