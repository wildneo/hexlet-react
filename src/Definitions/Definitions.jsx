/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import uniqueId from 'lodash.uniqueid';

export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    const f = (item) => (
      <React.Fragment key={uniqueId()}>
        <dt key={uniqueId()}>{item.dt}</dt>
        <dd key={uniqueId()}>{item.dd}</dd>
      </React.Fragment>
    );

    return (
      data.length === 0 ? null : <dl>{data.map(f)}</dl>
    );
  }
}
