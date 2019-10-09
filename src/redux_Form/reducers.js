import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return action.payload.value;

    case 'TEXT_RESET': {
      return '';
    }

    default:
      return state;
  }
};

export default combineReducers({
  text,
});
