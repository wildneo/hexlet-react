/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { byId, allIds } = state.tasks;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks };
};
const actionsList = {
  toggleState: actions.toggleState,
  removeTask: actions.removeTask,
};

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleState = (id) => (event) => {
      event.preventDefault();
      const { toggleState } = this.props;
      toggleState({ id });
    };

    this.handleRemove = (id) => (event) => {
      event.preventDefault();
      const { removeTask } = this.props;
      removeTask({ id });
    };
  }

  render() {
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map((task) => (
            <li className="list-group-item d-flex" key={task.id}>
              <span className="mr-auto">
                <a href="#" data-test="task-toggle-state" onClick={this.handleToggleState(task.id)}>
                  {task.state === 'active' ? task.text : <s>{task.text}</s>}
                </a>
              </span>
              <button type="button" className="close" onClick={this.handleRemove(task.id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionsList)(Tasks);
