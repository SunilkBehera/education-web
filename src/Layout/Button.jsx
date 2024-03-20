import React from 'react'

const Button = (props) => {
  return (
    <div> 
      <button className='bg-white py-2 px-5 rounded-full mt-4 border-2 border-black hover:border-brightGreen shadow-[rgba(0,_0,_0,_0.24)0px_3px_8px] hover:bg-brightGreen hover:text-white transition-all'>
        {props.title}
      </button>
    </div>
  )
}

export default Button