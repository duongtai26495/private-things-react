import React from 'react'
import Tag from './Tag'

const TagList = ({ items, style }) => {
    return (
        <div className={`w-full flex flex-row gap-2 mt-2 ${style}`}>
            {
                items?.map((item) => (
                    <Tag key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default TagList