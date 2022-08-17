import { BadRequestException } from '@nestjs/common';
import { extname } from 'path';

export function ImageFilter(req: any, file: any, callback: any) {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(
      new BadRequestException('only accept file png,jpeg,jpg'),
      false,
    );
  }
  callback(null, true);
}

export function ChangeFileName(req: any, file: any, callback: any) {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(8)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
}
