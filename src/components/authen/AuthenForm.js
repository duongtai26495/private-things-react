import React, { useEffect } from 'react'
import SignIn from './SignIn'
import { useStore } from '../../store'

const AuthenForm = () => {
  
  return (
    <div className='w-full flex flex-row'>
    <div className='w-full lg:w-3/5'>
    <SignIn />
    </div>
    <div className='w-2/5 hidden lg:block relative'>
        <img className='min-h-screen w-full absolute top-0 left-0 object-cover' src={"https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1454&q=80"} />
    </div>
    </div>

  )
}

export default AuthenForm