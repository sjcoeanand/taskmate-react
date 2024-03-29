import React from 'react'
import {useState} from 'react'
export const BoxCard = ({result, children}) => {
    const [show, showState] = useState(true)
  return (
    <div className={`col-md-3  ${show ? "" : 'hidden'}`}>
        <div className={`box row ${result}`}>
              {children}
          <button className='trigger ms-2 mt-2 w-25' onClick={()=> console.log('==> ', showState(!show))}>Hide</button>
        </div>
    </div>
  )
}
