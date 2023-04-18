import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({item}) => {
  return (
    <Link to={"/tag/"+item.meta_name} className={`px-2 py-1 hover:shadow-md transition-all`} style={{backgroundColor: `${item.color}`}}>
    <p className='text-sm text-gray-100'>
    {item.name}
    </p>
    </Link>
  )
}

export default Tag