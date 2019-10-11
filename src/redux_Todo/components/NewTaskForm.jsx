import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

const mapStateToProps = ({ text }) => ({ text });
const actionsList = {
  addTask: actions.addTask,
  updateNewTaskText: actions.updateNewTaskText,
};

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addTask, text } = this.props;
    const task = { id: _.uniqueId(), text, state: 'active' };
    addTask({ task });
  }

  handleUpdate(event) {
    event.preventDefault();
    const { updateNewTaskText } = this.props;
    const { target: { value } } = event;
    updateNewTaskText({ value });
  }

  render() {
    const { text } = this.props;
    return (
      <form action="" className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mx-sm-3">
          <input type="text" required value={text} onChange={this.handleUpdate} />
        </div>
        <input type="submit" className="btn btn-primary btn-sm" value="Add" />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  text: '',
};

export default connect(mapStateToProps, actionsList)(NewTaskForm);
