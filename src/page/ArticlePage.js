import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleByKey, getArticleByMetaName } from '../api/ArticleAPI'
import { HOST } from '../api/constants'
import ArticleCategory from '../components/ArticleCategory'
import ArticleSideBar from '../components/ArticleSideBar'
import TagList from '../components/TagList'

const ArticlePage = () => {
  const { meta_name } = useParams()
  const [article, setArticle] = useState({})
  
  useEffect(() => {
    const getArticle = async () => {
      const result = await getArticleByKey("article="+meta_name);
      if (result.status == 200) {
        let data = result.data
        setArticle(data)
      }
    }
    getArticle()
  }, [])

  return (
 
      <div className='w-full flex flex-col md:flex-row'>
        <div className='w-full md:w-2/5 m-auto'>
          <img src={HOST + "api/public/image/" + article.featured_image} className="w-fit object-cover" />
          <div className='w-full my-2'>
          {
            article.tags?.length > 0 &&
            <TagList items={article.tags} style="text-gray-100 font-bold" />
          }
            <p className='w-full text-gray-900 text-xl font-bold'>{article.title}</p>
            <p className='w-full text-gray-800 text-md my-2'>{article.content}</p>
          </div>
          {
            article.category != null &&
            <ArticleCategory item={article.category} />
          }
        </div>
        <div className='w-full md:w-1/5'>
          <ArticleSideBar />
        </div>

      </div>
  )
}

export default ArticlePage