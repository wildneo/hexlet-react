import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import faker from '../faker';
import * as actions from '../actions';

const actionsList = {
  addTask: actions.addTask,
  removeAllTasks: actions.removeAllTasks,
};

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClean = this.handleClean.bind(this);
    this.handleGen = this.handleGen.bind(this);
  }

  handleClean() {
    const { removeAllTasks } = this.props;
    removeAllTasks();
  }

  handleGen() {
    const { addTask, removeAllTasks } = this.props;
    removeAllTasks();
    _.times(5, () => {
      addTask({ id: _.uniqueId(), text: faker.lorem.sentence() });
    });
  }

  render() {
    return (
      <div className="py-3">
        <button
          onClick={this.handleClean}
          type="button"
          data-test="clean"
          className="btn btn-warning btn-sm mr-3"
        >
          Clean
        </button>
        <button
          onClick={this.handleGen}
          type="button"
          data-test="generate"
          className="btn btn-primary btn-sm"
        >
          Generate
        </button>
      </div>
    );
  }
}

export default connect(null, actionsList)(Panel);
