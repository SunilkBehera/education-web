import React from 'react'
import {  Link } from 'react-scroll'
import Button from '../Layout/Button'
import hero from '../assets/hero.svg'


const Home = () => {
  return (
    <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
      <div className='md:w-2/4 text-center'>
        <h2 className='text-5xl font-semibold leading-tight'>Knowledge With</h2>
        <span className='text-brightGreen text-5xl font-semibold'>eStudy</span>

        <p className='text-justify text-lightText mt-5 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, deserunt, qui asperiores perspiciatis expedita totam quisquam eaque maxime id hic ipsam, quam exercitationem porro placeat provident delectus. Dignissimos, ad laborum.
        </p>

        <Link to='contact' spy={true} smooth={true} duration={500}>
            <Button title='Contact'/>
        </Link>
      </div>

      <div className='w-full md:w-2/4'>
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home