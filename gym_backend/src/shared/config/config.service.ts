import * as fs from 'fs';
import * as path from 'path';
import { IPropsUtils } from './interfaces/utils.interface';

export class ConfigProvider {

  static getConfigs(): IPropsUtils {
    const conteudo = fs.readFileSync(
      `${path.join(__dirname, '../../../.env')}`,
      'utf8',
    );
    const instringaoTratado = [];
    const stringonaArray = conteudo.split('\n');
    stringonaArray.map((conteudo) => {
      instringaoTratado.push(conteudo.split('='));
    });
    const config = new Object();
    instringaoTratado.forEach((elemento) => {
      config[`${elemento[0]}`] = `${elemento[1]}`;
    });
    return config as IPropsUtils;
  }
}
