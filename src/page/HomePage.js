import React, {useState, useEffect} from 'react'
import { getArticleByKey } from '../api/ArticleAPI'
import { CATEGORIES, last_edited, LIST_ARTICLE, TAGS } from '../api/constants'
import ArticleList from '../components/ArticleList'
import { useStore } from '../store'

const HomePage = () => {
    const [state, dispatch] = useStore()
    const {sort} = state

    const [articleItems, setArticles] = useState(JSON.parse(window.localStorage.getItem(LIST_ARTICLE)) && [])

    useEffect(()=>{
        const getArticles = async () => {
            const result = await getArticleByKey("articles",sort);
            const result_tag = await getArticleByKey("tags");
            const result_cate = await getArticleByKey("categories");
            if(result.status == 200){
                const content = result.data.content
                window.localStorage.setItem(LIST_ARTICLE, JSON.stringify(content))
                setArticles(content)
            }
            if(result_tag.status == 200){
                const tags = result_tag.data
                window.localStorage.setItem(TAGS, JSON.stringify(tags))
            }
            if(result_cate.status == 200){
                const cates = result_cate.data
                window.localStorage.setItem(CATEGORIES, JSON.stringify(cates))
            }
        }
        getArticles()
    },[sort])
  return (
    <>
        <ArticleList articles={articleItems} />
    </>
  )
}

export default HomePage