import React from 'react'
import "./sci.css"
import { scis } from '@/data/data'


const Sci = () => {
  return (
    <div>
        {
            scis.map(sci => (
                <a href={sci.link} key={sci.id} target='_blank' className='mx-2'>
                    <span className={sci.icon}></span>
                </a>
            ))
        }
    </div>
  )
}

export default Sci;