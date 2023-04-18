import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCategory = ({item}) => {
  return (
    <Link to={"/category/"+item.meta_name}>
    <p className={'w-fit px-2 py-1 text-gray-100 font-bold'} style={{backgroundColor: `${item.color}`}}>{item.name}</p>
    </Link>
  )
}

export default ArticleCategory