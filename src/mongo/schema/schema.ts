import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: "Item"})
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  length: number;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  qty: number;

  @Prop({ required: true })
  stackable: boolean;

  @Prop({ required: true })
  tiltable: boolean;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
