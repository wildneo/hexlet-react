import { omit } from 'lodash';
import { createStore } from 'redux';

export default (initState) => {
  const tasks = (state = {}, action) => {
    switch (action.type) {
      case 'TASK_ADD': {
        const { task } = action.payload;

        return { ...state, [task.id]: task };
      }

      case 'TASK_REMOVE': {
        const { id } = action.payload;

        return omit(state, id);
      }

      default:
        return state;
    }
  };

  return createStore(tasks, initState);
};
