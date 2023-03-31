import { Router } from 'express';
const router = Router();

import * as TasksController from './controllers/tasksController';
import * as TasksMiddleware from './middlewares/tasksMiddleware';

import { PrismaClient } from '@prisma/client';
import { createPokemon, deletePokemon, findAll, findById, updatePokemon } from './controllers/pokemonController';
import { createPokemonType, deletePokemonType, findAllTypes, findTypeById, updatePokemonType } from './controllers/tipoController';
import { convert, importjson } from './controllers/importController'
const db = new PrismaClient();

router.get('/tasks', TasksController.getAll);
router.get('/tasks/:id', TasksController.getById);
router.post(
  '/tasks',
  TasksMiddleware.validateFieldTitle,
  TasksController.createTask,
);
router.delete('/tasks/:id', TasksController.deleteTask);
router.put(
  '/tasks/:id',
  TasksMiddleware.validateFieldTitle,
  TasksMiddleware.validateFieldStatus,
  TasksController.updateTask,
);

router.get('/pokemon/', findAll)
router.get('/pokemon/:id', findById)
router.post('/pokemon/', createPokemon)
router.delete('/pokemon/:id', deletePokemon)
router.put('/pokemon/:id', updatePokemon)

router.get('/pokemon-tipo/', findAllTypes)
router.get('/pokemon-tipo/:id', findTypeById)
router.post('/pokemon-tipo/', createPokemonType)
router.delete('/pokemon-tipo/:id', deletePokemonType)
router.put('/pokemon-tipo/:id', updatePokemonType)

router.get('/convert/', convert)
router.get('/importjson/', importjson)
export default router;
