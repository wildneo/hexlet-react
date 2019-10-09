import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducers from '../reducers';
import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() });

test('Store', () => {
  const store = createStore(reducers);

  const vdom = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const wrapper = mount(vdom);
  expect(wrapper.render()).toMatchSnapshot();

  const newTaskInput = wrapper.find('input[type="text"]');
  const newTaskSubmit = wrapper.find('button[type="submit"]');

  newTaskInput.simulate('change', { target: { value: 'na-na' } });
  expect(wrapper.render()).toMatchSnapshot();

  newTaskSubmit.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  newTaskInput.simulate('change', { target: { value: 'another task' } });
  expect(wrapper.render()).toMatchSnapshot();

  newTaskSubmit.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  const pressCloseTask1 = wrapper.find('.close').first();
  pressCloseTask1.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();

  newTaskInput.simulate('change', { target: { value: 'na-na' } });
  newTaskSubmit.simulate('submit');
  expect(wrapper.render()).toMatchSnapshot();

  const pressCloseTask2 = wrapper.find('.close').first();
  pressCloseTask2.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
