import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import routes from './routes';
import Item from './Item';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: '',
    };

    this.handleChange = ({ target: { value } }) => {
      this.setState({ text: value });
    };

    this.handleSubmit = (event) => {
      event.preventDefault();
      const { text } = this.state;
      this.addTask(text);
    };

    this.handleClick = (id) => (event) => {
      event.preventDefault();
      this.toggleTaskState(id);
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  async getTasks() {
    const { data } = await axios.get(routes.tasksPath());
    this.setState({ tasks: data });
  }

  async addTask(text) {
    const { tasks } = this.state;
    const { data } = await axios.post(routes.tasksPath(), { text });
    this.setState({ text: '', tasks: update(tasks, { $push: [data] }) });
  }

  async toggleTaskState(id) {
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const task = tasks[index];
    const url = (t) => {
      switch (t.state) {
        case 'active':
          return routes.finishTaskPath(t.id);

        case 'finished':
          return routes.activateTaskPath(t.id);

        default:
          throw new Error(`Unexpected state ${t.state}`);
      }
    };
    const { data } = await axios.patch(url(task));
    this.setState({ tasks: update(tasks, { [index]: { $set: data } }) });
  }

  renderForm() {
    const { text } = this.state;

    return (
      <form className="todo-form form-inline mx-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control mr-3"
            placeholder="I am going..."
            type="text"
            value={text}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">add</button>
      </form>
    );
  }

  renderTasks(taskState) {
    const { tasks } = this.state;
    const filtered = tasks.filter(({ state }) => state === taskState);

    if (filtered.length === 0) {
      return null;
    }

    return (
      <div className={`todo-${taskState}-tasks`}>
        {filtered.map((task) => <Item key={task.id} task={task} onClick={this.handleClick} />)}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {this.renderTasks('active')}
        {this.renderTasks('finished')}
      </div>
    );
  }
}
