import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsNotEmpty,
  IsString,
} from "class-validator";

export class CreateUsuarionDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  private readonly nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  private readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  private readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  private readonly status: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  private readonly dataNascimento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  private readonly tipoUsuario:string;
}
