import React from 'react'

const Pricing = () => {
  return (
    <div className=' w-[80%] lg:w-[60%] 2xl:w-[50%] flex-col md:flex-row flex justify-between py-20 font-light'>
    <section className=' md:w-[47%]'>
            <h2 className=' font-Work text-4xl mb-5 font-bold'>Pricing Made Simple</h2>
            <p>We have a very transparent and simple pricing plan:</p>
    </section>
    <section className=' md:w-[47%] font-bold'>
        <ul>
            <li className=' mb-5'>50% <span className=' font-light'>|</span> Upon signing this proposal</li>
            <li className=' mb-5'>40% <span className=' font-light'>|</span> When we have completed the specification</li>
            <li className=' mb-10'>10%  <span className=' font-light'>|</span> When it's been submitted to the App Marketplace.</li>
        </ul>
        <p className=' font-light'>If we can't get it through the App marketplace review process</p>
        <p className=' font-light'>then we will refund you, 100%.</p>
    </section>
</div>
  )
}

export default Pricing