import React from 'react'

const Resultimage = ({url, show,pos, size=" h-[200px] sm:h-[700px]"}) => {
  return (
    <div className={` w-full relative ${size} `}>
    <div style={{backgroundImage:`url(${url})`}} className=' h-full flex justify-center items-center w-full bg-no-repeat  bg-cover bg-center bottom-0 '>
    {show&&<div className={` z-20 h-7 md:h-20 w-full absolute ${pos} bg-gradient-to-r from-pinktop from-1% via-[#F4EDFB] via-30% to-bluetop`}></div>}
        
    </div>
   
</div>
  )
}

export default Resultimage