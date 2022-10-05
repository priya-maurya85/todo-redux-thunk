import axios from "axios";
import { LOADIPHLPAPI } from "dns";
import { Dispatch } from "redux";
import { serviceStatus, todoActions } from "../../constants";
import { actionObj, ServiceDispatchTypes } from "../types";

// export const ADD_TODO = (value: string) => {
//     return {
//         type: todoActions.ADD_TODO,
//         payload: value
//     }
// }

// export const DELETE_TODO = () => {
//     return {
//         type: todoActions.DELETE_TODO
//     }
// }


///////  Using Thunk here for second example ///////

export const callTodo = () => {

    return async(dispatch:Dispatch<ServiceDispatchTypes>) => {
       try {
        dispatch({type: serviceStatus.LOADING})
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log("value of todos rsponswe", response.data);
        
        dispatch({type: serviceStatus.SUCCESS, payload: response.data});
       }
       catch(error) {
        dispatch({type: serviceStatus.FAIL, error})
       }
    }
}