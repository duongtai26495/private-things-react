import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({item, type}) => {
  return (
    <Link to={"/category/"+item.meta_name} style={{backgroundColor: `${item.color}`}} className={`px-2 py-1  bg-opacity-80 w-fit text-white mx-1 md:mx-2 text-sm ${type == "card" ? 'absolute' : 'block'} top-2 left-1`}>{item.name}</Link>
  )
}

export default Category