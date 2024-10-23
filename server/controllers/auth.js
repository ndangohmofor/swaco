import User from '../models/User.js';
import { sendOtp } from '../util/send-sms.js';

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

    const savedUser = await newUser.save();

    res.status(201).json({ referenceId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
