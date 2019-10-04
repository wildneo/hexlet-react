/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
import React from 'react';

export default class Item extends React.PureComponent {
  render() {
    const { task, onRemove } = this.props;
    const link = <a href="#" className="todo-task" onClick={onRemove(task.id)}>{task.text}</a>;

    return (
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
          {task.state === 'finished' ? <s>{link}</s> : link}
        </div>
      </div>
    );
  }
}
