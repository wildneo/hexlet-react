/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = props;
    this.state = { isShown: opened };

    this.toggle = (event) => {
      event.preventDefault();
      const { isShown } = this.state;
      this.setState({ isShown: !isShown });
    };
  }

  render() {
    const { text } = this.props;
    const { isShown } = this.state;
    return (
      <div>
        <p>
          <a className="btn btn-primary" href="#" onClick={this.toggle}>Link with href</a>
        </p>
        <div className={cn('collapse', { show: isShown })}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
  text: null,
};
