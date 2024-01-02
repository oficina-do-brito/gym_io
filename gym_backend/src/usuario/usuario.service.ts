import { Injectable, NotFoundException } from "@nestjs/common";
import { Usuario } from "./entities/usuario.entity";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUsuarionDTO } from "./dtos/create.dto";
import { Noticia } from "src/noticia/entities/noticia.entity";
import { UpdateUsuarioDTO } from "./dtos/update.dto";
@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Noticia)
    private readonly noticiaRepository: Repository<Noticia>,
  ) {}

  async hashCompare(pass: string, user: Usuario): Promise<boolean> {
    const array = user.password.split("_");
    const hash = array[1];
    return await bcrypt.compare(pass, hash);
  }

  async create(createusuarioDTO: CreateUsuarionDTO) {
    const user = await this.usuarioRepository.create({
      ...createusuarioDTO,
      nNoticiasCadastradas: 0,
      nHorariosAceitos: 0,
      nHorariosRegeitados: 0,
      noticias: null,
      horarios: null,
    });
    return await this.usuarioRepository.save(user);
  }

  async buscarUsuarioPorEmail(email: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { email } });
    if(!usuario){
      throw new NotFoundException(`usuario email ${email} not found`);
    }
    return usuario;
  }
  async buscarTodos() {
    return await this.usuarioRepository.find();
  }

  async getNoticiasByAdmin(id: number): Promise<Noticia[] | void> {
    return await this.noticiaRepository.find({ where: { id } });
  }

  async update(
    id: number,
    updateUsuarioDTO: UpdateUsuarioDTO,
  ): Promise<Usuario | null> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (usuario) {
      const linhasAfetas = await this.noticiaRepository.update(
        id,
        updateUsuarioDTO,
      );
      return linhasAfetas ? (updateUsuarioDTO as Usuario) : null;
    }
    throw new NotFoundException(`usuario ID ${id} not found`);
    return null;
  }

  async getById(id: number) {
    return this.usuarioRepository.findOne({ where: { id } });
  }
}
