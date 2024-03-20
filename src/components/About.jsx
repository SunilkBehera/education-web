import React from 'react'
import img from '../assets/about.svg'
import { Link } from 'react-scroll'
import Button from '../Layout/Button'
import Heading from '../Layout/Heading'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-4
    '>
      <div className='w-full md:w-2/4'>
        <img src={img} alt="" />
      </div>
      <div className='w-full md:w-2/4 text-center space-y-2 '>
        <Heading title1='About' title2='Us?'/>

        <p className='text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ipsum? Accusantium ipsum, deserunt reprehenderit iste incidunt architecto aliquid omnis id.
        </p>

        <Link to='contact' spy={true} smooth={true} duration={500} >
          <Button title='Contact Us'/>
        </Link>
      </div>
    </div>
  )
}

export default About