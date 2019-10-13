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
      ...state,
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },

  [actions.removeTask]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;

    return {
      ...state,
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },

  [actions.toggleTaskState]: (state, { payload: { id } }) => {
    const task = state.byId[id];
    const mapping = {
      finish: 'active',
      active: 'finished',
    };
    const updatedTask = { ...task, state: mapping[task.state] };

    return {
      ...state,
      byId: { ...state.byId, [id]: updatedTask },
    };
  },

  [actions.setTasksFilter]: (state, { payload: { filterName } }) => (
    { ...state, currentFilterName: filterName }
  ),

  [actions.cleanTasks]: () => ({ byId: {}, allIds: [], currentFilterName: 'all' }),
}, { byId: {}, allIds: [], currentFilterName: 'all' });

// const tasksUIState = handleActions({
//   [actions.addTask]: (state, { payload: { task } }) => (
//     { ...state, [task.id]: { theme: 'light' } }
//   ),

//   [actions.removeTask]: (state, { payload: { id } }) => (_.omit(state, id)),

//   [actions.cleanTasks]: () => ({}),

//   [actions.inverseTaskTheme]: (state, { payload: { id } }) => {
//     const taskTheme = state[id].theme;
//     const mapping = {
//       dark: 'light',
//       light: 'dark',
//     };

//     return { ...state, [id]: { theme: mapping[taskTheme] } };
//   },
// }, {});

export default combineReducers({
  text,
  tasks,
  // tasksUIState,
});
