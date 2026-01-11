import React from 'react'
import Logo from './Pictures/Logo.png'
const Nav = () => {
  return (
    <nav className='w-full border-b-2 rounded-b-2xl h-12 flex justify-between pl-4.5'>
        <div className="logo h-4 flex justify-center items-center h-full">
            <img src={Logo} className='h-10'></img>
            <h1 className='text-2xl'>SpendWise</h1>
        </div>
        <div className="subhead w-lg flex justify-around items-center">
            <div className="month">
                <h1 className='text-xl'>January 2026</h1>
            </div>
            <div className="profile flex justify-center items-center gap-2">
                <i className="ri-user-3-line text-2xl bg-gray-400 rounded-2xl p-1 pt-0 pb-0"></i>
                <h1 className='text-xl '>Aditya</h1>
            </div>
        </div>
    </nav>
  )
}

export default Nav
