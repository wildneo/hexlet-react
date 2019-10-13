/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { filteredTasksSelector } from '../selectors';

const mapStateToProps = (state) => {
  const { tasks: { currentFilterName } } = state;
  const tasks = filteredTasksSelector(state, currentFilterName);
  return { tasks };
};
const actionsList = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleTaskState = (id) => (event) => {
      event.preventDefault();
      const { toggleTaskState } = this.props;
      toggleTaskState({ id });
    };

    this.handleRemoveTask = (id) => (event) => {
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
          {tasks.map(({ id, text, state }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">
                <button
                  type="button"
                  data-test="task-toggle-state"
                  className="btn btn-link"
                  onClick={this.handleToggleTaskState(id)}
                >
                  {state === 'active' ? text : <s>{text}</s>}
                </button>
              </span>
              <button
                type="button"
                data-test="task-remove"
                className="close"
                onClick={this.handleRemoveTask(id)}
              >
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
