import React from 'react'
import { Link } from 'react-router-dom'
import { HOST } from '../api/constants'

const AuthorCard = ({item}) => {
  return (
    <Link to={'/author/'+item.uname} className='w-full flex flex-row items-center gap-3 p-2'>
    <img src={HOST + "api/public/image/profile/" + item.profile_image} className={`w-10 h-10 rounded-full object-cover`} />
    <p className='font-bold text-sm'>{item.name}</p>
</Link>
  )
}

export default AuthorCard