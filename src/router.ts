import { Router } from 'express';
const router = Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAll);
router.get('/tasks/:id', tasksController.getById);
router.post(
  '/tasks',
  tasksMiddleware.validateFieldTitle,
  tasksController.createTask,
);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put(
  '/tasks/:id',
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask,
);

export default router;
