import React from 'react'
import TagBadge from './TagBadge'

const TagListFilter = ({items}) => {
    return (
        <div className={`w-full flex flex-row gap-2 mt-2`}>
            {
                items?.map((item) => (
                    <TagBadge key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default TagListFilter