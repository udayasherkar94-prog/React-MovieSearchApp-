import React from 'react'

function Pagination({pageNo,next,prev}) {
  return (
    <div className='text-white bg-gray-500 flex justify-center rounded-xl py-3'>
        <div onClick={prev} className='px-10 hover:cursor-pointer '><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={next} className='px-10 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
        
    </div>
  )
}

export default Pagination