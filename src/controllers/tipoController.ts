import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export const findAllTypes = async (_request, response) => {
  try {
    const tipos = await prisma.tipo.findMany();

    return response.status(200).json(tipos);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};

export const findTypeById = async (request, response) => {
  const { id } = request.params;

  try {
    const tipos = await prisma.tipo.findFirst({
      where: {
        id: +id,
      },
    });
    return response.status(200).json(tipos);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};

export const createPokemonType = async (request, response) => {
  try {
    const { name, Fraquezas } = request.body;

    const tipos = await prisma.tipo.create({
      data: {
        name,
        Fraquezas,
      },
    });

    return response.status(201).json(tipos);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};

export const deletePokemonType = async (request, response) => {
  const { id } = request.params;
  try {
    const tipos = await prisma.tipo.delete({
      where: {
        id: +id,
      },
    });
    return response.status(204).json(tipos);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};

export const updatePokemonType = async (request, response) => {
  const { id } = request.params;
  try {
    const tipos = await prisma.tipo.update({
      where: {
        id: +id,
      },
      data: {
        name: request.body.name,
        Fraquezas: request.body.Fraquezas,
      },
    });
    return response.status(204).json(tipos);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};
