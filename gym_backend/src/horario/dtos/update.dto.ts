import { PartialType } from '@nestjs/mapped-types';
import { CreateHorarioDTO } from "./create.dto";

export class UpdateHorarioDTO extends PartialType(CreateHorarioDTO){}