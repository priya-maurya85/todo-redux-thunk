import React, { ReactElement, ReactEventHandler, ReactHTMLElement, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {bindActionCreators} from "redux";
import './App.css';
import {callTodo} from "./redux/actions/action";
import { State } from './redux/store';

function App() {
  const todoDataList = useSelector((state:State) => state.todoData)
  const [inputVal, setInputVal] = useState<string>("");
  const dispatch = useDispatch();
  // const  {callTodo} = bindActionCreators(actionCreators, dispatch);
  const handleInputChange = (e:any) => {
    setInputVal(e.target.value);
  }
 return(
  <>
  {/* <input value={inputVal} onChange={handleInputChange} /> */}
  <button onClick={()=>dispatch(callTodo())}>Add to do</button>
  <h2>List of todos </h2>
  {/* {todoDataList && todoDataList.map(todo => <li>{todo}</li>)} */}

  </>
 )
}

export default App;
