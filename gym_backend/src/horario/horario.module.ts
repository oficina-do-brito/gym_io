import { Module } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioController } from './horario.controller';
import { Horario } from './entities/horario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports:[ TypeOrmModule.forFeature([Horario, Usuario]),UsuarioModule],
  providers: [HorarioService,UsuarioService],
  controllers: [HorarioController],
  exports:[TypeOrmModule,HorarioService]
})
export class HorarioModule {}
