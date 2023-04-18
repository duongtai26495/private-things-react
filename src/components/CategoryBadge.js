import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBadge = ({item}) => {
  return (
    <Link to={"/category/"+item.meta_name}>
        <p className='px-3 py-2 rounded text-gray-100 font-bold' style={{backgroundColor: `${item.color}`}}>{item.name}</p>
    </Link>
  )
}

export default CategoryBadge