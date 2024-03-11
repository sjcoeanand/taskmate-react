import React from 'react'
import { useState,useRef  } from 'react';
export const NewEmployee = ({emp, setEmp}) => {
    
    const [newEmp, setNewEmp] = useState("");
    const [newStatus, setNewStatus] = useState(false);
    const empRef = useRef();
    

    const handleChange = () =>{
      console.log("==", empRef.current.value);
      setNewEmp(empRef.current.value)
    }

    const handleSubmit = (event)=>{
      event.preventDefault();
      let addedEmp = { id: Math.floor(Math.random() * 10000), name: empRef.current.value, designation: 'Software Engineer', active: Boolean(newStatus)}
      console.log("addedEmp",addedEmp);
      setEmp(emp.concat(addedEmp))
      handleReset();
    }
    const handleReset = () =>{
      empRef.current.value = "";
      setNewStatus(false)
    }


  return (
    <div className="main-block"> 
      <form>
          <div className='new-task row pb-3'>
              <div className="col">
                <input type="text" className="form-control form-control-sm" placeholder='Add Employee Name' ref={empRef}
                name="newTask" onChange={handleChange} autoComplete="off" />
              </div>
              <div className="col">
                <select name="status" id="cars" className="form-control form-control-sm" value={newStatus} onChange={(e)=>{setNewStatus(e.target.value)}}>
                  <option value={false}>In Active</option>
                  <option value={true}>Active</option>
                </select>
              </div>
              <div className='col ps-0'>
                <button type="submit" className="btn btn-secondary btn-sm" onClick={handleSubmit}>Add Employee</button>
                <button type="button" className="btn delete btn-secondary btn-sm ms-1" onClick={handleReset}>Reset</button>
              </div>
          </div>
          <div>{newEmp}</div>
      </form>
    </div>
  )
}
