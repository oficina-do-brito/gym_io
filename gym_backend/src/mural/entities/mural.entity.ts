import { Horario } from "src/horario/entities/horario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_murals")
export class Mural {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  status: string;

  @OneToMany(() => Horario, (horario) => horario.mural, {
    eager: true,
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  horarios: Horario[];
}
