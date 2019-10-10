import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import faker from '../faker';
import reducers from '../reducers';
import App from '../components/App';

Enzyme.configure({ adapter: new Adapter() });
faker.lorem.test = true;

test('Store', () => {
  const store = createStore(reducers);

  const vdom = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const wrapper = mount(vdom);
  expect(wrapper.render()).toMatchSnapshot();

  const generateTasksButton = wrapper.find('button[data-test="generate"]');
  const cleanTasksButton = wrapper.find('button[data-test="clean"]');

  generateTasksButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
  cleanTasksButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
  cleanTasksButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
  generateTasksButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
  generateTasksButton.simulate('click');
  expect(wrapper.render()).toMatchSnapshot();
});
