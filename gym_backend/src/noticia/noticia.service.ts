import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Noticia } from "./entities/noticia.entity";
import { Repository } from "typeorm";
import { CreateNoticiaDTO } from "./dtos/create.dto";
import { UpdateNoticiaDTO } from "./dtos/update.dto";
import { Usuario } from "src/usuario/entities/usuario.entity";

@Injectable()
export class NoticiaService {
  constructor(
    @InjectRepository(Noticia)
    private readonly noticiaRepository: Repository<Noticia>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  /**
   * @description In this method, it is checked whether the user administrator exists, then an instance of news is created, allocated memory
   * for it in the administrator and finally saved in the database;
   *
   *
   * @param id is the ID of the administrator who created the news;
   * @param createNoticiaDTO is a data transfer object with news information;
   * @returns A message registered in case of success;
   */
  async create(
    id: number,
    createNoticiaDTO: CreateNoticiaDTO,
  ): Promise<Noticia> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (usuario) {
      const noticiaNova: Noticia = new Noticia();
      noticiaNova.titulo = createNoticiaDTO["titulo"];
      noticiaNova.descricao = createNoticiaDTO["descricao"];
      noticiaNova.nomeAutor = createNoticiaDTO["nomeAutor"];

      if (!usuario.noticias) {
        usuario.noticias = [];
      } else if (usuario.tipoUsuario === "admin") {
        usuario.addNoticia(noticiaNova);
        this.usuarioRepository.create({ ...usuario });
        this.usuarioRepository.save(usuario);

        const noticia = this.noticiaRepository.create({
          ...createNoticiaDTO,
          admin: usuario,
        });
        return await this.noticiaRepository.save(noticia);
      } else {
        throw new NotFoundException(
          `Usuario with this ID ${id} not an administrator`,
        );
      }
    }
    throw new NotFoundException(`Admin ID ${id} not found`);
  }

  async findAll(): Promise<Array<Noticia>> {
    return await this.noticiaRepository.find();
  }

  async findOne(id: number): Promise<Noticia | void> {
    const buscada: Noticia = await this.noticiaRepository.findOne({
      where: { id },
    });
    if (buscada) {
      return buscada;
    }
    throw new NotFoundException(`Noticia ID ${id} not found`);
  }

  async update(
    id: number,
    updateNoticiaDTO: UpdateNoticiaDTO,
  ): Promise<Noticia | null> {
    const noticia = await this.noticiaRepository.findOne({ where: { id } });
    if (noticia) {
      const linhasAfetas = await this.noticiaRepository.update(
        id,
        updateNoticiaDTO,
      );
      return linhasAfetas ? (updateNoticiaDTO as Noticia) : null;
    }
    throw new NotFoundException(`Noticia ID ${id} not found`);
    return null;
  }

  async remove(id: number): Promise<void> {
    const noticia = await this.noticiaRepository.findOne({
      where: { id },
    });
    if (!noticia) {
      throw new NotFoundException(`noticia ID ${id} not found`);
    }
    this.noticiaRepository.remove(noticia);
  }
}
