import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount , sortByDate , setTextFilter} from '../../actions/filters';

test('must set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})


test('must set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('must set sort by amount action object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"

    })
})

test('must set sort by date action object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"

    })
})

test('must set text filter action object by a value', ()=>{
    const action = setTextFilter("amount");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"amount"

    })
})

test('must set text filter action object with no value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    })
})