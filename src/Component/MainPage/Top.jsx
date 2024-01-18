import React from 'react'

const Top = () => {
  return (
    <div className=' w-full h-[700px]' id='int'>
        <div style={{backgroundImage:'url("/Top.jpg")'}} className=' bg-no-repeat h-full flex justify-center items-center w-full bg-cover bg-center relative bottom-0 '>
            <div className=' w-[90%] lg:w-[70%] 3xl:w-[50%] font-bold  font-Work'>
                <h2 className=' text-[42px] leading-8'>Let's Bring</h2>
                <h2 className=' text-[42px] '>Your App To Life</h2>
                <h4 className=' text-[26px] mt-7'>Great ideas are calling</h4>
                <h4 className=' text-[26px]'>for a great plan.</h4>
            </div>
            <div className=' z-20 h-10 md:h-20 w-full absolute bottom-0 bg-gradient-to-r from-pinktop from-1% via-[#F4EDFB] via-30% to-bluetop'></div>
        </div>
    </div>
  )
}

export default Top