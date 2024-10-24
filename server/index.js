import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import authRoutes from './routes/auth.js';
import { confirmOtp, register } from './controllers/auth.js';

/** MIDDLEWARE AND PACKAGE CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

/** FILE STORAGE CONFIGURATIONS */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { phoneNumber } = req.body;
    const picturePath = `public/assets/${phoneNumber}/`;
    if (!fs.existsSync(picturePath)) {
      fs.mkdirSync(picturePath);
    }
    cb(null, picturePath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//* ROUTES WITH FILES */
app.post('/auth/register', upload.single('picture'), register);
app.use('/auth', authRoutes);

//Testing auth
app.post('/auth/verify', confirmOtp);

//** MONGOOSE CONFIGURATIONS */
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5001;
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} - did not connect`));
