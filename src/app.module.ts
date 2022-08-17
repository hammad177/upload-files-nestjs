import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChangeFileName, ImageFilter } from './utils/multer';

@Module({
  imports: [
    MulterModule.register({
      fileFilter: ImageFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: ChangeFileName,
      }),
      limits: {
        fileSize: 1024 * 1000 * 2,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
