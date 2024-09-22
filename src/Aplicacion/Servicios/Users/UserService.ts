import { Injectable } from '@nestjs/common';
import { DatabaseMethods } from '../../../Infraestructura/Base de datos/DatabaseMethods'; // Asegúrate de importar correctamente

@Injectable()
export class UserService {
  async getNames():Promise<any> {
    const supabaseDB = new DatabaseMethods();
    return supabaseDB.getNames();
  }
}