import { Module, forwardRef } from "@nestjs/common";
import { NoticiaService } from "./noticia.service";
import { NoticiaController } from "./noticia.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Noticia } from "./entities/noticia.entity";
import { UsuarioModule } from "src/usuario/usuario.module";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { UsuarioService } from "src/usuario/usuario.service";

@Module({
  imports: [TypeOrmModule.forFeature([Noticia, Usuario]), forwardRef(() =>UsuarioModule)],
  providers: [NoticiaService, UsuarioService],
  controllers: [NoticiaController],
  exports:[TypeOrmModule]
})
export class NoticiaModule {}
