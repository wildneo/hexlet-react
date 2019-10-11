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
      allIds: allIds.filter((taskId) => taskId !== id),
    };
  },
  [actions.toggleState]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;
    const task = byId[id];
    task.state = task.state === 'finish' ? 'active' : 'finish';

    return { byId, allIds };
  },
  [actions.cleanTasks]: () => ({ byId: {}, allIds: [] }),
}, { byId: {}, allIds: [] });

export default combineReducers({
  text,
  tasks,
});
