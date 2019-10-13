import { createAction } from 'redux-actions';

export const updateNewTaskText = createAction('TEXT_UPDATE');

export const addTask = createAction('TASK_ADD');

export const toggleTaskState = createAction('TASK_TOGGLE');

export const removeTask = createAction('TASK_REMOVE');

export const cleanTasks = createAction('TASK_CLEAN');

export const setTasksFilter = createAction('TASK_FILTER_SET');

// export const inverseTaskTheme = createAction('UI_INVERSE_THEME');
