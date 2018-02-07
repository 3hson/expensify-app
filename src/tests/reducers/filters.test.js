import moment from 'moment';
import filtersReducer from '../../reducers/filters';
test('shuld setup default filter values',()=>{
    const state = filtersReducer(undefined, { type:'@@INIT'});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount',()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sort by to date',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action={type:"SORT_BY_DATE"}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});




test('should set text by value',()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:''
    };
    const action={type:"SET_TEXT_FILTER", text:"e"}
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('e')
});

test('should set start date by value',()=>{
  
    const action={type:"SET_START_DATE", startDate:moment()}
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(action.startDate)
});

test('should set end date by value',()=>{
  
    const action={type:"SET_END_DATE", endDate:moment()}
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(action.endDate)
});