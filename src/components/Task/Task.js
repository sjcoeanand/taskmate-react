
import { useState } from 'react';
import {TaskCard} from './TaskCard';
import {BoxCard} from '../boxCard/BoxCard';
import './Task.css';
export const Task = (props) => {
    const [show, setShow] = useState(true);
    const [emp, setEmp] = useState([
        { id: 1, name: 'Sachin', designation: 'Team Lead', active: false},
        { id: 2, name: 'Anil', designation: 'Team Lead', active: false},
        { id: 3, name: 'Anand', designation: 'Lead Engineer', active: true},
    ])
    function handleDelete(id){          
        setEmp(emp.filter((item)=>{
            return id !== item.id
        }))
    }
    return (
        <div className="emp-wrapper">
            <h1>{props.title}</h1>
            <ul>
                <div className='d-flex justify-content-between'>
                <button className='btn btn-primary' onClick={()=>setShow(!show)}>{show ? 'Hide Block' : 'Show Block'}</button>
                <div><a className='badge bg-secondary' href="http://anandshendage.in/">Back to Angular</a></div>
                </div>
                {
                show && emp.map((item)=> (
                   <TaskCard key={item.id}  empItem={item} handleDelete={handleDelete}/>
                ))
                }</ul>

                <div className='row justify-content-center'>
                    <BoxCard result="success">
                        <div className="fw-bold">Card 1</div>
                        <div className="description">Sample text 1</div>
                    </BoxCard>
                    <BoxCard result="warning">
                        <div className="fw-bold">Card 2</div>
                        <div className="description">Sample text 2</div>
                    </BoxCard>
                    <BoxCard result="alert">
                        <div className="fw-bold">Card 3</div>
                        <div className="description">Sample text 3</div>
                    </BoxCard>
                
                </div>
        </div>
    )
}