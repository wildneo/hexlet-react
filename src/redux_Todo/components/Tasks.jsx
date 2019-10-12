/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds }, tasksUIState } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks, tasksUIState };
};
const actionsList = {
  inverseTaskTheme: actions.inverseTaskTheme,
  toggleTaskState: actions.toggleTaskState,
  removeTask: actions.removeTask,
};

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleTaskState = (id) => (event) => {
      event.preventDefault();
      const { toggleTaskState, inverseTaskTheme } = this.props;
      inverseTaskTheme({ id });
      toggleTaskState({ id });
    };

    this.handleRemove = (id) => (event) => {
      event.preventDefault();
      const { removeTask } = this.props;
      removeTask({ id });
    };
  }

  render() {
    const { tasks, tasksUIState } = this.props;
    const applyTheme = (theme) => {
      const regularStyle = 'list-group-item d-flex';
      const themeClasses = {
        light: 'bg-light text-dark',
        dark: 'bg-dark text-light',
      };
      return cn(regularStyle, themeClasses[theme]);
    };

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text, state }) => (
            <li className={applyTheme(tasksUIState[id].theme)} key={id}>
              <span className="mr-auto">
                <a href="#" data-test="task-toggle-state" onClick={this.handleToggleTaskState(id)}>
                  {state === 'active' ? text : <s>{text}</s>}
                </a>
              </span>
              <button type="button" className="close" onClick={this.handleRemove(id)}>
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
