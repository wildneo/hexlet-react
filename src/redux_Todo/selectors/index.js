import { createSelector } from 'reselect';

const getTasks = ({ tasks }) => tasks;

export const tasksSelector = createSelector(
  getTasks,
  ({ byId, allIds }) => allIds.map((id) => byId[id]),
);

export const activeTasksSelector = createSelector(
  tasksSelector,
  (tasks) => tasks.filter(({ state }) => state === 'active'),
);

export const finishedTasksSelector = createSelector(
  tasksSelector,
  (tasks) => tasks.filter(({ state }) => state === 'finished'),
);

export const filteredTasksSelector = (state, filterName) => {
  const selector = {
    all: tasksSelector,
    active: activeTasksSelector,
    finished: finishedTasksSelector,
  };

  return selector[filterName](state);
};
