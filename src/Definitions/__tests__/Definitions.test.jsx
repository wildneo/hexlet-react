import React from 'react';
import renderer from 'react-test-renderer';
import Definitions from '../Definitions';

test('Definitions 1', () => {
  const definitions = [
    { dd: 'one', dt: 'two' },
    { dd: 'another term', dt: 'another description' },
  ];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Definitions 2', () => {
  const definitions = [
    { dd: 'one', dt: 'two' },
  ];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Definitions 3', () => {
  const definitions = [
    { dd: 'another term', dt: 'another description' },
    { dd: 'one', dt: 'two' },
  ];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Definitions 4', () => {
  const definitions = [];
  const component = renderer.create(<Definitions data={definitions} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
