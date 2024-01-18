import React from 'react'
import Resultimage from './Resultimage'

const Result = () => {
  return (
    <div className=' flex flex-col items-center w-full'>
    <div className=' flex justify-center w-full py-20'>
    <div className='w-[80%] lg:w-[60%] 2xl:w-[50%] text-center '>
        <div>
            <h1 className=' font-bold font-Work text-[35px] mb-5'>Result</h1>
            <p className=' font-light mb-7'>It took 12 weeks to get a working version live but the results were immediate; with sales team representatives documenting details at the time they were happening and the secure storage meaning, no details were lost when it came back to implementing orders back at the office. </p>
        </div>
        <p className=' font-light mb-3'>They were also using the functionality to set call reminders and receiving these on their phones even when in the field. </p>
        <p className=' font-light'>This lead to each member of the sales team hit their target goals for the first time in over a year. </p>
    </div>
    </div>
    <Resultimage url={"/result.jpg"} pos={"top-0"} show={true}/>
    </div> 
  )
}

export default Result