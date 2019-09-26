import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BtnGroup from '../BtnGroup';

Enzyme.configure({ adapter: new Adapter() });

test('BtnGroup 1', () => {
  const wrapper = mount(<BtnGroup />);
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.left').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.right').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.left').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  wrapper.find('.left').simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
