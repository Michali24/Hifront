//gpt2
// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getArticleById,putAricle } from '../../slices/ArticleSlice';

// export default function DetailRequsetArticle() {
//     const { articleId, categoryId } = useParams(); // שליפת מזהה הכתבה מתוך ה-URL
//     const dispatch = useDispatch(); // כלי לשליחת פעולות ל-Redux
//     const navigate = useNavigate(); // כלי לניווט בין דפי האפליקציה

//     // שליפת פרטי הכתבה מתוך Redux
//     const DetailArticleRequest = useSelector((state) => state.article.Article);

//     // // קריאה ל-Redux להבאת פרטי הכתבה
//     // useEffect(() => {
//     //     if (id) {
//     //         dispatch(getArticleById(id));
//     //     }
//     // }, [dispatch, articleId]); // תלות ב-id וב-dispatch להבטיח שהפונקציה תרוץ בעת שינוי ה-id

//     useEffect(() => {
//         if (articleId) {
//             dispatch(getArticleById(articleId)); // שימוש ב-articleId ולא ב-id
//         }
//     }, [dispatch, articleId]);
    
    
//     // פונקציה לאישור המאמר
//     const approval = () => {
//         console.log('aproval');
//         if (!DetailArticleRequest) {
//             console.error('Article details are not available.');
//             return;
//         }

//         // יצירת אובייקט מאמר חדש עם הנתונים מה-Redux
//         const newArticle = {
//             id:articleId,
//             title: DetailArticleRequest.title,
//             author:DetailArticleRequest.author , // ניתן להחליף לשם משתמש דינמי
//             content: DetailArticleRequest.content,
//             description: DetailArticleRequest.description,
//             status:false,
//             categoryId:categoryId,
//             pdfarticleFile:DetailArticleRequest.pdfarticleFile,
//         };

//         console.log(' new article :', newArticle);
//         console.log('category id:',categoryId);
        
//         // שליחה ל-Redux לאישור המאמר
//         dispatch(putAricle(newArticle));
//         console.log('article correct and send ok!');

//         // נווט חזרה לעמוד הבית או לכל עמוד אחר
//         // navigate('/');
//     };

//     return (
//         <>
//             <div>פרטי הבקשה למאמר</div>
//             {DetailArticleRequest ? (
//                 <>
//                     <p>כותרת: {DetailArticleRequest.title}</p>
//                     <p>תוכן: {DetailArticleRequest.content}</p>
//                     <p>תיאור: {DetailArticleRequest.description}</p>
//                     <h1>לסרד את ההצגה של המאמר</h1>
//                     <p>the article:{DetailArticleRequest.pdfarticleFile}</p>
//                     <button onClick={approval}>אשר מאמר</button>
//                 </>
//             ) : (
//                 <p>טוען נתונים...</p>
//             )}
//             <button onClick={() => navigate('/WhatsAppGroup')}>Backe</button>
//        </>
//     );
// }

//עיצוב נוסף שיחזור לדץף הקודם שממנו הגיע לאחר לחיצה איושר
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleById, putAricle } from '../../slices/ArticleSlice';

export default function DetailRequsetArticle() {
    const { articleId, categoryId } = useParams(); // שליפת מזהה הכתבה מתוך ה-URL
    const dispatch = useDispatch(); // כלי לשליחת פעולות ל-Redux
    const navigate = useNavigate(); // כלי לניווט בין דפי האפליקציה

    // שליפת פרטי הכתבה מתוך Redux
    const DetailArticleRequest = useSelector((state) => state.article.Article);

    useEffect(() => {
        if (articleId) {
            dispatch(getArticleById(articleId)); // שימוש ב-articleId ולא ב-id
        }
    }, [dispatch, articleId]);
    
    // פונקציה לאישור המאמר
    const approval = () => {
        if (!DetailArticleRequest) {
            console.error('Article details are not available.');
            return;
        }

        // יצירת אובייקט מאמר חדש עם הנתונים מה-Redux
        const newArticle = {
            id: articleId,
            title: DetailArticleRequest.title,
            author: DetailArticleRequest.author, // ניתן להחליף לשם משתמש דינמי
            content: DetailArticleRequest.content,
            description: DetailArticleRequest.description,
            status: false,
            categoryId: categoryId,
            pdfarticleFile: DetailArticleRequest.pdfarticleFile,
        };

        console.log('new article:', newArticle);
        console.log('category id:', categoryId);
        
        // שליחה ל-Redux לאישור המאמר
        dispatch(putAricle(newArticle));
        console.log('article correct and send ok!');

        // חזרה לדף הקודם בהיסטוריית הניווט
        navigate(-1);
    };

    return (
        <>
            <div>פרטי הבקשה למאמר</div>
            {DetailArticleRequest ? (
                <>
                    <p>כותרת: {DetailArticleRequest.title}</p>
                    <p>תוכן: {DetailArticleRequest.content}</p>
                    <p>תיאור: {DetailArticleRequest.description}</p>
                    <h1>לסרד את ההצגה של המאמר</h1>
                    <p>המאמר: {DetailArticleRequest.pdfarticleFile}</p>
                    <button onClick={approval}>אשר מאמר</button>
                </>
            ) : (
                <p>טוען נתונים...</p>
            )}
            {/* כפתור חזרה לדף הקודם */}
            <button onClick={() => navigate(-1)}>חזור לדף הקודם</button>
        </>
    );
}

