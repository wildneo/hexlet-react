import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ text }) {
    const { addTask, reset } = this.props;
    addTask({ text });
    reset();
  }

  render() {
    const {
      handleSubmit, submitting, pristine,
    } = this.props;

    return (
      <form className="form-inline" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="form-group mx-3">
          <Field name="text" required component="input" type="text" />
        </div>
        <input type="submit" disabled={pristine || submitting} className="btn btn-primary btn-sm" value="Add" />
      </form>
    );
  }
}

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);
export default reduxForm({
  form: 'newTask',
})(ConnectedNewTaskForm);
