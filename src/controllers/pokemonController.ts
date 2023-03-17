import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export const findAll = async (request, response) => {
  const { nome, tipo } = request.query;

  const pokemon = await prisma.pokemon.findMany({
    where: {
      OR: [
        {
          name: {
            contains: nome || '',
          },
        },
        {
          tipo: {
            some: {
              tipo: {
                name: {
                  contains: tipo || '',
                },
              },
            },
          },
        },
      ],
    },
    include: {
      tipo: {
        include: {
          tipo: true,
        },
      },
    },
  });

  return response.status(200).json(pokemon);
};

export const findById = async (request, response) => {
  const { id } = request.params;

  const pokemon = await prisma.pokemon.findFirst({
    where: {
      id: +id,
    },
    include: {
      tipo: {
        include: {
          tipo: true,
        },
      },
    },
  });
  return response.status(200).json(pokemon);
};

export const createPokemon = async (request, response) => {
  try {
    const {
      name,
      imagem,
      desc,
      altura,
      peso,
      genero,
      Tipo,
      Fraquezas,
      Status,
    } = request.body;

    const pokemon = await prisma.pokemon.create({
      data: {
        name,
        imagem,
        desc,
        altura,
        peso,
        genero,
        Tipo,
        Fraquezas,
        Status,
      },
    });

    return response.status(201).json(pokemon);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};

export const deletePokemon = async (request, response) => {
  const { id } = request.params;
  try {
    const pokemon = await prisma.pokemon.delete({
      where: {
        id: +id,
      },
    });
    return response.status(204).json(pokemon);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};

export const updatePokemon = async (request, response) => {
  const { id } = request.params;
  try {
    const pokemon = await prisma.pokemon.update({
      where: {
        id: +id,
      },
      data: {
        name: request.body.name,
        imagem: request.body.imagem,
        desc: request.body.desc,
        altura: request.body.altura,
        peso: request.body.peso,
        genero: request.body.genero,
        Tipo: request.body.Tipo,
        Fraquezas: request.body.Fraquezas,
        Status: request.body.Status,
      },
    });
    return response.status(204).json(pokemon);
  } catch (err) {
    console.log(err);
    return response.status(500).json(err);
  }
};
