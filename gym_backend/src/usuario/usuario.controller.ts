import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
  UseGuards,
} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { AuthGuard } from "@nestjs/passport";
import { CreateUsuarionDTO } from "./dtos/create.dto";
import { UpdateUsuarioDTO } from "./dtos/update.dto";

@Controller("usuarios")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createusuarioDTO: CreateUsuarionDTO) {
    return await this.usuarioService.create(createusuarioDTO);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  async getAllUsers() {
    return await this.usuarioService.buscarTodos();
  }

  @Get(":id/noticias")
  @UseGuards(AuthGuard("jwt"))
  async getNoticiasByAdmin(@Param("id", ParseIntPipe) id: number) {
    return await this.usuarioService.getNoticiasByAdmin(id);
  }
  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  async getOneUsuario(@Param("id", ParseIntPipe) id: number) {
    return await this.usuarioService.getById(id);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("/find-for-email")
  async buscarPorEmail(@Body() body,@Res() response) {
    const {email} = body;
    const usuario = await this.usuarioService.buscarUsuarioPorEmail(email);
    return response.status(200).send(usuario);
  }

  @Put(":id")
  @UseGuards(AuthGuard("jwt"))
  async updateUsuario(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUsuarioDTO: UpdateUsuarioDTO,
  ) {
    return await this.usuarioService.update(id, updateUsuarioDTO);
  }
}
