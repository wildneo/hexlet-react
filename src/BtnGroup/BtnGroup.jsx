import React from 'react';
import cn from 'classnames';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: null };

    this.leftHandler = () => this.setActive('left');
    this.rightHandler = () => this.setActive('right');
  }

  setActive(active) {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;
    const sharedClasses = ['btn', 'btn-secondary'];
    const leftStyle = cn(...sharedClasses, 'left', { active: active === 'left' });
    const rightStyle = cn(...sharedClasses, 'right', { active: active === 'right' });

    return (
      <div className="btn-group" role="group">
        <button onClick={this.leftHandler} type="button" className={leftStyle}>Left</button>
        <button onClick={this.rightHandler} type="button" className={rightStyle}>Right</button>
      </div>
    );
  }
}
