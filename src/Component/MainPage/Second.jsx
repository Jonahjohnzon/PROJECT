import React from 'react'

export const Second = () => {
    const first_name = "{first_name}"
  return (
    <div className=' w-[80%] xl:w-[55%] py-20 font-light'>
        <h3 className=' font-bold mb-5'>Dear {first_name},</h3>
        <div className=' font-bold mb-5 italic'>thank you for contacting us and for considering Your company name as your app developers.</div>
        <p className=' mb-5 '>We think your app idea is great and have no doubt that it would be used heavily by families looking to get away from the grotty weather and enjoy a day in the sun. </p>
        <p className=' mb-5'>We understand you have had this idea for about 18 months and experimented with two freelance developers who stalled and didn't produce results.</p>
        <i className='font-bold'>As an experienced development agency, this is our bread and butter.</i>
    </div>
  )
}
