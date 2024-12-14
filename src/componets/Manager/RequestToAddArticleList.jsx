//GPT 25-11-24
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAricle,getarticleWithStatusFalse,putAricle} from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';

export default function RequestToAddArticleList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const RegisterArticleList = useSelector((state) => state.article.ArticleList);


    console.log('id:', RegisterArticleList);

    // useEffect(() => {
    //     dispatch(getAllArticleList());
    // }, [dispatch]);

    useEffect(() => {
        dispatch(getarticleWithStatusFalse());
    }, [dispatch]);


    function deleteRequsetArticle(id) {
        console.log('try');
        dispatch(deleteAricle(id));
        console.log('sucseess');
    };

    return (
        <>
            <div>RequestToAddArticleList</div>
            {RegisterArticleList && RegisterArticleList.length === 0 ? (
                <p >  -אין בקשות להוספת מאמרים -404- אין נתונים להציג</p> // הודעה אם אין נתונים
            ) : (
                <ul>
                    {RegisterArticleList
                        ?.filter((articleRegister) => articleRegister.status === false)
                        .map((articleRegister) => (
                            <li key={articleRegister.id}>
                                {articleRegister.title} --
                                {articleRegister.subject} --
                                {articleRegister.description}<br></br>
                                articleRegister.id:{articleRegister.id}<br></br>
                                articleRegister.categoryId: {articleRegister.categoryId}<br></br>
                                {/* <button
                                onClick={() =>
                                    // navigate(`DetailRequsetArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}
                                    navigate(`DetailRequsetArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}
                                    >
                                See the request article
                            </button> */}
                                <button onClick={() => navigate(`/RequestToAddArticleList/DetailRequestArticle/${articleRegister.id}/${articleRegister?.categoryId}`)}> See the request article </button>
                                <button
                                    onClick={() => deleteRequsetArticle(articleRegister.id)}>
                                    Delete Request Article X
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </>
    );
}



//GPT-24-11-24
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList, deleteAricle } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';

// export default function RequestToAddArticleList() {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getAllArticleList());
//     }, [dispatch]);

//     function deleteRequsetArticle(id) {
//         console.log('try');
//         dispatch(deleteAricle(id));
//         console.log('sucseess');
//     };

//     return (
//         <>
//             <div>RequestToAddArticleList</div>
//             <ul>
//                 {/* ?.- מוודא ש-RegisterArticleList אינו null או undefined לפני שמנסים לגשת אליו.*/}
//                 {RegisterArticleList
//                     // filter-מסנן את המאמרים כך שיוצגו רק אלו שסטטוס שלהם הוא false
//                     ?.filter((articleRegister) => articleRegister.status === false) // סינון המאמרים שהסטטוס שלהם שווה ל-false
//                     .map((articleRegister) => (
//                         <li key={articleRegister.id}>
//                             {articleRegister.title} --
//                             {articleRegister.subject} --
//                             {articleRegister.description}
//                             <button onClick={() => navigate(`DetailRequsetArticle/${articleRegister.id}`)}>see the requset article</button>
//                             <button onClick={() => deleteRequsetArticle(articleRegister.id)}>deleteRequsetArticle X</button>
//                             </li>
//                     ))}
//             </ul>
//         </>
//     );
// }

//DetailRequsetArticle

//הקוד לפני שינוי ועדכון
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getRegisterArticles } from '../../slices/AddArticleSlice';
// import { useNavigate } from 'react-router-dom';

// export default function RequestToAddArticleList() {
//     const RegisterArticleList = useSelector((state) => state.AddArticle.ArticleList);
//     const dispatch = useDispatch();
//     const navigate=useNavigate();

//     useEffect(() => {
//         dispatch(getRegisterArticles());
//     }, [dispatch]);

//     return (
//         <>
//             <div>RequestToAddArticleList</div>
//             <ul>
//                 {/* ?.- מוודא ש-RegisterArticleList אינו null או undefined לפני שמנסים לגשת אליו.*/}
//                 {RegisterArticleList
//                 // filter-מסנן את המאמרים כך שיוצגו רק אלו שסטטוס שלהם הוא false
//                     ?.filter((articleRegister) => articleRegister.statuse === false) // סינון המאמרים שהסטטוס שלהם שווה ל-false
//                     .map((articleRegister) => (
//                         <li key={articleRegister.id}>
//                             {articleRegister.artical_name} --
//                             {articleRegister.subject} --
//                             {articleRegister.description}
//                             <button onClick={()=>navigate(`DetailOfRequesArticle/${articleRegister.id}`)}>see the requset article</button>
//                         </li>
//                     ))}
//             </ul>
//         </>
//     );
// }

//my code !----------------
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getRegisterArticles } from '../../slices/AddArticleSlice';


// export default function RequestToAddArticleList() {
//     const RegisterArticleList = useSelector((state) => state.AddArticle.ArticleList);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getRegisterArticles());
//     }, [dispatch]);

//     return (
//         <>

//             <div>RequestToAddArticleList</div>
//             <ul>
//                 {/* --תנאי-- */}
//                 {/* אם הסטטוס שווה T */}
//                 {RegisterArticleList.map((articleRegister) => (
//                     <li key={articleRegister.id}>
//                         {articleRegister.statuse}
//                         {articleRegister.artical_name}--
//                         {articleRegister.subject}--
//                         {articleRegister.description}--
//                         {/* <button onClick={() => navigate('/CateforyArticle')}>to return to CateforyArticle</button> */}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }