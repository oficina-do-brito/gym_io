import { Module } from '@nestjs/common';
import { MuralService } from './mural.service';
import { MuralController } from './mural.controller';
import { Mural } from './entities/mural.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioService } from 'src/horario/horario.service';
import { Horario } from 'src/horario/entities/horario.entity';
import { HorarioModule } from 'src/horario/horario.module';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports:[TypeOrmModule.forFeature([Mural,Horario]), HorarioModule, UsuarioModule],
  providers: [MuralService, HorarioService, UsuarioService],
  controllers: [MuralController],
  exports:[TypeOrmModule]
})
export class MuralModule {}
