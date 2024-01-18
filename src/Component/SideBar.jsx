import React, { useState } from 'react'
import { Link } from "react-scroll";

const SideBar = () => {
  const [int, setint] = useState(true)
  const [app, setapp] = useState(false)
  const [pro, setpro] = useState(false)
  const [paid, setpaid] = useState(false)
  const [your, setyour] = useState(false)
  const [our, setour] = useState(false)
  const [lets, setlet] = useState(false)
  const [term, setterm] = useState(false)
  const handleSetActive = (to) => {
   if(to == "int")
   {
    setint(true)
    setapp(false)
    setpro(false)
   setpaid(false)
   setyour(false)
   setour(false)
   setlet(false)
   setterm(false)
   }
   else if(to == "app")
   {
    setapp(true)
    setint(false)
    setpro(false)
   setpaid(false)
   setyour(false)
   setour(false)
   setlet(false)
   setterm(false)
  }
  else if(to == "pro")
  {
   setapp(false)
   setpro(true)
   setint(false)
   setpaid(false)
   setyour(false)
   setour(false)
   setlet(false)
   setterm(false)
 }
 else if(to == "paid")
 {
  setapp(false)
  setpro(false)
  setint(false)
  setpaid(true)
  setyour(false)
  setour(false)
  setlet(false)
  setterm(false)
}
else if(to == "your")
{
 setapp(false)
 setpro(false)
 setint(false)
 setpaid(false)
 setyour(true)
 setour(false)
 setlet(false)
 setterm(false)
}
else if(to == "our")
{
 setapp(false)
 setpro(false)
 setint(false)
 setpaid(false)
 setyour(false)
 setour(true)
 setlet(false)
 setterm(false)
}
else if(to == "let")
{
 setapp(false)
 setpro(false)
 setint(false)
 setpaid(false)
 setyour(false)
 setour(false)
 setlet(true)
 setterm(false)
}
else if(to == "term")
{
 setapp(false)
 setpro(false)
 setint(false)
 setpaid(false)
 setyour(false)
 setour(false)
 setlet(false)
 setterm(true)
}
 
  };
  return (
    <nav className='w-[300px] bg-white z-50 md:flex flex-col items-center pt-10 h-[100vh] hidden   shadow-black fixed left-0 top-0' style={{ boxShadow: '10px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <section className=' mb-10'>
        <div className=' w-[250px]' ><img alt='Logo' src='/Logo.png'/></div>
     </section>  
     <section>
            <ul className=' font-light text-sm  w-[250px]'>
                <Link to="int" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={int?{fontWeight:"bold"}:{fontWeight:'lighter'}}>Introduction</li></Link>
                <Link to="app" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={app?{fontWeight:"bold"}:{fontWeight:'lighter'}}>Your App Development</li></Link>
                <Link to="pro" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={pro?{fontWeight:"bold"}:{fontWeight:'lighter'}}>The Process and Timescales</li></Link>
                <Link to="paid" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={paid?{fontWeight:"bold"}:{fontWeight:'lighter'}}>"Paid For Itself Already"</li></Link>
                <Link to="your" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={your?{fontWeight:"bold"}:{fontWeight:'lighter'}}>Your Investment</li></Link>
                <Link to="our" smooth={true} duration={800} spy={true} activeClass={'active'}   onSetActive={handleSetActive} ><li className=' mb-4  cursor-pointer' style={our?{fontWeight:"bold"}:{fontWeight:'lighter'}}>Our Guarantee</li></Link>
                <Link to="let" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={lets?{fontWeight:"bold"}:{fontWeight:'lighter'}}>Let's Get Started!</li></Link>
                <Link to="term" smooth={true} duration={800} spy={true} activeClass={'active'}  onSetActive={handleSetActive}><li className=' mb-4  cursor-pointer' style={term?{fontWeight:"bold"}:{fontWeight:'lighter'}}>Terms & Conditions</li></Link>
            </ul>
     </section>
    </nav>
  )
}

export default SideBar