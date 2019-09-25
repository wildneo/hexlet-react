import React from 'react';

export default class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    const barStyle = { width: `${percentage}%` };

    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={percentage}
          style={barStyle}
        />
      </div>
    );
  }
}
