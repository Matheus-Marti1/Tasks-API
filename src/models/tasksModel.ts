import connection from './connection';

// Tipagem da model, igual ao banco
interface TaskModelEntity {
  title: string;
  status: string;
  created_at: Date;
}

// tipagem do seu input de create
interface TaskCreateInput {
  title: string;
}

// Outro jeito de tipar um pouco mais avançado, mas bem declarativo
type TaskUpdateInput = Omit<TaskModelEntity, 'created_at'>;

export const getAll = async (): Promise<TaskModelEntity[]> => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return tasks;
};

export const getById = async (id: number): Promise<TaskModelEntity> => {
  const [tasks] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [
    id,
  ]);
  return tasks[0];
};

export const createTask = async (
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return { insertId: createdTask.insertId };
};

export const deleteTask = async (id: number): Promise<TaskModelEntity> => {
  const [removedTask] = await connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [id],
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return removedTask;
};

export const updateTask = async (
  id: number,
  task: TaskUpdateInput,
): Promise<TaskModelEntity> => {
  const { title, status } = task;

  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return updatedTask;
};
