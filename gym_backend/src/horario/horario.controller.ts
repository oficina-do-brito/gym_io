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
import { CreateHorarioDTO } from "./dtos/create.dto";
import { UpdateHorarioDTO } from "./dtos/update.dto";
import { HorarioService } from "./horario.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("horarios")
export class HorarioController {
  constructor(private readonly horarioService: HorarioService) {}

  @Post(":id")
  @UseGuards(AuthGuard("jwt"))
  async create(
    @Param("id", ParseIntPipe) id: number,
    @Body() createHorarioDTO: CreateHorarioDTO,
  ) {
    return await this.horarioService.create(id, createHorarioDTO);
  }

  @Get()
  async findAll() {
    return await this.horarioService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.horarioService.findOne(id);
  }

  @Put(":id")
  @UseGuards(AuthGuard("jwt"))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateHorarioDTO,
  ) {
    return await this.horarioService.update(id, updateUsuarioDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  async remove(@Param("id", ParseIntPipe) id: number) {
    return await this.horarioService.remove(id);
  }
}
