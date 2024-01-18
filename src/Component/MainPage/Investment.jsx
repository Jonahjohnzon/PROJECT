import React from 'react'
import Resultimage from './Resultimage'

const Investment = () => {
  return (
    <div className=' w-full' id='your'>
        <div className=' bg-white py-16 md:py-20 leading-10 text-center font-Work text-[40px] px-2 font-bold'>YOUR INVESTMENT</div>
    <div className=' w-full '>
    <Resultimage url={"/invesment.jpeg"} size=' h-[200px] md:h-[700px]' show={true} pos={"bottom-0"}/>
</div>
</div>
  )
}

export default Investment