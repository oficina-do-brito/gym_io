import { Module } from "@nestjs/common";
import { UsuarioModule } from "./usuario/usuario.module";
import { MuralModule } from "./mural/mural.module";
import { HorarioModule } from "./horario/horario.module";
import { NoticiaModule } from "./noticia/noticia.module";
import { DatabaseModule } from "./shared/database/database.module";
import { AuthModule } from "./shared/auth/auth.module";

@Module({
    imports: [
        DatabaseModule,
        UsuarioModule,
        MuralModule,
        HorarioModule,
        NoticiaModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class AppModule {}
