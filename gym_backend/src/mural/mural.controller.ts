import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { MuralService } from "./mural.service";
import { CreateMuralDTO } from "./dtos/create.dto";
import { UpdateMuralDTO } from "./dtos/update.dto";
import { AuthGuard } from "@nestjs/passport";
import { AddMuralDTO } from "./dtos/addmural.dto";

@Controller("murais")
export class MuralController {
  constructor(private readonly muralService: MuralService) {}
  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Body() createMuralDTO: CreateMuralDTO) {
    return await this.muralService.create(createMuralDTO);
  }

  @Get()
  async findAll() {
    return await this.muralService.findAll();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.muralService.findOne(id);
  }

  @Put(":id")
  @UseGuards(AuthGuard("jwt"))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateMuralDTO: UpdateMuralDTO,
  ) {
    return await this.muralService.update(id, updateMuralDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard("jwt"))
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return await this.muralService.delete(id);
  }
  
  @UseGuards(AuthGuard("jwt"))
  @Post('horarios')
  async addHorarioInMural(@Body() addMuralDTO: AddMuralDTO) {
    return await this.muralService.addHorarioInMural(addMuralDTO);
  }
}
