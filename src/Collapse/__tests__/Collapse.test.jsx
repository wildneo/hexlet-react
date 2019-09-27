import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Collapse from '../Collapse';

Enzyme.configure({ adapter: new Adapter() });

test('Collapse', () => {
  const wrapper = mount(<Collapse text="hi" opened={false} />);
  expect(wrapper.render()).toMatchSnapshot();

  const button = wrapper.find('a');

  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});

test('Collapse2', () => {
  const wrapper = mount(<Collapse text="i am grut" />);
  expect(wrapper.render()).toMatchSnapshot();
});
