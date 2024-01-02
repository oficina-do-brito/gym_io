import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Horario } from "src/horario/entities/horario.entity";
import { Mural } from "src/mural/entities/mural.entity";
import { Noticia } from "src/noticia/entities/noticia.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { DataSourceOptions } from "typeorm";
import { ConfigProvider } from "../config/config.service";

const config = ConfigProvider.getConfigs();
export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: config.DB_HOST,
  port: parseInt(config.DB_PORT,10),
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  entities: [Usuario, Noticia, Horario, Mural],
  synchronize: true,
};
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return { ...dataSourceOptions };
      },
    }),
  ],
  exports: [],
})
export class DatabaseModule {}
