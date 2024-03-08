import './App.css';
import { useState } from 'react';
import {Task } from './components/Task/Task'
export default function App () {
  // const [count, setCount] = useState(0);
  // function addCount(){
  //   setCount(count + 1)
  // }
  // function SubtractCount(){
  //   setCount(count - 1)
  // }
  // function resetState(){
  //   setCount(0)
  // }
 return (
    <div className='container'>
      {/* <div className="text-center">
        <div className="fw-bold mt-4">Count - {count}</div>
        <button className='btn btn-success me-2' onClick={addCount}>Add</button>
        <button className='btn btn-success me-2' onClick={SubtractCount}>Remove</button>
        <button className='btn btn-success' onClick={resetState}>Reset</button>
      </div> */}
      <Task title="Tasklist - React" />
    </div>
  )
}
