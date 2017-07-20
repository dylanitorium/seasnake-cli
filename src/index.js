import { readFileSync } from 'fs';
import path from 'path';
import commander from 'commander';
import Seasnake from 'seasnake';

const getVersionFromPackage = () => {
  return JSON.parse(readFileSync(path.resolve(__dirname, 'package.json'))).version;
};

commander
  .version(getVersionFromPackage())
  .usage('[options] [volume] [file]')
  .option('-e, --export', 'Export a .tar from a volume [default[')
  .option('-i, --import', 'Restore a .tar to a volume')
  .action((volume, file) => {
    const seasnake = new Seasnake(volume);

    const {
      e,
      i
    } = commander;

    if (i) {
      seasnake.import(file);
    } else {
      seasnake.export(file);
    }
  })
  .parse(process.argv);
