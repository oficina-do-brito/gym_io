import { PartialType } from "@nestjs/swagger";
import { CreateUsuarionDTO } from "./create.dto";

export class UpdateUsuarioDTO extends PartialType(CreateUsuarionDTO){}