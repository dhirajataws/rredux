import React from 'react';
import AddAddress from './AddAddress';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})
it('AddAddress renders ', () => {
  const wrapper = shallow(<AddAddress tempAddress={{firstName: '', lastName: '', phoneNo: '', seqNo: ''}}/>)
  expect(wrapper.find('form').exists()).toBe(true)
  expect(wrapper.find('input').length).toBe(5)
});
