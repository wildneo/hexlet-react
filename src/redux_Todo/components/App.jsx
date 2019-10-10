import React from 'react';
import NewTaskForm from './NewTaskForm';
import Panel from './Panel';
import Tasks from './Tasks';

export default () => (
  <div className="col-5">
    <NewTaskForm />
    <Panel />
    <Tasks />
  </div>
);
