import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card';

test('Card 1', () => {
  const title = 'title 1';
  const text = 'text 1';
  const component = renderer.create(<Card title={title} text={text} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card 2', () => {
  const title = 'title 2';
  const text = 'text 2';
  const component = renderer.create(<Card title={title} text={text} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
