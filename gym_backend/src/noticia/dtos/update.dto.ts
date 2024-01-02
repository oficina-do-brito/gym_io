import { PartialType } from "@nestjs/swagger";
import { CreateNoticiaDTO } from "./create.dto";

export class UpdateNoticiaDTO extends PartialType(CreateNoticiaDTO){}