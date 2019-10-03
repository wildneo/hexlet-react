import nock from 'nock';
import React from 'react';
import axios from 'axios';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import httpAdapter from 'axios/lib/adapters/http';
import timeout from 'timeout-then';
import Autocomplete from '../Autocomplete';

const host = 'http://localhost';

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() });

  axios.defaults.adapter = httpAdapter;
  nock.disableNetConnect();
});

test('Autocomplete', async () => {
  const wrapper = mount(<Autocomplete />);
  expect(wrapper.render()).toMatchSnapshot();

  nock(host)
    .get('/countries')
    .query({ term: 'a' })
    .reply(200, ['albania', 'aljir']);

  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'a' } });
  await timeout(200);
  expect(wrapper.render()).toMatchSnapshot();
  nock(host)
    .get('/countries')
    .query({ term: 'alb' })
    .reply(200, ['albania']);
  input.simulate('change', { target: { value: 'alb' } });
  await timeout(100);
  expect(wrapper.render()).toMatchSnapshot();

  input.simulate('change', { target: { value: '' } });
  expect(wrapper.render()).toMatchSnapshot();
});
