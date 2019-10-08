import jQuery from 'jquery';
import 'bootstrap-markdown/js/bootstrap-markdown';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MarkdownEditor from '../MarkdownEditor';

Enzyme.configure({ adapter: new Adapter() });

const getSimulatorKeyPress = (element) => (str) => {
  element.value = str; // eslint-disable-line
  const e = new KeyboardEvent('keyup');
  element.dispatchEvent(e);
};

beforeAll(() => {
  window.jQuery = jQuery;
  document.body.innerHTML = '<div id="container"></div>';
});

test('MarkdownEditor', () => {
  let value;
  const onContentChange = (v) => {
    value = v;
  };

  mount(<MarkdownEditor onContentChange={onContentChange} />, { attachTo: document.getElementById('container') });
  const textarea = document.querySelector('textarea');
  const simulate = getSimulatorKeyPress(textarea);
  simulate('l');
  expect(value).toBe('l');

  simulate('some text');
  expect(value).toBe('some text');

  simulate('');
  expect(value).toBe('');
});
