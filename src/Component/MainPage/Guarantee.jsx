import React from 'react'
import Resultimage from './Resultimage'

const Guarantee = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full ' id='our'>
    <div className=' w-[90%] lg:w-[60%] 2xl:w-[50%] text-center py-20'>
        <div>
            <h1 className=' font-bold font-Work text-[45px] mb-5'>Your Guarantee</h1>
            <p className=' font-bold font-Work text-[25px] mb-5'>We have a deal that no one can beat.</p>
        </div>
        <p className=' font-light'>Like with any business purchase, there is a risk attached.</p>
        <p className=' font-light'>We want to remove that risk from you and place it on ourselves.</p>
    </div>
    <div className=" w-full bg-thirdblue flex justify-center items-center ">
    <div className='w-[80%] lg:w-[60%] 2xl:w-[50%]  h-full  relative'>
    <div className=" absolute flex justify-center -top-10 w-full">
        <div className=" w-20 h-20 z-20 bg-white rotate-45"></div>
    </div>
    <div className=" w-full flex flex-col justify-center mt-10 items-center h-full relative z-40  mb-32">
        <h1 className=" font-bold font-Work text-[42px] text-center mb-5">Here Is How It Works</h1>
        <p className=' font-light  text-center mb-10'>The entire purpose of this project is to create the app and get it into the app store, exactly as you imagined. So, if your app doesn't get approved in the relevant app marketplace... then you don't pay for it. </p>
        <h1 className=" font-bold  mb-5">YES. REALLY. </h1>
        <p className=' font-light mb-10'>If we don't achieve what we said we would, you don't have to pay for it.</p>
        <h1 className=" font-bold font-Work text-[33px] mb-5">Pretty Good Right?</h1>
    </div>
   

    </div>
  </div>
  <Resultimage url={"/g.jpeg"} show={false} size=' h-[200px] md:h-[600px]' />
    </div>
  )
}

export default Guarantee