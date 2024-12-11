import React , { useEffect }from 'react'
import {useDispatch} from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import {getArticleListByCategoryId} from '../../slices/ArticleSlice';
import { useSelector } from 'react-redux';

export default function Article() {

    const navigate = useNavigate();
    const { id } = useParams();

    const ArticleListByCategoryId=useSelector((state)=>state.article.ArticleList);
    console.log("ArticleListByCategoryId: ",ArticleListByCategoryId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticleListByCategoryId(id));
    }, [dispatch]);

    function seeArticlesDetailes(Id){
        navigate(`/Detailes/${Id}`);
    }

    return (
        <>
            <div>Article</div>
            <ul>
                {ArticleListByCategoryId.map((articleCategory) => (
                    <li key={articleCategory.id}>
                        {articleCategory.title}
                        {articleCategory.img_author_of_article}
                        <button onClick={() => seeArticlesDetailes(articleCategory.id)}>to see details'article</button>
                        <button onClick={() => navigate('/CateforyArticle')}>to return to CateforyArticle</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
