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
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: function (req: Request, file: Express.Multer.File, cb:any) {  
    const allowedMimeTypes = ['.jpg', '.jpeg', '.png','image/png','image/jpg','image/jpeg'];    
    const fileExtension = path.extname(file.originalname).toLowerCase();        
    if (allowedMimeTypes.indexOf(fileExtension) === -1) {      
      return cb(new Error(`The file extension ${fileExtension} is not accepted.`), false)
    }
    cb(null, true)    
  }
}