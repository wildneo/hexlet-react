import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const text = handleActions({
  [actions.updateNewTaskText]: (state, { payload: { value } }) => value,
  [actions.addTask]: () => '',
}, '');

const tasks = handleActions({
  [actions.addTask]: (state, { payload: { task } }) => [task, ...state],
  [actions.removeTask]: (state, { payload: { id } }) => (state.filter((task) => task.id !== id)),
  [actions.cleanTasks]: () => [],
}, []);

export default combineReducers({
  text,
  tasks,
});
