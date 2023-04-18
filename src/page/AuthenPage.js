import React, { useEffect } from 'react'
import AuthenForm from '../components/authen/AuthenForm'
import { useStore } from '../store'
import Profile from '../components/authen/Profile'
import { ISLOGIN, LOGIN_STATE } from '../api/constants'

const AuthenPage = () => {
  
  const [state, dispatch] = useStore()
  const {login_state} = state
  
  const ComponentAccount = () => {
    if(login_state || window.localStorage.getItem(ISLOGIN)){
      return (<Profile />)
    }else{
      return (<AuthenForm />)
    }
  }

  useEffect(()=>{
    ComponentAccount()
  },[login_state])


  return (
    <div className='w-full min-h-full'>
      <ComponentAccount />
    </div>
  )
}

export default AuthenPage