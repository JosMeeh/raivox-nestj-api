import { supabase } from '../../app.module';

export class DatabaseMethods {


  async getNames():Promise<any> {
    const { data, error } = await supabase.from('names').select('*');

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
