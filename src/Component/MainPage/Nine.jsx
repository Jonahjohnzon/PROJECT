import React from 'react'

const Nine = () => {
  return (
    <div className=' w-[90%] 2xl:w-[55%] py-20 md:px-10 font-light  font-Open'>
    <section className=' flex  flex-col md:flex-row  w-full justify-between mb-20 md:mb-40' >
     <h1 className=' w-full font-bold font-Work mb-4 sm:mb-0 text-4xl'>Week 3</h1>
     <div className=' w-[90%]'>
         <header className=' w-full text-[26px] sm:text-3xl font-bold font-Work mb-5'>App Store Registration</header>
         <p>We will likely do this sooner but it won't be done any later than this stage. </p>
     </div>
    </section>
    <section className=' flex w-full justify-between flex-col md:flex-row  '>
     <h1 className=' w-full font-bold mb-4 sm:mb-0 font-Work text-4xl'>Weeks 4 - 9</h1>
     <div className=' w-[90%]'>
         <header className='text-[26px] sm:text-3xl font-bold font-Work mb-5'>Development</header>
         <p className=' mb-4'>At this point, we go quiet and just get on with making it. </p>
         <p className=' '>The spec is nailed down, the design and screens are all agreed, it is just a small case of "making it work". </p>
         <b className=' font-bold'>(If only it were always that easy!)</b>
     </div>
    </section>
 </div>
  )
}

export default Nine