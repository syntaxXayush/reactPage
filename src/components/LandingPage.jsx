/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";


function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-amber-50 pt-1'>
        <div className='textstructure mt-[10rem] px-20'> {/* Added margin-top */}
            {['We Create', 'Mind Blowing', 'Projects'].map((item,index)=>{
                return (
                <div className='masker '>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && 
                        (<motion.div 
                         initial={{width: 0}} 
                         animate={{width: "8vw"}} 
                         transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                        className='mr-[1vw] w-[8vw] rounded-md h-[5vw] -top-[1,5vw] relative bg-red-500'></motion.div>)}
                <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[7vw] leading-[.98] font-['Founder_Grotesk_X-Condensed'] font-medium">
                   {item}
                </h1> 
                </div>
            </div> 
                );
            })}
     </div>
     <div className='border-t-[1px] border-zinc-400 mt-24 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the basic to advance" ].map((item, index)=>
        <p className='text-md font-light tracking-tight leading-none'>
            {item}
        </p>
        )}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase'>
                start the project
            </div>
            <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                <span className='rotate-[45deg]'> 
                    <FaLongArrowAltUp />
                    </span>  
                </div>
        </div>
     </div>
    </div>
  )
}

export default LandingPage
