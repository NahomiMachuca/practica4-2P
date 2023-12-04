import { PartialType } from '@nestjs/mapped-types';
import { CreateCitaDto } from './create-cita.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCitaDto extends PartialType(CreateCitaDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_cita?: string;
}
