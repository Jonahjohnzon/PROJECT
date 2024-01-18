import React from 'react'
import SideBar from './SideBar'
import Top from './MainPage/Top'
import { Second } from './MainPage/Second'
import Third from './MainPage/Third'
import Fourth from './MainPage/Fourth'
import Sixth from './MainPage/Sixth'
import Seven from './MainPage/Seven'
import Nine from './MainPage/Nine'
import Ten from './MainPage/Ten'
import Twelve from './MainPage/Twelve'
import Proposed from './MainPage/Proposed'
import Result from './MainPage/Result'
import ABC from './MainPage/ABC'
import Investment from './MainPage/Investment'
import Pricing from './MainPage/Pricing'
import Tabone from './MainPage/Tabone'
import Appdev from './MainPage/Appdev'
import Guarantee from './MainPage/Guarantee'
import Lets from './MainPage/Lets'
import Copywrite from './MainPage/Copywrite'
import Note from './MainPage/Note'
import { FaChevronUp } from "react-icons/fa6";
import {Link} from 'react-scroll'

const Page = () => {
  return (
    <main className=' font-Open w-full'>
           <SideBar/>
        <section className=' flex justify-end w-full relative z-20'>
            <main className=' w-[100%] md:w-[67%] xl:w-[85%] flex flex-col items-center text-textbrown'>
            <Top/>
            <Second/>
            <Third/>
            <Fourth/>
            <Sixth/>
            <Seven/>
            <Nine/>
            <Ten/>
            <Twelve/>
            <Proposed/>
            <Result/>
            <ABC/>
            <Investment/>
            <Pricing/>
            <Tabone/>
            <Appdev/>
            <Guarantee/>
            <Lets/>
            <Copywrite/>
            <Note/>
            <div className=' fixed bottom-1 w-full z-50 flex justify-center'>
              <Link to='int' smooth={true} duration={800} spy={true} activeClass={'active'} ><div  style={{ boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.1)' }} className='  cursor-pointer px-20 py-3 z-50 bg-white'>
            <FaChevronUp />
            </div>
            </Link>
            </div>
            </main>
        </section>
    </main>
  )
}

export default Page