//GPT1
// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getArticleById, postArticle,putAricle } from '../../slices/ArticleSlice';

// export default function DetailRequsetArticle() {
//     const { id } = useParams(); // שליפת מזהה הכתבה מתוך ה-URL
//     const dispatch = useDispatch(); // כלי לשליחת פעולות ל-Redux
//     const navigate = useNavigate(); // כלי לניווט בין דפי האפליקציה

//     // שליפת פרטי הכתבה מתוך Redux
//     const DetailArticleRequest = useSelector((state) => state.article.Article);

//     // קריאה ל-Redux להבאת פרטי הכתבה
//     useEffect(() => {
//         if (id) {
//             dispatch(getArticleById(id));
//         }
//     }, [dispatch, id]); // תלות ב-id וב-dispatch להבטיח שהפונקציה תרוץ בעת שינוי ה-id

//     // פונקציה לאישור המאמר
//     const approval = () => {
//         console.log('aproval');
//         if (!DetailArticleRequest) {
//             console.error('Article details are not available.');
//             return;
//         }

//         // יצירת אובייקט מאמר חדש עם הנתונים מה-Redux
//         const newArticle = {
//             id,
//             title: DetailArticleRequest.title,
//             author:DetailArticleRequest.author , // ניתן להחליף לשם משתמש דינמי
//             content: DetailArticleRequest.content,
//             description: DetailArticleRequest.description,
//             status: true,
//             categoryId: id,
//         };

//         console.log(' new article :', newArticle);

//         // שליחה ל-Redux לאישור המאמר
//         dispatch(putAricle(newArticle));
//         console.log('article correct and send ok!');

//         // נווט חזרה לעמוד הבית או לכל עמוד אחר
//         // navigate('/');
//     };

//     return (
//         <>
//             <div>פרטי הבקשה למאמר</div>
//             {DetailArticleRequest ? (
//                 <>
//                     <p>כותרת: {DetailArticleRequest.title}</p>
//                     <p>תוכן: {DetailArticleRequest.content}</p>
//                     <p>תיאור: {DetailArticleRequest.description}</p>
//                     <button onClick={approval}>אשר מאמר</button>
//                 </>
//             ) : (
//                 <p>טוען נתונים...</p>
//             )}
//         </>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { getArticleById, postArticle } from '../../slices/ArticleSlice';



// export default function DetailRequsetArticle() {

//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate()
//     // const[NewArticle,setNewArticle]=useState({});

//     const DetailArticleRequest = useSelector((state) => state.article.Article);

//     // useEffect(() => {
//     //     // קריאה לפעולה שמביאה מאמר לפי מזהה
//     //     if (id) {
//     //         dispatch(getArticleById(id));
//     //     }
//     // }, [dispatch, id]); // מוסיפים את id לתלות כך שה-Effect ירוץ כש-id משתנה

//     useEffect(() => {
//         dispatch(getArticleById(id));
//     }, [dispatch]);
    

//     function approval(id) {
//         console.log('sucsees come1');
        
//         // יצירת מאמר חדש לפי הפרטים הקיימים
//         const newArticle = {
//             title:DetailArticleRequest.title,
//             author: 'm',
//             content:DetailArticleRequest.content,
//             description:DetailArticleRequest.description,
//             status: true,
//             categoryId:id,
//         };
//         console.log('new article',newArticle);
        
//         console.log('commme2');
        
//         // שליחת המאמר ל-Redux
//         dispatch(postArticle(newArticle));
//         console.log('מאמר חדש אושר ונשלח בהצלחה!');

