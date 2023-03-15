import * as tasksModel from '../models/tasksModel';

export const getAll = async (_request, res) => {
  const tasks = await tasksModel.getAll();
  return res.status(200).json(tasks);
};

export const getById = async (request, response) => {
  const { id } = request.params;

  const tasks = await tasksModel.getById(id);
  return response.status(200).json(tasks);
};

export const createTask = async (request, response) => {
  try {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
  } catch (err) {
    return response.status(500).json(err);
  }
};

export const deleteTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.deleteTask(id);
  return response.status(204).json();
};

export const updateTask = async (request, response) => {
  const { id } = request.params;

  await tasksModel.updateTask(id, request.body);
  return response.status(204).json();
};
