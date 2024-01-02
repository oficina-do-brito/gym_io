import { IsNotEmpty, IsNumber } from "class-validator";

export class AddMuralDTO {
  @IsNotEmpty()
  @IsNumber()
  private readonly idMural: number;

  @IsNotEmpty()
  @IsNumber()
  private readonly idHorario: number;
}