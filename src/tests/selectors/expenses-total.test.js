import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 wwith no expenses', ()=>{
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);

})

test('should return correctly  add multiple expenses', ()=>{
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(1104195);

})

test('should return correctly  add multiple expenses', ()=>{
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(1104195);

})