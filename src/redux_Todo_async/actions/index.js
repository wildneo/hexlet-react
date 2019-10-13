import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const fetchTasksRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTasksSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTasksFailure = createAction('TASKS_FETCH_FAILURE');

export const removeTaskRequest = createAction('TASK_REMOVE_REQUEST');
export const removeTaskSuccess = createAction('TASK_REMOVE_SUCCESS');
export const removeTaskFailure = createAction('TASK_REMOVE_FAILURE');

export const addTaskRequest = createAction('TASK_ADD_REQUEST');
export const addTaskSuccess = createAction('TASK_ADD_SUCCESS');
export const addTaskFailure = createAction('TASK_ADD_FAILURE');

export const addTask = (task) => async (dispatch) => {
  dispatch(addTaskRequest());
  try {
    const url = routes.tasksUrl();
    const response = await axios.post(url, { task });
    dispatch(addTaskSuccess({ task: response.data }));
  } catch (err) {
    dispatch(addTaskFailure());
    throw err;
  }
};

export const removeTask = ({ id }) => async (dispatch) => {
  dispatch(removeTaskRequest());
  try {
    const url = routes.taskUrl(id);
    await axios.delete(url);
    dispatch(removeTaskSuccess({ id }));
  } catch (err) {
    dispatch(removeTaskFailure());
    throw err;
  }
};

export const fetchTasks = () => async (dispatch) => {
  dispatch(fetchTasksRequest());
  try {
    const url = routes.tasksUrl();
    const response = await axios.get(url);
    dispatch(fetchTasksSuccess({ tasks: response.data }));
  } catch (err) {
    dispatch(fetchTasksFailure());
    throw err;
  }
};
