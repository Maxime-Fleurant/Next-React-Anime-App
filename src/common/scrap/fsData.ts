import { promises as fs } from 'fs';
import path from 'path';
import { Anime } from '../api/anime';

export class DataFs {
  private el!: Anime[];

  getData = async () => {
    if (this.el) {
      return this.el;
    }

    const dataFile = await fs.readFile(path.join(process.cwd(), 'scrap/data.json'));

    this.el = JSON.parse((await dataFile).toString());
    return this.el;
  };
}

const dataFs = new DataFs();

export default dataFs;
