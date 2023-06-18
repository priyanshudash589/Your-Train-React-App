import React from 'react'
import Logomain from '../assets/Logomain.svg'
import Button from '../constants/Button'

const Navbar = () => {
  return (
      <nav className=' w-[93rem] h-[4rem] flex'>
       <div className=" w-[35rem] h-[4rem] flex justify-center content-center">   
        <img src={Logomain} alt=""  className='w-[10rem] h-[3rem] pt-3'/>
        </div>
        <div className=" w-[82rem] h-[4rem]">
            <ul className='flex justify-center content-center'>
                <li className='px-5 py-4'>Home</li>
                <li className='px-5 py-4'>Aboutus</li>
                <li className='px-5 py-4'>Services</li>
                <li className='px-5 py-4'>Testimonials</li>
                <li className='px-5 py-4'>Contactus</li>
            </ul>
        </div>
        <div className=" py-2 px-[8rem] ">
            <Button/>        
        </div>
      </nav>

      
  )
}

export default Navbar