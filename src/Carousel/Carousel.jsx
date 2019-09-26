/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

export default class Carousele extends React.Component {
  constructor(props) {
    super(props);
    const maxIndex = props.images.length;
    this.state = {
      active: 0,
      maxIndex,
    };

    this.next = () => this.increment();
    this.prev = () => this.decrement();
  }

  increment() {
    const { active, maxIndex } = this.state;
    this.setState({ active: (active + 1) % maxIndex });
  }

  decrement() {
    const { active, maxIndex } = this.state;
    this.setState({ active: active === 0 ? maxIndex - 1 : (active - 1) });
  }

  render() {
    const { images } = this.props;

    const process = (image, key) => {
      const { active } = this.state;
      const style = cn('carousel-item', { active: active === key });
      return (
        <div key={key} className={style}>
          <img alt="" className="d-block w-100" src={image} />
        </div>
      );
    };

    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">{images.map(process)}</div>
        <a onClick={this.prev} className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={this.next} className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
