import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterOption } from './utils/multer';

@Module({
  imports: [MulterModule.register(MulterOption)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
