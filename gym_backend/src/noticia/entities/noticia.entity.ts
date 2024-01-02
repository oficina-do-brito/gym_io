import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_noticias')
export class Noticia{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo:string;

    @Column()
    descricao:string;

    @Column()
    nomeAutor:string;

    @ManyToOne(()=>Usuario, admin=> admin.noticias)
    admin: Usuario;

}