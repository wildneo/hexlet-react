import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const text = handleActions({
  [actions.updateNewTaskText]: (state, { payload: { value } }) => value,
  [actions.addTask]: () => '',
}, '');

const tasks = handleActions({
  [actions.addTask]: (state, { payload: { task } }) => {
    const { byId, allIds } = state;

    return {
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },
  [actions.removeTask]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;

    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
  [actions.toggleState]: (state, { payload: { id } }) => {
    const task = state.byId[id];
    const taskState = task.state === 'finish' ? 'active' : 'finish';
    const updatedTask = { ...task, state: taskState };

    return {
      ...state,
      byId: { ...state.byId, [id]: updatedTask },
    };
  },
  [actions.cleanTasks]: () => ({ byId: {}, allIds: [] }),
}, { byId: {}, allIds: [] });

export default combineReducers({
  text,
  tasks,
});
