import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Component from '../Component';

Enzyme.configure({ adapter: new Adapter() });

test('Component 1', () => {
  const wrapper = mount(<Component />);
  expect(wrapper.render()).toMatchSnapshot();

  const button = wrapper.find('.modal-open-button');
  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.modal-close-button').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.modal-close-button').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});

test('Close button', () => {
  const wrapper = mount(<Component />);
  const button = wrapper.find('.modal-open-button');
  button.simulate('click');
  wrapper.find('.close').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