//         // // אפשר להוסיף ניווט בחזרה או פעולה אחרת
//         // navigate('/'); // נווט חזרה לעמוד הבית לדוגמה
//     }

//     return (
//         <>
//             <div>DetailOfRequesArticle</div>
//             {DetailArticleRequest.title}--
//             {DetailArticleRequest.content}--
//             {DetailArticleRequest.description}--
//             {/* {DetaikArticleRequest.author} */}
//             <button onClick={()=>approval(id)}>approval</button>
//             {/* <button onClick={()=>navigate('')}>return</button> */}
//         </>
//     )
// }



//GPT-לפני שעשיתי שינויים
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getIdOfAricle, postArticle } from '../../slices/ArticleSlice';
// import { getRegisterArticlesByID } from '../../slices/AddArticleSlice';

// export default function DetailRequsetArticle() {
//     const { id } = useParams(); // שליפת ה-ID מה-URL (משתמש במאפייני Router)
//     const dispatch = useDispatch(); // יצירת dispatch לשליחת פעולות ל-Redux

//     // שליפת המאמר המבוקש וה-ID של הקטגוריה מתוך הסטייט הגלובלי
//     const request = useSelector((state) => state.AddArticle.AddArticleObj);
//     const articleId = useSelector((state) => state.article.id);

//     // סטייט מקומי לאחסון האובייקט החדש
//     const [newArticle, setNewArticle] = useState({});

//     // קריאה לנתוני המאמר לפי ה-ID שהתקבל
//     useEffect(() => {
//         if (id) {
//             console.log("Fetching article data with ID:", id);
//             dispatch(getRegisterArticlesByID(id)); // קריאה לנתוני המאמר
//         }
//     }, [dispatch, id]);

//     // קריאה ל-Redux לשליפת ה-ID של הקטגוריה לאחר טעינת `request`
//     useEffect(() => {
//         if (request?.id) {
//             console.log("Fetching category ID for article:", request.id);
//             dispatch(getIdOfAricle(request.id)); // קריאה לנתוני ה-ID של הקטגוריה
//         }
//     }, [dispatch, request]);

//     // בדיקות נתונים ופעולת אישור המאמר
//     function approval() {
//         // בדיקה האם כל הנתונים הנדרשים קיימים
//         if (!request || !articleId) {
//             console.error("Missing data:", { request, articleId });
//             return;
//         }

//         // יצירת אובייקט חדש למאמר
//         const newArticleData = {
//             title: request.artical_name,
//             author: "m", // ניתן להחליף בהתאם לדרישה
//             content: request.arical_text,
//             description: request.description,
//             category: articleId
//         };

//         console.log("Submitting new article:", newArticleData);
//         setNewArticle(newArticleData); // עדכון הסטייט המקומי
//         dispatch(postArticle(newArticleData)); // שליחה ל-Redux
//     }

//     // הצגת המאמר והכפתור
//     return (
//         <>
//             <div>DetailRequestArticle</div>
//             <div>
//                 <p>{request?.artical_name || "No Article Name"}</p>
//                 <p>{request?.subject || "No Subject"}</p>
//                 <p>{request?.description || "No Description"}</p>
//             </div>
//             <button onClick={approval}>Approve Article</button>
//         </>
//     );
// }



// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { getRegisterArticlesByID } from '../../slices/AddArticleSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { postArticle } from '../../slices/ArticleSlice';


// export default function DetailRequsetArticle() {

//     const { id } = useParams();
//     const request = useSelector((state) => state.AddArticle.AddArticleObj);
//     const dispatch = useDispatch();
//     const[newArticle,setNewArticle]=useState({});

//     useEffect(() => {
//         dispatch(getRegisterArticlesByID(id));
//     }, [dispatch]);


//     function approval() {
//         const articleId=useSelector((state)=>state.article.id);
//         setNewArticle={
//             title:request.artical_name,
//             //לשלוף את שם המתמש ...
//             // author:,
//             content:request.arical_text,
//             description:request.description,
//             categoty:articleId
//         }
//         dispatch(postArticle(newArticle));
//     }

//     return (
//         <>
//             <div>DetailRequestArticke</div>
//             {request.artical_name}--
//             {request.subject}--
//             {request.description}--
//             {/* arical_text */}
//             {/* הצגת המאמר עצמו */}
//             {/* בעת לחיצה עח הכפתור של אישור המאמר יתווסף לDB */}
//             {/* כלומר יתווסף למחלקת מאמרים ויוסף לאתר */}
//             <button onClick={() => approval()}>Approve Article</button>
//         </>
//     )
// }


