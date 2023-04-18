import React from 'react'
import { Link } from 'react-router-dom'

const TagBadge = ({ item }) => {
    return (
        <Link to={"/tag/" + item.meta_name}>
            <p className='px-3 py-2 rounded text-gray-100 font-bold' style={{ backgroundColor: `${item.color}` }}>{item.name}</p>
        </Link>
    )
}

export default TagBadge