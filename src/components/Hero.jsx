import React from 'react'
import Vector from '../assets/vector.svg'
import Trackbtn from '../constants/Trackbtn'
import World from '../assets/world.svg'


const Hero = () => {
  return (
    <div className=' bg-hero-img bg-cover w-[96rem] h-[40.5rem] bg-no-repeat flex justify-center content-center'>
       <img src={Vector} alt="" className='z-[-1] absolute w-[85rem] h-[40.5rem] mx-0 my-0 opacity-[50%]' />
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
         <div className="bordcont w-[40rem]">
             <img src={World} alt="" className='absolute bottom-[12rem]' />
         </div>

        </div>

    </div>
  )
}

export default Hero

// <img src={Vector} alt="" className='z-[-1] absolute w-[85rem] h-[40.5rem] m-0' />