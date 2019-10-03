import React from 'react';

export default class TodoBox extends React.PureComponent {
  render() {
    const { task, onRemove } = this.props;

    return (
      <div>
        <div className="row">
          <div>
            <form className="todo-remove-item-form" action="" onSubmit={onRemove(task.id)}>
              <button type="submit" className="btn btn-primary btn-sm">-</button>
            </form>
          </div>
          <div className="col-10">{task.value}</div>
        </div>
        <hr />
      </div>
    );
  }
}
