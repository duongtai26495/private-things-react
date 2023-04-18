import React from 'react'
import { getArticleByKey } from '../api/ArticleAPI'
import { created_at_asc, created_at_desc, last_edited, LIST_ARTICLE, SORT, title_a_z, title_z_a } from '../api/constants';
import { useStore } from '../store';
import { updateSort } from '../store/actions';

const FilterArticle = () => {

    const [state, dispatch] = useStore()
    const {sort} = state

    const getArticleSort = async (value) => {
        const result = await getArticleByKey("articles", value);
        const data = result.data.content
        window.localStorage.setItem(LIST_ARTICLE, JSON.stringify(data))
        window.localStorage.setItem(SORT, value)
        dispatch(updateSort(value))
    }

    return (
        <select className='w-fit my-2 mb-3' value={sort} onChange={(e)=> getArticleSort(e.target.value)}>
            <option value={title_a_z}>{"A -> Z"}</option>
            <option value={title_z_a}>{"Z -> A"}</option>
            <option value={last_edited}>{"Last edtied"}</option>
            <option value={created_at_desc}>{"Newest"}</option>
            <option value={created_at_asc}>{"Oldest"}</option>
        </select>
    )
}

export default FilterArticle