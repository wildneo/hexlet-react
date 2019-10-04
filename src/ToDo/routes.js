const host = 'https://web-js-react-component-lifecycle-1242431.evaluator1-1.hexlet.io';

export default {
  tasksPath: () => [host, 'tasks'].join('/'), // get tasks list
  taskPath: (id) => [host, 'tasks', id].join('/'),
  finishTaskPath: (id) => [host, 'tasks', id, 'finish'].join('/'),
  activateTaskPath: (id) => [host, 'tasks', id, 'activate'].join('/'),
};
