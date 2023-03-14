import * as tasksModel from '../models/tasksModel';

const getAll = async (_request, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

const getById = async (request, response) => {
  const { id } = request.params;

  const tasks = await tasksModel.getById(id);
  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
};
