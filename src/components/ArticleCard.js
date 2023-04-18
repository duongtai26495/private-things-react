import React from 'react'
import { Link } from 'react-router-dom'
import { HOST } from '../api/constants'
import AuthorCard from './AuthorCard'
import Category from './Category'
import TagList from './TagList'

const ArticleCard = ({ item }) => {

    const article = item
    const author = item.author
    return (
        <div className='w-full flex flex-col break-inside-avoid shadow-sm hover:shadow-md transition-all rounded overflow-hidden'>
            <div className={`flex flex-col`} >
                <div className='relative'>
                <Category item={article.category} type="card"/>
                <Link to={"/article/" + item.meta_name} >
                <img src={HOST + "api/public/image/" + article.featured_image} className={`w-full object-cover h-fit max-h-72`} />
                </Link>
                </div>
            </div>
            {
                article.tags?.length > 0 && 
                <TagList items={article.tags} style={"px-2"} />
            }
            
            <Link to={"/article/" + item.meta_name} className='w-full p-2'>
                <p className='w-full text-md font-bold'>{article.title.length > 70 ? article.title.slice(0, 70) + "..." : article.title}</p>
                <p className='w-full text-sm my-2 text-gray-600'>{article.content.length > 130 ? article.content.slice(0, 130) + "..." : article.content}</p>
                
            </Link>
            
            <div className='w-full justify-between items-center flex flex-row bg-slate-200 mt-1'>
            <AuthorCard item={author} />
            <p className='text-gray-700 italic text-xs flex-nowrap w-full justify-end flex flex-row px-2'>{article.last_edited.slice(0,8)}</p>
            </div>
        </div>
    )
}

export default ArticleCard