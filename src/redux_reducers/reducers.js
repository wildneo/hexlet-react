import _ from 'lodash';
import { combineReducers } from 'redux';

const tasks = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_ADD': {
      const { task } = action.payload;

      return { ...state, [task.id]: task };
    }

    case 'TASK_REMOVE': {
      const { id } = action.payload;

      return _.omit(state, id);
    }

    default:
      return state;
  }
};

const comments = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_REMOVE': {
      const { id } = action.payload;

      return _.omitBy(state, (c) => c.taskId === id);
    }

    case 'TASK_COMMENT_ADD': {
      const { comment } = action.payload;

      return { ...state, [comment.id]: comment };
    }

    case 'TASK_COMMENT_REMOVE': {
      const { id } = action.payload;

      return _.omit(state, id);
    }

    default:
      return state;
  }
};

export default combineReducers({ tasks, comments });
