import React from 'react'
import { serviceStatus, todoActions } from '../../constants';
import { actionObj, todoObj } from '../types'
const initialState =  {
    todos: [] as todoObj[],
    loading: false
}
const todoReducer = (state=initialState, action: actionObj) => {
    switch(action.type) {
        case serviceStatus.LOADING : return {loading:true, todos: [] as todoObj[]};
        case serviceStatus.SUCCESS : return {loading: false, todos:action.payload };
        case serviceStatus.FAIL : return {loading: false, todos: [] as todoObj[]};
        default: return state;
    }
 
}

export default todoReducer;