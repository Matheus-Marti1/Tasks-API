const connection = require('./connection');

// Tipagem da model, igual ao banco
interface TasksModel {
  title: string;
  status: string;
  created_at: Date;
}

// tipagem do seu input de create
interface TaskCreateInput {
  title: string;
}

// Outro jeito de tipar um pouco mais avançado mas bem declarativo
type TaskUpdateInput = Omit<TasksModel, 'created_at'>;

const getAll = async (): Promise<TasksModel[]> => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const getById = async (id: number): Promise<TasksModel> => {
  const [tasks] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [
    id,
  ]);
  return tasks[0];
};

const createTask = async (
  task: TaskCreateInput,
): Promise<{ insertId: number }> => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

  const [createdTask] = await connection.execute(query, [
    title,
    'pendente',
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id: number): Promise<TasksModel> => {
  const [removedTask] = await connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [id],
  );
  return removedTask;
};

const updateTask = async (
  id: number,
  task: TaskUpdateInput,
): Promise<TasksModel> => {
  const { title, status } = task;

  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
};
