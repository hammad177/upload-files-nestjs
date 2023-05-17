import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller('file-upload')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('image')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('avatar'))
  uploadImage(@UploadedFile() file: Express.Multer.File): string {
    return file.path;
  }

  @Post('images')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 4 }]))
  uploadImages(
    @UploadedFiles()
    files: {
      images?: Express.Multer.File[];
    },
  ): string[] {
    return files.images.map((val) => val.path);
  }
}
