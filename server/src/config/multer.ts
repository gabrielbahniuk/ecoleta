require('dotenv').config();
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { Request } from 'express';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');
      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    }
  }),
  limits: { fileSize: Number(process.env.API_MAX_UPLOAD_FILESIZE_MB) * 1024 * 1024 },
  fileFilter: function (req: Request, file: Express.Multer.File, cb:any) {
    const allowedMimeTypes = ['.jpg', '.jpeg', '.png','image/png','image/jpg','image/jpeg'];
    const fileMimetype = file.mimetype;
    if (!fileMimetype) {
      return cb(new Error(`The mimetype cannot be empty.`), false);
    }
    if (allowedMimeTypes.indexOf(fileMimetype) === -1) {
      return cb(new Error(`The mimetype ${fileMimetype} is not accepted.`), false);
    }
    cb(null, true)
  }
}
