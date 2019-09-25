import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '../Alert';

test('Alert 1', () => {
  const params = {
    type: 'danger',
    text: 'text 1',
  };
  const component = renderer.create(<Alert {...params} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Alert 2', () => {
  const params = {
    type: 'dark',
    text: 'text 2',
  };
  const component = renderer.create(<Alert {...params} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
