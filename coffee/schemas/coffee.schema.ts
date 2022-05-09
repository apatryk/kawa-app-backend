import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoffeeDocument = Coffee & Document;

@Schema()
export class Coffee {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  roastery: string;

  @Prop()
  origin: string;

  @Prop()
  method: string;

  @Prop()
  roast: string;

  @Prop()
  type: string;

  @Prop()
  species: number;

  @Prop()
  destination: Array<String>;
}

const CoffeeSchema = SchemaFactory.createForClass(Coffee);
CoffeeSchema.index({ name: 'text' });
export { CoffeeSchema };
