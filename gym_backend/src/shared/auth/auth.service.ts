import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { UsuarioService } from "src/usuario/usuario.service";
import { CreateAuthDto } from "./dto/create-auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string) {
    const user = await this.userService.buscarUsuarioPorEmail(email);
    if (user && this.userService.hashCompare(pass, user)) {
      return user;
    }
    return null;
  }

  async login(user: Usuario) {
    const userAutenticado = new CreateAuthDto(
      user.id,
      user.nome,
      user.email,
      user.status,
      user.dataNascimento,
    );
    const payload = { sub: user.id, email: user.email };
    return await { token: this.jwtService.sign(payload), userAutenticado };
  }
}
