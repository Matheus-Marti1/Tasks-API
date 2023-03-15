import { Router } from 'express';
const router = Router();

import * as TasksController from './controllers/tasksController';
import * as TasksMiddleware from './middlewares/tasksMiddleware';

import { PrismaClient } from '@prisma/client';
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

router.post('/pokemon', async (req, res) => {
  const savedPokemon = await db.pokemon.create({
    data: req.body,
  });

  return res.status(201).json(savedPokemon);
});

export default router;
