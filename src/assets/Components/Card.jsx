
import React from 'react'

const Card = ({data}) => {
    
  return (
    <div className='flex bg-[#2D3035] p-3 h-12 rounded-2xl mt-1.5 w-full gap-7 items-center relative group relative '>
      <h1 className='text-xl pl-3 absolute left-5  ' >{data.cat}</h1>
      <h1 className='text-xl absolute right-30'>{data.amount}</h1>
      <button className=' dlticon right-6 absolute text-2xl hidden group-hover:flex ' ><i class=" ri-delete-bin-line  "></i></button>
      
    </div>
  )
}

export default Card
