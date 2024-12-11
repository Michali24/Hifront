import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getArticleById } from '../../slices/ArticleSlice';
import { useSelector } from 'react-redux';

export default function DetailArticle() {

    const navigate = useNavigate();
    const { id } = useParams();

    const ArticleDetailes = useSelector((state) => state.article.Article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticleById(id));
    }, [dispatch]);

    return (
        <>
            <div>DetailArticle</div>

            <h1>Details:</h1>
            {ArticleDetailes.title}
            {ArticleDetailes.author}
            {ArticleDetailes.content}
            {ArticleDetailes.description}
            {ArticleDetailes.PDF_article_file}
            {ArticleDetailes.img_author_of_article}

            <button onClick={() => navigate(`/Article/${ArticleDetailes.categoryOfArticles?.id}`)}>to return article</button>


        </>
    )
};
