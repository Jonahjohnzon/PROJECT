import React from 'react'
import Resultimage from './Resultimage'

const Seven = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center'>
    <div className=' w-[90%] 2xl:w-[55%] py-10 md:py-20 md:px-10 font-light  font-Open'>
       <section className=' flex w-full flex-col md:flex-row justify-between mb-20 md:mb-40' >
        <h1 className=' w-full font-bold font-Work text-4xl'>Week 1</h1>
        <div className=' w-[90%]'>
            <header className=' text-3xl font-bold font-Work mb-5'>Detail Specification</header>
            <p>We know the rough plan and what the app needs to do. We will have a detailed discussion and nail this down. </p>
        </div>
       </section>
       <section className=' flex flex-col md:flex-row  w-full justify-between'>
        <h1 className=' w-full font-bold font-Work text-4xl'>Week 2</h1>
        <div className=' w-[90%]'>
            <header className=' text-3xl font-bold font-Work mb-5'>Design <span className=' font-light'>&</span> Flow</header>
            <p className=' mb-4'>Next, we will get working on what's known as wireframes. These are basically pencil drawings of your app. We do this so we (yourself and us) can focus on the structure and flow of the app rather than worrying about colors and styles.  </p>
            <b className=' font-bold'>Once we have this agreed, we start to add color and branding.</b>
        </div>
       </section>
    </div>
    <Resultimage show={false}  url={"/eight.png"}/>
    </div>
  )
}

export default Seven