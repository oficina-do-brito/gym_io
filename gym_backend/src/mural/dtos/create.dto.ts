import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMuralDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  private readonly nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  private readonly status: string;
}
