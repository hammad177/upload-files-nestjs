import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

function ImageFilter(req: any, file: any, callback: any) {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(
      new BadRequestException('only accept file png,jpeg,jpg'),
      false,
    );
  }
  callback(null, true);
}

function ChangeFileName(req: any, file: any, callback: any) {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Math.floor(1000000 + Math.random() * 9000000);
  callback(null, `${name}-${randomName}${fileExtName}`);
}

export const MulterOption = {
  fileFilter: ImageFilter,
  storage: diskStorage({
    destination: './uploads',
    filename: ChangeFileName,
  }),
  limits: {
    fileSize: 1024 * 1000 * 2,
  },
};
