import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleByKey } from '../api/ArticleAPI'
import { CATEGORIES, CATE_TYPE, LIST_ARTICLE, TAGS, TAG_TYPE } from '../api/constants'
import ArticleList from '../components/ArticleList'
import CategoryList from '../components/CategoryList'
import TagListFilter from '../components/TagListFilter'
import { useStore } from '../store'

const ArticleByFilter = () => {
    const { name } = useParams()
    const { type } = useParams()
    const [state, dispatch] = useStore()
    const {sort} = state
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem(LIST_ARTICLE)) ?? [])
    const [list_type, setListType] = useState([])

    useEffect(() => {
        const getAllArticlesByFilter = async () => {
            if (name != null || type != null) {
                switch (type) {
                    case TAG_TYPE:
                        const result_tag = await getArticleByKey("tag=" + name, sort);
                        let data_tag = result_tag.data.content
                        console.log(data_tag)
                        window.localStorage.setItem(LIST_ARTICLE, JSON.stringify(data_tag))
                        setData(data_tag)
                        setListType(JSON.parse(window.localStorage.getItem(TAGS)))
                        break;
                    case CATE_TYPE:
                        const result_cate = await getArticleByKey("category=" + name, sort);
                        let data_cate = result_cate.data.content
                        console.log(data_cate)
                        window.localStorage.setItem(LIST_ARTICLE, JSON.stringify(data_cate))
                        setData(data_cate)
                        setListType(JSON.parse(window.localStorage.getItem(CATEGORIES)))
                        break;
                }

            }
        }

        getAllArticlesByFilter()
    }, [name, type, sort])

    const ListType = () => {
        switch (type) {
            case TAG_TYPE:
                return <TagListFilter items={list_type}/>
            case CATE_TYPE:
                return <CategoryList items={list_type}/>
        }
    }
    return (
        <div>
        <ListType />
        <ArticleList articles={data} />
        </div>
    )
}

export default ArticleByFilter