export const TaskCard = ({empItem, handleDelete}) => {
    
  
    return (        
        <li className={empItem.active === true ? 'completed' : 'incomplete'}>
        <span>{empItem.id} - {empItem.name} - {empItem.designation}</span> 
        <button onClick={() => handleDelete(empItem.id)} className='delete'>Hide</button> </li>
    )

}