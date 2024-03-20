import React from 'react'

const ReviewsCard = (props) => {
  return (
    <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)0px_3px_8px] transition-all hover:cursor-pointer'>
      <div>
        <p className='text-lightText text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem iusto hic quibusdam perferendis quas vitae at soluta commodi corrupti?
        </p>
      </div>

      <div className='flex flex-row justify-center'>
          <img className='rounded-full w-1/4' src={props.img} alt="" />
      </div>
    </div>
  )
}

export default ReviewsCard