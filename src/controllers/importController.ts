import * as XLSX from 'xlsx';
import * as fs from 'fs-extra';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export const convert = async (_request, response) => {
  const buffer = await fs.readFile('Pokemon Go.xlsx');
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  //console.log(buffer)
  const sheetName = workbook.SheetNames[0];
  //console.log(workbook)
  const sheet = workbook.Sheets[sheetName];
  //console.log(sheet)
  const data = XLSX.utils.sheet_to_json(sheet, { raw: false });
  //console.log(data)
  await fs.writeFile('Pokemon Go.json', JSON.stringify(data));
  return response.status(200).json();
};

export const importjson = async (_request, response) => {
  const errors = [];
  const importjs: any[] = require('../../Pokemon Go.json');
  for (var i = 0; i < importjs.length; i++) {
    try {
      const pokemon = await prisma.pokemon.create({
        data: {
          name: importjs[i].Name,
          imagem: importjs[i]['Img name'],
          desc: importjs[i]['Pokedex Number'],
          altura: importjs[i].Spawns,
          peso: importjs[i].Regional,
          genero: importjs[i].Hatchable,
          Tipo: `${importjs[i]['Type 1']} e ${importjs[i]['Type 2']}`,
          Fraquezas: importjs[i]['Weather 1'],
          Status: importjs[i]['STAT TOTAL'],
        },
      });
    } catch (err) {
      console.log(err);
      errors.push(err);
    }
  }
  return response.status(201).json();
};
