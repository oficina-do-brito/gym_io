import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Mural } from "./entities/mural.entity";
import { CreateMuralDTO } from "./dtos/create.dto";
import { UpdateMuralDTO } from "./dtos/update.dto";
import { HorarioService } from "src/horario/horario.service";
import { AddMuralDTO } from "./dtos/addmural.dto";
import { Repository } from "typeorm";

@Injectable()
export class MuralService {
  constructor(
    @InjectRepository(Mural)
    private readonly muralRepository: Repository<Mural>,
    private readonly horarioService: HorarioService,
  ) {}
  //TODO: mural deve ter horarios 7 , 8, 9, 10, vai de 13, 14, 15, 16, 17 vai de 19, 20, 21
  async addHorarioInMural(addMuralDTO: AddMuralDTO) {
    const id_mural: number = addMuralDTO["idMural"];
    const id_horario: number = addMuralDTO["idHorario"];
    const mural = await this.muralRepository.findOne({
      where: { id: id_mural },
      relations: {
        horarios: true,
      },
    });

    const horario = await this.horarioService.findOne(id_horario);
    if (horario) {
      if (!mural.horarios) {
        mural.horarios = [];
      }
      mural.horarios.push(horario);
    }

    await this.muralRepository.save(mural);
    return horario;
  }

  async create(createMuralDTO: CreateMuralDTO) {
    const mural = await this.muralRepository.create({ ...createMuralDTO });
    return await this.muralRepository.save(mural);
  }

  async getById(id: number) {
    const mural = await this.muralRepository.findOne({ where: { id } });
    if (!mural) {
      throw new NotFoundException(`mural ID ${id} not found`);
    }
    return mural;
  }

  async delete(id: number) {
    const mural = await this.muralRepository.findOne({ where: { id } });
    if (!mural) {
      throw new NotFoundException(`mural ID ${id} not found`);
    }
    this.muralRepository.remove(mural);
  }

  async update(id: number, updateMuralDTO: UpdateMuralDTO) {
    const mural = await this.muralRepository.findOne({ where: { id } });
    if (mural) {
      const linhasAfetas = await this.muralRepository.update(
        id,
        updateMuralDTO,
      );
      return linhasAfetas ? (updateMuralDTO as Mural) : null;
    }
    throw new NotFoundException(`mural ID ${id} not found`);
  }
  async findOne(id: number) {
    const mural = await this.muralRepository.findOne({ where: { id } });
    if (!mural) {
      throw new NotFoundException(`mural ID ${id} not found`);
    }
    return mural;
  }
  async findAll() {
    return this.muralRepository.find();
  }
}
