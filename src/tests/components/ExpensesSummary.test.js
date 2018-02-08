import React from 'react';
import {shallow} from "enzyme";
import ExpensesSumary, { ExpensesSummary } from "../../components/ExpensesSummary";

test('should rnder Expenses summary witht 1 expense', ()=>{
    const wrapper = shallow (<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})



test('should rnder Expenses summary witht multiple expense', ()=>{
    const wrapper = shallow (<ExpensesSummary expenseCount={23} expensesTotal={222123335} />);
    expect(wrapper).toMatchSnapshot();
})