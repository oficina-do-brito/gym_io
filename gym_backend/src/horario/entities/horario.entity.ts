import { Mural } from "src/mural/entities/mural.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tb_horarrios')
export class Horario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dia: string

    @Column()
    horario:string;

    @Column()
    turno:string;

    @Column()
    nomeEquipe:string;

    @Column()
    responsavelEquipe:string;

    @ManyToOne(()=>Usuario,usuario=>usuario.horarios)
    usuario:Usuario;

    @ManyToOne(()=>Mural, mural=> mural.horarios)
    mural:Mural;

    @CreateDateColumn({name: 'created_At'})
    createdAt:Date

    @UpdateDateColumn({name: 'updated_At'})
    updatedAt:Date
}