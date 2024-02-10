import React from 'react'
import {useState} from 'react'
export const BoxCard = ({result, children}) => {
    const [show, showState] = useState(true)
  return (
    <div className={`col-md-3  ${show ? "" : 'hidden'}`}>
        <div className={`box row ${result}`}>
              {children}
        </div>
        <button className='trigger' onClick={()=> console.log('==> ', showState(!show))}>Hide</button>
    </div>
  )
}
