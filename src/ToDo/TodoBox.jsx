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
      current: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleComplete = (id) => async (event) => {
      event.preventDefault();
      const { tasks } = this.state;
      const { data } = await axios.get(routes.taskPath(id));
      if (data.state === 'active') {
        const response = await axios.get(routes.finishTaskPath(id));
      }
      if (data.state === 'finished') {
        const response = await axios.get(routes.activateTaskPath(id));
      }
      this.setState({ tasks: update(tasks, { $push: response.data }) });
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  async toggle(id) {
    const { data } = await axios.get(routes.taskPath(id));
    switch (data.state) {
      case 'active':
        return await axios.get(routes.finishTaskPath(id));

      case 'finished':
        return await axios.get(routes.activateTaskPath(id));

      default:
        return;
    }
  }

  async getTasks() {
    const response = await axios.get(routes.tasksPath());
    this.setState({ tasks: response.data });
    console.log('tasks:', response.data);
  }

  async addTask(text) {
    const { tasks } = this.state;
    const response = await axios.post(routes.tasksPath(), { text });
    this.setState({ current: '', tasks: update(tasks, { $push: response.data }) });
    console.log('res:', response.data);
  }

  handleChange({ target }) {
    this.setState({ current: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { current } = this.state;
    this.addTask(current);
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
        <div className="todo-active-tasks">
          {tasks.filter(({ state }) => state === 'active').map((task) => <Item key={task.id} task={task} onComplete={this.handleComplete} />)}
        </div>
        <div className="todo-finished-tasks">
          {tasks.filter(({ state }) => state === 'finished').map((task) => <Item key={task.id} task={task} onComplete={this.handleComplete} />)}
        </div>
      </div>
    );
  }
}
