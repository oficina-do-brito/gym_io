import { Module, forwardRef } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { Noticia } from "src/noticia/entities/noticia.entity";
import { NoticiaModule } from "src/noticia/noticia.module";
import { NoticiaService } from "src/noticia/noticia.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Noticia]),
    forwardRef(() => NoticiaModule),
  ],
  providers: [UsuarioService, NoticiaService],
  controllers: [UsuarioController],
  exports: [TypeOrmModule,UsuarioService],
})
export class UsuarioModule {}
