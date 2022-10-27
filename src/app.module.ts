import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecondService } from './second.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SecondService],
})
export class AppModule {}
