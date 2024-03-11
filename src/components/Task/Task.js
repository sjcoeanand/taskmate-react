
import { useState } from 'react';
import {TaskCard} from './TaskCard';
import {BoxCard} from '../boxCard/BoxCard';
import './Task.css';
export const Task = ({emp, setEmp}) => {
    const [show, setShow] = useState(true);
   
    function handleDelete(id){          
        setEmp(emp.filter((item)=>{
            return id !== item.id
        }))
    }
    return (
        <div className="emp-wrapper">            
            <div className="main-block">               
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-secondary btn-sm' onClick={()=> setShow(!show)}>{show ? 'Hide Block' : 'Show Block'}</button>
                    <div>
                        <a className='badge bg-secondary' href="http://anandshendage.in/">Back to Angular</a>
                    </div>
                </div>
                <ul>
                    {
                        show && emp.map((item)=> (
                            <TaskCard key={item.id}  empItem={item} handleDelete={handleDelete}/>
                            ))
                        }
                </ul>
            </div>
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