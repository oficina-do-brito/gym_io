import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "src/usuario/usuario.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigProvider } from "../config/config.service";
import { LocalStrategy } from "./strategy/local";
import { JwtStrategy } from "./strategy/jwt";

const config = ConfigProvider.getConfigs();
@Module({
    imports: [
        PassportModule,
        UsuarioModule,
        JwtModule.register({secret: config.SECRET_KEY, signOptions: {expiresIn: '6000s'}}),
    ],
    controllers: [AuthController],
    providers: [AuthService, ConfigProvider, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
