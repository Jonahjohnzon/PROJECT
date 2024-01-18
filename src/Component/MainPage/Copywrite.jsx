import React from 'react'

const Copywrite = () => {
  return (
    <div className=' w-full flex flex-col items-center' id='term'>
    <div className=' font-light flex justify-center py-20 text-white bg-red'>
        <div className=' w-[80%] lg:w-[60%] 2xl:w-[50%]'>
            <p><span className=' font-bold'>USER DISCLAIMER (Please Delete):</span> This agreement may not be suitable for your circumstances and we recommend you seek legal advice before using it. Better Proposals does not take any responsibility for any events that arise as a result of your use of this agreement.</p>
        </div>
    </div>
    <div className=' w-[80%] lg:w-[60%] 2xl:w-[50%] leading-10 py-20 text-center text-[44px] font-Work font-light'>
        <h2>Terms & Conditions</h2>
    </div>
    <div className={` h-7 md:h-20 w-full  bg-gradient-to-r from-pinktop from-1% via-[#F4EDFB] via-30% to-bluetop`}></div>
    </div>
  )
}

export default Copywrite