import React from 'react';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

it('App.js renders ', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('Connect').length).toBe(2)
});
