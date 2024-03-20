import React from 'react'
import Heading from '../Layout/Heading'
import { Button } from 'react-scroll'
import img from '../assets/contact.svg'

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10'>
        <Heading title1='Contact' title2='Us'/>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        <form className='w-full md:w-2/5 space-y-5 pt-20'>
          <div className='flex flex-col'>
            <label htmlFor="username">Your Name</label>
            <input type="text" name='userName' id='userName' placeholder='Enter your name' className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)0px_3px_8px] transition-all'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="useremail">Your Email</label>
            <input type="email" name='userEmail' id='userEmail' placeholder='Enter your email' className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)0px_3px_8px] transition-all'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="usernumber">Your Number</label>
            <input type="number" name='userNumber' id='userNumber' placeholder='Enter your number' className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)0px_3px_8px] transition-all'/>
          </div>


          <div className='flex flex-row justify-center'>
            <Button title='Send Message'/>
          </div>
        </form>


        <div className='w-full md:w-2/4'>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact