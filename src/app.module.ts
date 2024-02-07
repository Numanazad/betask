import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://numan:Numanadmin%4023@projectcrud.yigem3s.mongodb.net/'),
    MongoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
