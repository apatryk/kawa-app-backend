import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesModule } from 'coffee/coffees.module';
import { CommentsModule } from 'comment/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost'),
    CoffeesModule,
    CommentsModule,
  ],
})
export class AppModule {}
