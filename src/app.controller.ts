import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  getHello(@UploadedFile() file: Express.Multer.File): string {
    console.log('file', file);
    return 'file uploaded, please check uploads folder in the root directory';
  }
}
