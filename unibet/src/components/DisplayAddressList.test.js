import React from 'react';
import DisplayAddressList from './DisplayAddressList';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

it('AddAddress renders ', () => {
  const wrapper = shallow(<DisplayAddressList
    addressList={[{firstName: 'test', lastName: 'test', phoneNo: 'test', seqNo: '1'}]}/>)
  expect(wrapper.find('table').exists()).toBe(true)
  expect(wrapper.find('Address').exists()).toBe(true)
});
