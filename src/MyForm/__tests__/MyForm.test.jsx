import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyForm from '../MyForm';

Enzyme.configure({ adapter: new Adapter() });

test('MyForm', async () => {
  const wrapper = mount(<MyForm />);
  expect(wrapper.render()).toMatchSnapshot();

  const input = wrapper.find('form');
  input.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  const button = wrapper.find('button');
  button.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  const inputAcceptRules = wrapper.find('input[name="acceptRules"]');
  inputAcceptRules.simulate('change', { target: { name: 'acceptRules', type: 'checkbox', checked: true } });

  const inputCity = wrapper.find('input[name="city"]');
  inputCity.simulate('change', { target: { type: 'input', name: 'city', value: 'MyCity' } });

  const inputEmail = wrapper.find('input[name="email"]');
  inputEmail.simulate('change', { target: { type: 'input', name: 'email', value: 'test@email.com' } });

  const inputPassword = wrapper.find('input[name="password"]');
  inputPassword.simulate('change', { target: { type: 'input', name: 'password', value: 'mysuperpass' } });

  const input2 = wrapper.find('form');
  input2.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  const button2 = wrapper.find('button');
  button2.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
