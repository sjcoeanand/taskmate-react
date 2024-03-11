import './App.css';
import {Task } from './components/Task/Task'
import {NewEmployee } from './components/Task/NewEmployee'
import {useState} from 'react';
export default function App () {
  const [emp, setEmp] = useState([
    { id: 9007, name: 'Anand', designation: 'Lead Engineer', active: true},
])
 return (
    <div className='container'>
      <h1>Employee List - React</h1>
      <NewEmployee emp={emp} setEmp={setEmp} />
      <Task emp={emp} setEmp={setEmp} />
    </div>
  )
}
