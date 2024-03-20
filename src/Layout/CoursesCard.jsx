import React from 'react'

const CoursesCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)0px_3px_8px] transition-all '>
      <div className='w-3/5'>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3 className='font-semibold text-lg text-center my-5'>{props.title}</h3>
        <p className='text-lightText md:text-justify text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eaque repudiandae molestias voluptatibus ab inventore qui odit praesentium doloremque illo?</p>
      </div>
    </div>
  )
}

export default CoursesCard