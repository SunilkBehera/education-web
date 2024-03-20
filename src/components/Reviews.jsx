import React from 'react'
import Heading from '../Layout/Heading'
import ReviewsCard from '../Layout/ReviewsCard'
import img1 from '../assets/pic1.png'
import img2 from '../assets/pic2.png'
import img3 from '../assets/pic3.png'

const Reviews = () => {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5 '>
      <Heading  title1='Our' title2='Reviews'/>

      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <ReviewsCard img={img1}/>
        <ReviewsCard img={img2}/>
        <ReviewsCard img={img3}/>
      </div>
    </div>
  )
}

export default Reviews