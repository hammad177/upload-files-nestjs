import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ImageUploadInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    try {
      // console.log('context', context);
    } catch (error) {
      console.log('error', error);
    }
    // return;
    // throw new BadRequestException('sai file upload kr');
    return next.handle();
  }
}
