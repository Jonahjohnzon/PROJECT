import React from 'react'
import Resultimage from './Resultimage'

const Fourth = () => {
  return (
    <div className=' w-full flex flex-col items-center' >
    <div className=' w-[80%] md:w-[90%] xl:w-[50%] flex flex-col md:flex-row justify-between py-20 font-light'>
        <section className=' md:w-[47%] mb-5 md:mb-0'>
                <h2 className=' font-Work text-4xl mb-5 font-bold'>Development</h2>
                <p>There are a number of features that will need to be developed to make the app functional and provide a solid user experience:</p>
        </section>
       
        <section className=' md:w-[47%] font-bold'>
            <ul>
                <li className=' mb-5'>1 <span className=' font-light'>|</span> Sign up</li>
                <li className=' mb-5'>2 <span className=' font-light'>|</span> Login</li>
                <li className=' mb-5'>3 <span className=' font-light'>|</span> Onboarding</li>
                <li className=' mb-5'>4 <span className=' font-light'>|</span> Geolocation tracking</li>
                <li className=' mb-5'>5 <span className=' font-light'>|</span> Maps integration</li>
                <li className=' mb-8'>6 <span className=' font-light'>|</span> Link to Google / Apple Maps</li>
            </ul>
            <p className=' font-light'  >This is a very high-level list. We will draw up a more detailed specification if the costs are acceptable to you.</p>
        </section>
    </div>
  
    <Resultimage show={true} pos={"bottom-0"} url={ "/fifth.png"} />
   
    </div>
  )
}

export default Fourth