import React from 'react';
import{shallow} from 'enzyme';
import ExpenseDashbordPage from '../../components/ExpenseDashbordPage';
import expenses from '../fixtures/expenses';

test('this must render ExpenseDashboard',()=>{
    const wrapper =shallow(<ExpenseDashbordPage  />);
    expect(wrapper).toMatchSnapshot()
})