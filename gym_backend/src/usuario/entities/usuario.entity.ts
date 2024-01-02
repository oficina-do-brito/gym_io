import { Horario } from "src/horario/entities/horario.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { Noticia } from "src/noticia/entities/noticia.entity";

@Entity("tb_usuarios")
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: string;

  @Column()
  dataNascimento: Date;

  @Column()
  nNoticiasCadastradas: number;

  @Column()
  nHorariosAceitos: number;

  @Column()
  nHorariosRegeitados: number;

  @Column()
  tipoUsuario: string;

  @OneToMany(() => Noticia, (noticia) => noticia.admin,{eager:true})
  noticias: Array<Noticia>;

  @OneToMany(() => Horario, (horario) => horario.usuario,{eager:true})
  horarios: Horario[];

  addNoticia(n:Noticia):void{
    this.noticias.push(n)
  }

  addHorario(h:Horario):void{
    this.horarios.push(h)
  }

  @BeforeInsert()
  async hashPassword() {
      const saltOrRounds: number = 12;
      const password: string =  "çÇÇç";
      const hash = await bcrypt.hash(this.password, saltOrRounds);
      this.password =  password.concat("_",hash);
  }
}
