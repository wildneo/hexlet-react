import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import faker from '../faker';
import * as actions from '../actions';

const actionsList = {
  addTask: actions.addTask,
  cleanTasks: actions.cleanTasks,
};

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClean = this.handleClean.bind(this);
    this.handleGen = this.handleGen.bind(this);
  }

  handleClean() {
    const { cleanTasks } = this.props;
    cleanTasks();
  }

  handleGen() {
    const { addTask, cleanTasks } = this.props;
    cleanTasks();
    _.times(5, () => {
      addTask({ task: { id: _.uniqueId(), text: faker.lorem.sentence(), state: 'active' } });
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
