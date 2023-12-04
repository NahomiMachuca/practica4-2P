import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCitaDto {
  @IsString()
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  id_veterinario: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_cliente: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fecha_programada: string;
}
