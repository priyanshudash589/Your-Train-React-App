import React from 'react'
import Vector from '../assets/vector.svg'
import Gradi from '../assets/gradient.svg'
import Trackbtn from '../constants/Trackbtn'

const Hero2 = () => {
  return (
    <div className=' bg-hero-img bg-cover w-[96rem] h-[40.5rem] bg-no-repeat flex justify-center content-center'>
       <div className=' bg-hero-vector bg-cover w-[96rem] h-[40.5rem] bg-no-repeat flex justify-center content-center'>
        <div id="borderdep" className='bg-none w-[80rem] h-[32rem] mt-[3.5rem] rounded-md border-2 border-solid border-slate-800 flex content-center'>

         <div className="bordcont w-[32rem] ml-[5rem] py-[3rem] ">
            <div className='flex flex-col'>
          
          <h4 className='text-white'>SHIP TO AND FROM ANYWHERE IN THE WORLD</h4>
          <br />
          {" "}
          <h1 className='text-white text-[45px] font-bold'>Find the Best freight quote</h1>
          <br />
          {" "}
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolor? Nostrum nihil voluptates nulla exercitationem iste impedit saepe, earum minus officia laboriosam at adipisci voluptatem maiores facere expedita fugiat itaque!</p>
          <br />
          <br />
          <div className='flex'>
          <input type="text" name="" id="" className='w-[20rem] h-[3rem] border-none rounded-tl-lg rounded-bl-lg text-[14px] pl-7' placeholder='Search for Container NO or Booking ID' /><Trackbtn/>
          </div>

          </div>

         </div>
         <div className="bordcont bg-red-400 w-[40rem]"></div>

        </div>
        </div>
    </div>
  )
}

export default Hero2