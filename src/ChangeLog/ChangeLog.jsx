import React from 'react';
import uniqueId from 'lodash.uniqueid';

export default class ChangeLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      log: [],
    };

    this.increment = (e) => {
      e.preventDefault();
      this.pushToLog(1);
    };

    this.decrement = (e) => {
      e.preventDefault();
      this.pushToLog(-1);
    };

    this.removeLogItem = (id) => (e) => {
      e.preventDefault();
      const { log } = this.state;
      const newLog = log.filter((item) => item.id !== id);
      this.setState({ log: newLog });
    };
  }

  pushToLog(value) {
    const { current, log } = this.state;
    const id = uniqueId();
    const newValue = log.length > 0 ? current + value : 0 + value;
    const newItem = { id, value: newValue };
    this.setState({
      current: newValue,
      log: [newItem, ...log],
    });
  }

  renderLog() {
    const { log } = this.state;

    return (
      <div className="list-group">
        {log.map(({ id, value }) => (
          <button key={id} onClick={this.removeLogItem(id)} type="button" className="list-group-item list-group-item-action">
            {value}
          </button>
        ))}
      </div>
    );
  }

  render() {
    const { log } = this.state;

    return (
      <div>
        <div className="btn-group" role="group">
          <button type="button" className="btn hexlet-inc" onClick={this.increment}>+</button>
          <button type="button" className="btn hexlet-dec" onClick={this.decrement}>-</button>
        </div>
        { log.length > 0 ? this.renderLog() : null }
      </div>
    );
  }
}
