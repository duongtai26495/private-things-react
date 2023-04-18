import React from 'react'
import CategoryBadge from './CategoryBadge'

const CategoryList = ({ items }) => {
    return (
        <div className='w-full flex flex-row flex-wrap gap-2'>

            {

                items?.length ?
                    items?.map(item => (
                        <CategoryBadge key={item.id} item={item} />
                    ))
                    : ""
            }
        </div>
    )
}

export default CategoryList