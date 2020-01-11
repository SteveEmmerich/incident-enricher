import { promises } from 'fs';
import * as path from 'path';

// TODO: Make this an ENV var
const dataLocation = `${path.join(__dirname, '../../data')}`;

const { readdir, readFile } = promises;

// TODO: break this into smaller functions
export const initData = async () => {
  try {
    const files = await readdir(dataLocation);
    const data = await Promise.all(
      files.map(
        async file =>
          await readFile(`${path.join(dataLocation, file)}`, 'utf-8')
      )
    );
    const parsedData = data.map(incident => JSON.parse(incident));
    return parsedData;
  } catch (e) {
    console.log(` Error ${e} During data load`);
  }
};
