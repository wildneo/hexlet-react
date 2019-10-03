import React from 'react';
import uniqueId from 'lodash.uniqueid';
import Item from './Item';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      current: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleRemove = (id) => (event) => {
      event.preventDefault();
      const { tasks } = this.state;
      const newTasks = tasks.filter((task) => task.id !== id);
      this.setState({ tasks: newTasks });
    };
  }

  handleChange({ target }) {
    this.setState({ current: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { tasks, current } = this.state;
    const task = {
      id: uniqueId(),
      value: current,
    };
    this.setState({ tasks: [task, ...tasks], current: '' });
  }

  render() {
    const { tasks, current } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form className="todo-form form-inline mx-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                className="form-control mr-3"
                placeholder="I am going..."
                type="text"
                value={current}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {tasks.map((task) => <Item key={task.id} task={task} onRemove={this.handleRemove} />)}
      </div>
    );
  }
}
