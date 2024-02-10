import './App.css';
import { useState } from 'react';
import {Task } from './components/Task/Task'
export default function App () {
  const name = 'Anand';
  let designation = 'Frontend Developer';
  let [count, setCount] = useState(1)
  function subtract(){
    setCount(count - 1)
  }
  function addition() {
      setCount(count => count + 1)
  }
  return (
    <div className='container'>
      <Task title="Tasklist - React" />
    </div>
  )
}
