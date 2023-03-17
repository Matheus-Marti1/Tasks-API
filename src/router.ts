import { Router } from 'express';
const router = Router();

import * as TasksController from './controllers/tasksController';
import * as TasksMiddleware from './middlewares/tasksMiddleware';

import { PrismaClient } from '@prisma/client';
import { createPokemon, deletePokemon, findAll, findById, updatePokemon } from './controllers/pokemonController';
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

export default router;
