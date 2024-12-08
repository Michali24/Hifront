import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryList } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';

export default function CategoryArticle() {

    const listCategoryArticle = useSelector((state) => state.article.CategoryList);
    const dispatch = useDispatch();
    const navigate=useNavigate();


    useEffect(() => {
        dispatch(getAllCategoryList());
    }, [dispatch]);

    function seeArticlesListByCategory(id) {
        navigate(`/Article/${id}`);
    }

    return (
        <>
            <h2>CategoryArticle</h2>
            <ul>
                {listCategoryArticle.map((category) => (
                    <li key={category.id}>
                        {category.categoryName}
                        <button onClick={() => seeArticlesListByCategory(category.id)}>to see article</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
