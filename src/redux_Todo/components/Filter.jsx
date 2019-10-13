import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const filters = [
  ['all', 'All Tasks'],
  ['active', 'Active Tasks'],
  ['finished', 'Finished Tasks'],
];

const mapStateToProps = (state) => {
  const { tasks: { currentFilterName } } = state;
  return { currentFilterName };
};

const actionsList = {
  setTasksFilter: actions.setTasksFilter,
};

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);

    this.handleClick = (filterName) => (event) => {
      event.preventDefault();
      const { setTasksFilter } = this.props;
      setTasksFilter({ filterName });
    };
  }

  renderButton([filterName, title]) {
    const { currentFilterName } = this.props;

    if (filterName === currentFilterName) {
      return title;
    }
    return (
      <button
        type="button"
        key={filterName}
        className="btn btn-link border-0 p-0"
        data-test={`task-filter-${filterName}`}
        onClick={this.handleClick(filterName)}
      >
        {title}
      </button>
    );
  }

  render() {
    return (
      <div className="mt-3 d-flex justify-content-around">
        {filters.map(this.renderButton)}
      </div>
    );
  }
}

export default connect(mapStateToProps, actionsList)(Filter);
