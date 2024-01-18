import React, { useState } from 'react'
import { TbPencilStar } from "react-icons/tb";
import { BsInputCursorText } from "react-icons/bs";

const Sign = () => {
    const [type, settype] = useState(true)
  return (
    <div className=' flex justify-center items-center py-20'>
        <div className=' w-[80%] lg:w-[60%] 2xl:w-[50%] border-[1px] border-midnight p-5'>
            <p className=' font-light mb-5'>I, Doe, agree to the terms of this agreement and I agree that my typed name below can be used as a digital representation of my signature to that fact.</p>
            <div className=' flex md:items-center flex-col md:flex-row text-xs border-b-black  border-opacity-10  border-b-2'>
                <div className=' flex items-center w-fit mr-5 mb-5 md:mb-0 border-x-textbrown pb-3 rounded-sm cursor-pointer' style={type?{borderBottomWidth:"3px"}:{borderBottomWidth:"0px"}}  onClick={()=>settype(true)}><BsInputCursorText className=' text-lg' /><p className=' ml-2'>SIGN BY TYPING</p></div>
                <div  className=' flex items-center w-fit border-x-textbrown pb-3 rounded-sm cursor-pointer' style={type?{borderBottomWidth:"0px"}:{borderBottomWidth:"3px"}} onClick={()=>settype(false)}><TbPencilStar className=' text-lg' /><p className=' ml-2'>SIGN BY DRAWING</p></div>
            </div>
            <div>
                {type&&<div>
                    <form className=' flex flex-col items-start'>
                        <h3 className=' font-bold text-xl mt-4 mb-3'>To accept, type your name below</h3>
                        <input type='text' className=' h-12 bg-metal border-[1px] border-midnight w-[60%] mb-3 px-3'/>
                        <input value="Accept" className=' font-Work bg-green text-white font-bold text-sm px-4 py-3 rounded-md' type='submit'/>
                    </form>
                </div>}
                {type||<div>
                <form className=' flex flex-col items-start'>
                        <h3 className=' font-bold text-xl mt-4 mb-3'>To accept, draw and type your name below</h3>
                        <div  className=' h-60 bg-metal border-[1px] border-midnight w-[100%] mb-3'></div>
                        <label className=' text-xs font-bold mb-2' htmlFor='text'>Type your name</label>
                        <input type='text' id='text' className=' h-12 bg-metal border-[1px] border-midnight w-[60%] mb-3 px-3'/>
                        <input value="Accept" className=' font-Work bg-green text-white font-bold text-sm px-4 py-3 rounded-md' type='submit'/>
                    </form>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Sign