import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Resultimage from "./Resultimage";


const Appdev = () => {
  const [select, setselect] = useState(true)
  const [select1, setselect1] = useState(true)
  return (
    <div className=" relative pt-40 w-full flex flex-col items-center  justify-center  z-50  ">
      <div className=" w-[80%] lg:w-[60%] 2xl:w-[50%] border-[1px] border-midnight rounded-r-md mb-20">
        <h1 className=" bg-midnight py-5 w-full px-10 text-white text-xl ">App Development</h1>
        <div className=" p-5"> 
        <h4 className=" bg-midnight py-2 mb-2 w-full pl-4 font-bold rounded-md">Select Your App Type</h4>
        <div className=" border-2 border-midnight flex flex-col md:flex-row p-5 rounded-md mb-2" style={select?{borderColor:"#E3E5ED"}:{borderColor:"black"}}>
          <div className=" flex  flex-col justify-between  font-bold"><h1>iPhone App Development</h1><h1 className=" md:w-[70%] font-light">Design and development of your iPhone app along with advice and consulting right up to approval.</h1></div>
          <div className=" flex  flex-col justify-between  items-end font-bold"><div>£6,000</div><div onClick={()=>setselect(false)} className=" cursor-pointer border-2 hover:border-black border-midnight px-4 py-2 rounded-md flex items-center"><FaCheck className=" mr-1" /><p className=" font-bold text-sm" >{select?"Select":"Selected"}</p></div></div>
        </div>
        <div className=" border-2 flex flex-col border-midnight p-5 md:flex-row  rounded-md mb-2" style={select1?{borderColor:"#E3E5ED"}:{borderColor:"black"}}>
          <div className=" flex flex-col justify-between  font-bold"><h1>Android App Development</h1><h1 className=" md:w-[70%] font-light">Design and development of your Android app along with advice and consulting right up to approval.</h1></div>
          <div className=" flex flex-col justify-between  items-end  font-bold"><div>£6,000</div><div onClick={()=>setselect1(false)} className=" cursor-pointer hover:border-black border-2 border-midnight px-4 py-2 rounded-md flex items-center"><FaCheck className=" mr-1" /><p className=" font-bold text-sm">{select1?"Select":"Selected"}</p></div></div>
        </div>
        </div>

      </div>
      {(!select || !select1) && <div className="w-[80%] lg:w-[60%] 2xl:w-[50%] h-24 px-5 flex items-center justify-end border-[1px] border-midnight rounded-r-md mb-20">
          <div className=" flex justify-between w-[100%] md:w-[50%]">
            <p className=" font-light">One-off Total</p>
            <b>£6,000</b>
          </div>
        </div>}
      <div className=' w-[100%] bg-thirdblue flex justify-center py-20 font-light'>
        <div className=" w-[80%] lg:w-[60%] 2xl:w-[50%] flex flex-col md:flex-row justify-between">
    <section className=' md:w-[47%]'>
            <h2 className=' font-Work text-4xl mb-5 font-bold'>The Real Cost</h2>
            <p>There is the amount of money changing hands during this transaction, then there is what we call "The Real Cost".</p>
    </section>
    <section className=' md:w-[47%] font-bold'>
    <p className=' font-light mb-5'>In your case, I wanted to point out a few ways you can profit from this App:</p>
        <ul>
            <li className=' mb-5 font-light'><span className=' font-bold'>1 -</span> Paid listings based on intent from your users.</li>
            <li className=' mb-5 font-light'> <span className=' font-bold'>2 -</span> Advertising based on location</li>
            <li className='  font-light'> <span className=' font-bold'>3 -</span>  Build to sell - Build this with the idea to sell it to a weather website like Weather.com or</li>
        </ul>
        <p className=' font-light'>MetCheck.com </p>

    </section>
    </div>
   </div>
   <div className=' w-full '>
  <Resultimage url={"/appdev.jpeg"} size="md:h-[700px] h-[200px]" show={true} pos={"bottom-0"}/>
</div>
    </div>
  );
};

export default Appdev;
