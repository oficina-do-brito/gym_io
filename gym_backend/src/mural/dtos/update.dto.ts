import { PartialType } from '@nestjs/mapped-types';
import { CreateMuralDTO } from "./create.dto";

export class UpdateMuralDTO extends PartialType(CreateMuralDTO){}