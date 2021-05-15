import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

/**
 * field annotations:
 * required -> takes an object with required attribute
 * optional -> annotated with "?"
 *  */

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

// creates Schema based on our @Schema Class
export const TodoSchema = SchemaFactory.createForClass(Todo);
