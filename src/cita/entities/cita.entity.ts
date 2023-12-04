import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Cita {
  @Field()
  @Prop({ required: true })
  id_veterinario: string;

  @Field()
  @Prop({ required: true })
  id_cliente: string;

  @Field()
  @Prop({ required: true })
  fecha_programada: string;

  @Field()
  @Prop({ required: true })
  active: boolean;
  default = true

}

export const CitaSchema = SchemaFactory.createForClass(Cita);

export type CitaDocument = Cita & Document;
export const CitaModel = mongoose.model<CitaDocument>(
  'citas',
  CitaSchema,
);
