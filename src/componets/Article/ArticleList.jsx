// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { getArticleListByCategoryId } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';

// export default function Article() {

//     const navigate = useNavigate();
//     const { id } = useParams();

//     const ArticleListByCategoryId = useSelector((state) => state.article.ArticleList);
//     console.log("ArticleListByCategoryId: ", ArticleListByCategoryId)
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getArticleListByCategoryId(id));
//     }, [dispatch]);

//     function seeArticlesDetailes(Id) {
//         navigate(`/Detailes/${Id}`);
//     }

//     return (
//         <>
//             <div>Article</div>
//             <ul>
//                 {ArticleListByCategoryId.map((articleCategory) => (
//                     <li key={articleCategory.id}>
//                         <p>title:{articleCategory.title}</p>
//                         <p>description: {articleCategory.description}</p>
//                         <button onClick={() => seeArticlesDetailes(articleCategory.id)}>to see details'article</button>
//                         <button onClick={() => navigate('/CateforyArticle')}>to return to CateforyArticle</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }


//הקוד בעיצוב כרטיסיות כל מאמר
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { getArticleListByCategoryId } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';
// import './Article.css';  // Import the CSS for styling

// export default function Article() {

//     const navigate = useNavigate();
//     const { id } = useParams();

//     const ArticleListByCategoryId = useSelector((state) => state.article.ArticleList);
//     console.log("ArticleListByCategoryId: ", ArticleListByCategoryId);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getArticleListByCategoryId(id));
//     }, [dispatch, id]);

//     function seeArticlesDetailes(Id) {
//         navigate(`/Detailes/${Id}`);
//     }

//     return (
//         <div className="category-container">
//             <h1>Articles</h1>
//             <div className="category-list">
//                 {ArticleListByCategoryId.map((articleCategory) => (
//                     <div className="category-card" key={articleCategory.id}>
//                         <div className="card-content">
//                             <h2>{articleCategory.title}</h2>
//                             <p>{articleCategory.description}</p>
//                         </div>
//                         <div className="card-actions">
//                             <button onClick={() => seeArticlesDetailes(articleCategory.id)}>
//                                 See Details
//                             </button>
//                             <button onClick={() => navigate('/CateforyArticle')}>
//                                 Return to Category
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


//14-12-24
//עובדדדדדדדדדדדדד
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { getArticleListByCategoryId } from '../../slices/ArticleSlice';
// import './Article.css';  // Import the CSS for styling

// export default function Article() {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const dispatch = useDispatch();

//     // שליפת המאמרים לפי קטגוריה מה-Redux
//     const ArticleListByCategoryId = useSelector((state) => state.article.ArticleList);

//     // קריאה לפונקציה שמביאה את המאמרים לפי קטגוריה
//     useEffect(() => {
//         dispatch(getArticleListByCategoryId(id));
//     }, [dispatch, id]);

//     // מסנן את המאמרים כך שיציגו רק את אלו ש-status שלהם הוא false
//     const filteredArticles = ArticleListByCategoryId.filter((article) => article.status === true);

//     // ניווט לדף הפרטים של מאמר
//     function seeArticlesDetailes(Id) {
//         navigate(`/Detailes/${Id}`);
//     }

//     return (
//         <div className="category-container">
//             <div className="category-list">
//                 {filteredArticles.map((articleCategory) => (
//                     <div className="category-card" key={articleCategory.id}>
//                         <div className="card-content">
//                             <h2>{articleCategory.title}</h2>
//                             <p>{articleCategory.description}</p>

//                         </div>
//                         <div className="card-actions">
//                             <button onClick={() => seeArticlesDetailes(articleCategory.id)}>
//                                 See Details
//                             </button>
//                             <button onClick={() => navigate('/CateforyArticle')}>
//                                 Return to Category
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

//נסיון עיצוב
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { getArticleListByCategoryId } from '../../slices/ArticleSlice';
// import './Article.css';  // Import the CSS for styling

// export default function Article() {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     console.log('id-----',id);

//     const dispatch = useDispatch();

//     // שליפת המאמרים לפי קטגוריה מה-Redux
//     const ArticleListByCategoryId = useSelector((state) => state.article.ArticleList);

//     // קריאה לפונקציה שמביאה את המאמרים לפי קטגוריה
//     useEffect(() => {
//         dispatch(getArticleListByCategoryId(id));
//     }, [dispatch, id]);

//     // מסנן את המאמרים כך שיציגו רק את אלו ש-status שלהם הוא true
//     const filteredArticles = ArticleListByCategoryId.filter((article) => article.status === true);

//     // ניווט לדף הפרטים של מאמר
//     function seeArticlesDetailes(Id) {
//         navigate(`/Detailes/${Id}`);
//     }

//     return (
//         <div className='articles-page-container'>
//             <h2 className="articles-header">Articles</h2>
//             <div className="category-grid">
//                 <div className="category-list">
//                     {filteredArticles.map((articleCategory) => (
//                         <div className="category-card" key={articleCategory.id}>
//                             <div className="card-content">
//                                 <h2>{articleCategory.title}</h2>
//                                 <p>{articleCategory.description}</p>
//                             </div>
//                             <div className="card-actions">
//                                 <button onClick={() => seeArticlesDetailes(articleCategory.id)}>
//                                     See Details
//                                 </button>
//                                 <button onClick={() => navigate('/CateforyArticle')}>
//                                     Return to Category
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


//הקוד של ינון
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getArticleListByCategoryId } from '../../slices/ArticleSlice';
import './Article.css';  // Import the CSS for styling

export default function Article() {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log('id-----', id);

    const dispatch = useDispatch();

    // שליפת המאמרים לפי קטגוריה מה-Redux
    const ArticleListByCategoryId = useSelector((state) => state.article.ArticleList);

    // קריאה לפונקציה שמביאה את המאמרים לפי קטגוריה
    useEffect(() => {
        dispatch(getArticleListByCategoryId(id));
    }, [dispatch, id]);

    // מסנן את המאמרים כך שיציגו רק את אלו ש-status שלהם הוא true
    const filteredArticles = ArticleListByCategoryId.filter((article) => article.status === true);

    // ניווט לדף הפרטים של מאמר
    function seeArticlesDetailes(Id) {
        navigate(`/Detailes/${Id}`);
    }

    return (
        <div className='articles-page-container-list'>
            <h2 className="articles-header">Articles</h2>
            <div className="category-grid">
                <div className="category-list">
                    {filteredArticles.map((articleCategory) => (
                        <div className="category-card-list" key={articleCategory.id}>
                            <div className="card-content-list">
                                <h2>{articleCategory.title}</h2>
                                <p>{articleCategory.description}</p>
                            </div>
                            <div className="card-btn">
                                <button className="btn-actions" onClick={() => seeArticlesDetailes(articleCategory.id)}>
                                    See Details
                                </button>
                                <button className="btn-actions" onClick={() => navigate('/CateforyArticle')}>
                                    Return to Category
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}