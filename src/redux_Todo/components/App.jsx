import React from 'react';
import NewTaskForm from './NewTaskForm';
import Panel from './Panel';
import Filter from './Filter';
import Tasks from './Tasks';

export default () => (
  <div className="col-5">
    <Panel />
    <NewTaskForm />
    <Filter />
    <Tasks />
  </div>
);
