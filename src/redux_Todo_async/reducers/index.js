import _ from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

// BEGIN (write your solution here)
const taskRemovingState = handleActions({
  [actions.fetchTasksRequest]: () => 'requested',
  [actions.fetchTasksFailure]: () => 'failed',
  [actions.fetchTasksSuccess]: () => 'finished',
}, 'none');
// END

const tasksFetchingState = handleActions({
  [actions.fetchTasksRequest]: () => 'requested',
  [actions.fetchTasksFailure]: () => 'failed',
  [actions.fetchTasksSuccess]: () => 'finished',
}, 'none');

const tasks = handleActions({
  [actions.fetchTasksSuccess]: (state, { payload }) => ({
    byId: _.keyBy(payload.tasks, 'id'),
    allIds: payload.tasks.map((t) => t.id),
  }),

  [actions.addTaskSuccess]: (state, { payload: { task } }) => {
    const { byId, allIds } = state;

    return {
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },

  [actions.removeTaskSuccess]: (state, { payload: { id } }) => {
    const { byId, allIds } = state;

    return {
      byId: _.omit(byId, id),
      allIds: _.without(allIds, id),
    };
  },
}, { byId: {}, allIds: [] });

export default combineReducers({
  taskRemovingState,
  tasksFetchingState,
  tasks,
  form: formReducer,
});
