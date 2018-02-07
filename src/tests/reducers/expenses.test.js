import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state',()=>{
    const state = expenseReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})


test('should not  remove expense by not found id',()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id:-1
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add expense ',()=>{
    const action ={
        type: 'ADD_EXPENSE',
        expense:{
            id:4,
            description:"car",
            note:"",
            amount:50000,
            createdAt:moment(0).add(5, 'days')   
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense])
})

test('should not  edit expense',()=>{
    const action ={
        type: 'EDIT_EXPENSE',
        id:3,
        update:{
        amount:50000,
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[2].amount).toEqual(action.update.amount)
})


test('should not  edit expensewhen id not defined',()=>{
    const action ={
        type: 'EDIT_EXPENSE',
        id:-1 ,
        update:{
        amount:50000,
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})