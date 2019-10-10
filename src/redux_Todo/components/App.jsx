import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

const mapStateToProps = ({ text, tasks }) => ({ text, tasks });

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.handleRemove = (id) => (event) => {
      event.preventDefault();
      const { removeTask } = this.props;
      removeTask(id);
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addTask, text } = this.props;
    const newTask = { id: _.uniqueId(), text };
    addTask(newTask);
  }

  handleUpdate(event) {
    event.preventDefault();
    const { updateNewTaskText } = this.props;
    const { target: { value } } = event;
    updateNewTaskText(value);
  }

  renderTasksList() {
    const { tasks } = this.props;

    return (
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
  }

  render() {
    const { text, tasks } = this.props;
    return (
      <div className="col-5">
        <form action="" className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3">
            <input type="text" required value={text} onChange={this.handleUpdate} />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Add</button>
        </form>
        {tasks.length > 0 && this.renderTasksList()}
      </div>
    );
  }
}

App.defaultProps = {
  text: '',
};

export default connect(mapStateToProps, actions)(App);
