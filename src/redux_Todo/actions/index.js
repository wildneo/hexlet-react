import { createAction } from 'redux-actions';

export const updateNewTaskText = createAction('TEXT_UPDATE');
export const addTask = createAction('TASK_ADD');
export const toggleState = createAction('TASK_TOGGLE');
export const removeTask = createAction('TASK_REMOVE');
export const cleanTasks = createAction('TASK_CLEAN');
