import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = ({ tasks }) => ({ tasks });
const actionsList = { removeTask: actions.removeTask };

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = (id) => (event) => {
      event.preventDefault();
      const { removeTask } = this.props;
      removeTask(id);
    };
  }

  render() {
    const { tasks } = this.props;
    const tasksList = (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map((task) => (
            <li className="list-group-item d-flex" key={task.id}>
              <span className="mr-auto">{task.text}</span>
              <button type="button" className="close" onClick={this.handleRemove(task.id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );

    return tasks.length > 0 && tasksList;
  }
}

export default connect(mapStateToProps, actionsList)(Tasks);
