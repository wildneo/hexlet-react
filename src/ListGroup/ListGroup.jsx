/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';


export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => (
          <li className="list-group-item">
            {child}
          </li>
        ))}
      </ul>
    );
  }
}
