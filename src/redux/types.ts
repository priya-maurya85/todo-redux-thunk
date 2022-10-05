import { serviceStatus, todoActions } from "../constants";

export type todoObj = {
    userId:number;
    id: number;
    title: string;
}

// export type TodoStateType = {
//     todos: todoObj[];
// }
export interface actionObj {
    type: serviceStatus.LOADING|serviceStatus.FAIL|serviceStatus.SUCCESS;
    payload?: todoObj[];
}


interface ServiceLoading  {
    type: serviceStatus.LOADING;

}
interface ServiceLoaded {
    type:serviceStatus.SUCCESS;
    payload: todoObj[];
}

interface ServiceFail {
    type:serviceStatus.FAIL;
}
export type ServiceDispatchTypes = ServiceLoading|ServiceLoaded|ServiceFail;