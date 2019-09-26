import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../Carousel';

Enzyme.configure({ adapter: new Adapter() });

test('Carousel', () => {
  const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];
  const wrapper = mount(<Carousel images={images} />);
  expect(wrapper.render()).toMatchSnapshot();

  const next = wrapper.find('.carousel-control-next');
  const prev = wrapper.find('.carousel-control-prev');

  next.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  next.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  next.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});

test('Carousel 2', () => {
  const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg'];
  const wrapper = mount(<Carousel images={images} />);
  expect(wrapper.render()).toMatchSnapshot();

  const next = wrapper.find('.carousel-control-next');

  next.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  next.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  next.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
