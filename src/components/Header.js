import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-fit navigation-wrapper relative hidden md:block pt-3'>
        <div className='w-full sticky left-0 top-3 flex flex-col gap-2'>
        <div className='Logo w-full text-end px-2'>
        <Link to={"/"}>
            <p className='p-3 text-md bg-gray-900 w-fit rounded-md text-white'>Private <br/>
            <span className='text-gray-200 font-bold text-xl'>
                Things
            </span>
            </p>
        </Link>
        </div>
            <Link className='font-bold w-full p-2 pr-5 hover:bg-slate-700 transition-all hover:text-gray-100' to={"/"}>Home</Link>
            <Link className='font-bold w-full p-2 pr-5 hover:bg-slate-700 transition-all hover:text-gray-100' to={"/authen"}>Account</Link>
        </div>
    </div>
  )
}

export default Header