import React from 'react'
import Resultimage from './Resultimage'
import Sign from './Sign'

const Lets = () => {
  return (
    <div className=' w-full flex flex-col items-center' id='let'>
            <div className='w-[80%] lg:w-[60%] 2xl:w-[50%] text-center py-20'>
        <div>
            <h1 className=' font-bold font-Work text-[45px] mb-5'>Let's Get Started</h1>
            <p className=' font-bold font-Work text-[25px] mb-5'>If you would like to join us and become a client we would be delighted to have you. </p>
        </div>
        
    </div>
    <div className={` h-7 md:h-20 w-full  bg-gradient-to-r from-pinktop from-1% via-[#F4EDFB] via-30% to-bluetop`}></div>
    <div className=' w-full justify-center flex bg-thirdblue'>
    <div className='w-[80%] lg:w-[60%] 2xl:w-[50%] flex flex-col md:flex-row justify-between py-20 font-light '>
        <section className=' md:w-[47%] flex justify-center'>
                <h2 className=' font-Work text-4xl mb-5 '>Next Steps</h2>
        </section>
       
        <section className=' md:w-[47%] '>
            <ul>
                <li className=' mb-5'>-  Sign below by typing your name and clicking 'Sign Proposal'</li>
                <li className=' mb-5'>-  We will arrange the initial interview where we will gather all the details we need for the detailed spec.</li>
                <li className=' mb-5'>-  We will be in touch with your invoice details and will set up billing for your 50%.</li>
            </ul>
        </section>
    </div>
    </div>
    <Resultimage url={'/l.png'} show={false}/>
    <div className=' w-full'>
        <Sign/>
    </div>
    <div className=" bg-thirdblue py-20 w-full text-center">
            <h1 className=' font-bold font-Work text-[45px] leading-10'>We Are Ready To Go, Are You?</h1>
            
        </div>
    </div>
  )
}

export default Lets