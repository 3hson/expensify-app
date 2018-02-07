import { addExpose, editExpose, removeExpose, removeExpense, editExpense, addExpense} from '../../actions/expenses'

test('remove expose must return an id and an action',()=>{
    const action=removeExpense({id:"123abc"});
    expect(action).toEqual({type:'REMOVE_EXPENSE',id:'123abc'})
})

test('edit expose must return an edited object', ()=>{
    const action=editExpense("123abc", {note: "new note value"} );
    expect(action).toEqual({type:"EDIT_EXPENSE", id:"123abc" ,update:{ note: "new note value"}})
})

test('must be an expense with provided values',() => {
    const expenseData={
        description:'car',
        note:'for the car ',
        amount :150000,
        createdAt:1000
    }
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
    }})
})

test('must be an expense with empty values',() => {
    const expenseData={
        description:'',
        note:' ',
        amount :0,
        createdAt:0
    }
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id:expect.any(String)
    }})
})