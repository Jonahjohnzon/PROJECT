import React from 'react'
import Resultimage from './Resultimage'

const Ten = () => {
  return (
    <div className=' flex w-full flex-col items-center justify-center bg-thirdblue '>
    <div className=' w-[90%] 2xl:w-[55%] py-20   md:px-10 font-light  font-Open'>
    <section className=' flex w-full flex-col md:flex-row  justify-between mb-20 md:mb-40' >
     <h1 className=' w-full font-bold font-Work text-4xl mb-4 sm:mb-0'>Week 10</h1>
     <div className=' w-[90%]'>
         <header className=' text-3xl font-bold font-Work mb-5'>Testing</header>
         <p>Testing is vital. People rarely give an app a second chance. We test vigorously. Not just whether button A does what it's supposed to, but testing on other people. It's about making sure that everything works as it should and that the natural flows we want to occur are natural to random people the first time they play with it.</p>
     </div>
    </section>
    <section className=' flex w-full flex-col md:flex-row  justify-between'>
     <h1 className=' w-full font-bold font-Work text-4xl mb-4 sm:mb-0'>Week 11</h1>
     <div className=' w-[90%]'>
         <header className=' text-3xl font-bold font-Work mb-5'>Store Submission</header>
         <p className=' mb-4'>When we are ready and you are happy, we submit it to your relevant market place. We will help you prepare all the marketing material needed like screenshots and descriptions for the listing. If there are any issues, we will refine them and re-submit until we get approval. </p>
     </div>
    </section>
 </div>
 <Resultimage show={true} pos={"bottom-0"} url={"/eleven.png"}/>
 </div>
  )
}

export default Ten