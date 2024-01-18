import React from 'react'
import Resultimage from './Resultimage'

const Twelve = () => {
  return (
    <div className='flex flex-col items-center w-full' id='paid'>
        <div className=' w-[80%] xl:w-[65%] flex flex-col items-center py-20  '>
            <h1 className=' font-Work text-[40px] font-bold mb-7 text-center'>Case Study | ABC Software</h1>
            <h3 className=' font-bold font-Work text-3xl mb-5'>Client Needs</h3>
            <p className=' font-light'>ABC Software had a custom CRM solution built but found they needed an iPhone App to help their sales team keep from forgetting information between meetings and the office</p>
        </div>
        <Resultimage url={"/thirteen.png"} show={false}/>
    </div>
  )
}

export default Twelve