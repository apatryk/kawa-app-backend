import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  id: number;

  @Prop()
  coffeeId: string;

  @Prop()
  comment: string;

  @Prop()
  rate: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
