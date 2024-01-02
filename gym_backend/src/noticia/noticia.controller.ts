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
import { NoticiaService } from "./noticia.service";
import { CreateNoticiaDTO } from "./dtos/create.dto";
import { UpdateNoticiaDTO } from "./dtos/update.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("noticias")
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @Post(":id")
  @UseGuards(AuthGuard("jwt"))
  async create(
    @Param("id", ParseIntPipe) id: number,
    @Body() createNoticiaDTO: CreateNoticiaDTO,
  ) {
    return await this.noticiaService.create(id, createNoticiaDTO);
  }

  @Get()
  async findAll() {
    return await this.noticiaService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.noticiaService.findOne(id);
  }

  @Put(":id")
  @UseGuards(AuthGuard("jwt"))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateNoticiaDTO: UpdateNoticiaDTO,
  ) {
    return await this.noticiaService.update(id, updateNoticiaDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  async remove(@Param("id", ParseIntPipe) id: number) {
    return await this.noticiaService.remove(id);
  }
}
