import { Injectable, NotFoundException} from "@nestjs/common";
import { CreateHorarioDTO } from "./dtos/create.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Horario } from "./entities/horario.entity";
import { UpdateHorarioDTO } from "./dtos/update.dto";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class HorarioService {
  constructor(
    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>,
    private readonly usuarioService: UsuarioService,
  ) {}

  async create(id:number ,createHorarioDTO: CreateHorarioDTO): Promise<Horario> {
    const usuario = await this.usuarioService.getById(id);
    const horario = await this.horarioRepository.create({ ...createHorarioDTO, usuario});
    return await this.horarioRepository.save(horario);
  }

  async findAll(): Promise<Array<Horario>> {
    return await this.horarioRepository.find();
  }

  async findOne(id: number): Promise<Horario | void> {
    return this.horarioRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateHorarioDTO: UpdateHorarioDTO,
  ): Promise<Horario | null> {
    const horario = await this.horarioRepository.findOne({
      where: { id },
    });
    if (horario) {
      const linhasAfetas = await this.horarioRepository.update(
        id,
        updateHorarioDTO,
      );
      return linhasAfetas ? (updateHorarioDTO as Horario) : null;
    }
    throw new NotFoundException(`Horario ID ${id} not found`);
    return null;
  }

  async remove(id: number): Promise<void> {
    const horario = await this.horarioRepository.findOne({
      where: { id },
    });
    if (!horario) {
      throw new NotFoundException(`Horario ID ${id} not found`);
    }
    this.horarioRepository.remove(horario);
  }
}
