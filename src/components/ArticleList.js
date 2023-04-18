import React, { useEffect, useState } from 'react'
import { getAllDisplayArticles } from '../api/ArticleAPI'
import ArticleCard from './ArticleCard'
import FilterArticle from './FilterArticle'

const ArticleList = ({ articles }) => {

    return (
        <>
            <FilterArticle />
            <div className='w-full columns-2 md:columns-3 lg:columns-5 gap-3'>
                {
                    articles?.length > 0 ?
                        articles?.map(article => (
                            <ArticleCard key={article.id} item={article} />
                        ))
                        :
                        ""
                }
            </div>
        </>
    )
}

export default ArticleList