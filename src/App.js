import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {  useDispatch,useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  const id = useSelector(state=>state.id)
  const password = useSelector(state=>state.password)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type:"INCREMENT", payload:{num:5}})  //action  type 은 액션의 이름이다 
// payload 는 매개변수 같은 것 
    
  }
  const decrease= ( )=>{
    dispatch({type: "DECREMENT",payload:{num:1}})
  }
  
const login= ()=> {
  dispatch({type:"LOGIN",payload:{id:"chaechae",password:"123"}})
}

  return (
    <div >
      <h1>{id},{password}</h1>
     <h1>{count}</h1>
     <button onClick={increase}>증가!</button>
     <button onClick={decrease}>감소!</button>
     <button  onClick={login}>Login</button>
     <Box/>


    </div>
  );
}

export default App;
