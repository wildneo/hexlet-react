import React from 'react';
import cn from 'classnames';

export default class Alert extends React.Component {
  render() {
    const { type, text } = this.props;
    const alertClass = cn('alert', `alert-${type}`);

    return (
      <div className={alertClass} role="alert">
        {text}
      </div>
    );
  }
}
