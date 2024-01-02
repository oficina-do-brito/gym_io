import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateHorarioDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  private readonly dia: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  private readonly horario: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  private readonly turno: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  private readonly nomeEquipe: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  private readonly responsavelEquipe: string;
}
