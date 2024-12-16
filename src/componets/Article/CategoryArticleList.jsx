
//עיצוב של הקוד
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
// import './CategoryArticle.css';

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
//     const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

//     useEffect(() => {
//         // טוען את רשימת הקטגוריות
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     // פונקציה להצגת המאמרים לפי קטגוריה
//     function seeArticlesListByCategory(id) {
//         navigate(`/Article/${id}`);
//     }

//     // פונקציה שבודקת אם המשתמש מחובר ומפנה לפופאפ אם לא
//     function toAddArticle() {
//         if (!isLoggedIn) {
//             setOpenPopup(true); // אם לא מחובר, פתיחת הפופאפ
//         } else {
//             navigate('/RequestToAddAnArticle'); // אם מחובר, נווט לדף הוספת מאמר
//         }
//     }

//     // סגירת הפופאפ
//     function handleClosePopup() {
//         setOpenPopup(false);
//     }

//     // ניווט לפי הכפתור בלחיצה
//     function handleRedirect() {
//         if (redirectTo === 'signup') {
//             navigate('/signup'); // נווט להרשמה
//         } else {
//             navigate('/login', { state: { fromAddArticle: true } }); // הוסף state כדי לשלוח את המשתמש לדף הוספת מאמר לאחר ההתחברות
//         }
//         setOpenPopup(false); // סגור את הפופאפ לאחר לחיצה
//     }

//     return (
//         <>
//             <h2>Category Of Article</h2>
//             {/* כפתור הוספת מאמר */}
//             <button className="add-article-button" onClick={() => toAddArticle()} >✨To add an article, click here✨</button>
//             <div className="category-article-page-container">
//                 <div className="category-container">
//                     {/* הצגת כל הקטגוריות בתוך כרטיסים */}
//                     <div className="articles-container">
//                         <div className="articles-grid">
//                             {listCategoryArticle.map((category) => (
//                                 <div className="category-card" key={category.id}>
//                                     <div className="card-content">
//                                         <Typography variant="h6" component="div" align="center">
//                                             {category.categoryName}
//                                         </Typography>
//                                     </div>
//                                     <div className="card-actions">
//                                         <Button onClick={() => seeArticlesListByCategory(category.id)} color="primary" sx={{ fontFamily: 'inherit' }}>
//                                             See articles in {category.categoryName}
//                                         </Button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* פופאפ לרשום/התחבר */}
//             <Dialog open={openPopup} onClose={handleClosePopup} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
//                 <DialogTitle sx={{ textAlign: 'center', color: '#ff758c' }}>
//                     הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!
//                 </DialogTitle>
//                 <DialogContent>
//                     <Typography variant="body1" sx={{ marginBottom: '15px' }}>
//                         על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                         ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                     </Typography>
//                 </DialogContent>
//                 <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
//                     <Button onClick={handleClosePopup} color="secondary" sx={{ width: '120px' }}>Not now</Button>
//                     <Button
//                         onClick={() => {
//                             setRedirectTo('signup');
//                             handleRedirect();
//                         }}
//                         color="primary"
//                         sx={{
//                             width: '120px',
//                             backgroundColor: '#ff7eb3',
//                             '&:hover': { backgroundColor: '#ff758c' }
//                         }}
//                     >
//                         Sign In
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }

//עיצוב נוסף 
//16-12-24
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
// import './CategoryArticle.css';

// // מרכיב הפופאפ
// const SignInPopup = ({ openPopup, setOpenPopup, redirectTo, setRedirectTo }) => {
//     const navigate = useNavigate();

//     const handleClosePopup = () => {
//         setOpenPopup(false);
//     };

//     const handleRedirect = () => {
//         if (redirectTo === 'signup') {
//             navigate('/signup');
//         } else {
//             navigate('/login', { state: { fromAddArticle: true } });
//         }
//         setOpenPopup(false);
//     };

//     return (
//         <Dialog open={openPopup} onClose={handleClosePopup} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
//             <DialogTitle sx={{ textAlign: 'center', color: '#ff758c' }}>
//                 הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!
//             </DialogTitle>
//             <DialogContent>
//                 <Typography variant="body1" sx={{ marginBottom: '15px' }}>
//                     על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                     ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                 </Typography>
//             </DialogContent>
//             <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
//                 <Button onClick={handleClosePopup} color="secondary" sx={{ width: '120px' }}>Not now</Button>
//                 <Button
//                     onClick={() => {
//                         setRedirectTo('signup');
//                         handleRedirect();
//                     }}
//                     color="primary"
//                     sx={{
//                         width: '120px',
//                         backgroundColor: '#ff7eb3',
//                         '&:hover': { backgroundColor: '#ff758c' }
//                     }}
//                 >
//                     Sign In
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
//     const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

//     useEffect(() => {
//         // טוען את רשימת הקטגוריות
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     // פונקציה להצגת המאמרים לפי קטגוריה
//     const seeArticlesListByCategory = (id) => {
//         navigate(`/Article/${id}`);
//     };

//     // פונקציה שבודקת אם המשתמש מחובר ומפנה לפופאפ אם לא
//     const toAddArticle = () => {
//         if (!isLoggedIn) {
//             setOpenPopup(true); // אם לא מחובר, פתיחת הפופאפ
//         } else {
//             navigate('/RequestToAddAnArticle'); // אם מחובר, נווט לדף הוספת מאמר
//         }
//     };

//     return (
//         <>
//             <h2>Category Of Article</h2>
//             {/* כפתור הוספת מאמר */}
//             <button className="add-article-button" onClick={toAddArticle}>✨To add an article, click here✨</button>
//             <div className="category-article-page-container">
//                 <div className="category-container">
//                     {/* הצגת כל הקטגוריות בתוך כרטיסים */}
//                     <div className="articles-container">
//                         <div className="articles-grid">
//                             {listCategoryArticle.map((category) => (
//                                 <div className="category-card" key={category.id}>
//                                     <div className="card-content">
//                                         <Typography variant="h6" component="div" align="center">
//                                             {category.categoryName}
//                                         </Typography>
//                                     </div>
//                                     <div className="card-actions">
//                                         <Button onClick={() => seeArticlesListByCategory(category.id)} color="primary" sx={{ fontFamily: 'inherit' }}>
//                                             See articles in {category.categoryName}
//                                         </Button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* פופאפ לרשום/התחבר */}
//             <SignInPopup
//                 openPopup={openPopup}
//                 setOpenPopup={setOpenPopup}
//                 redirectTo={redirectTo}
//                 setRedirectTo={setRedirectTo}
//             />
//         </>
//     );
// }


//נסיון 2
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
// import './CategoryArticle.css';

// // קומפוננטת הפופאפ
// const SignInPopup = ({ openPopup, setOpenPopup, redirectTo, setRedirectTo }) => {
//     const navigate = useNavigate();

//     const handleClosePopup = () => {
//         setOpenPopup(false);
//     };

//     const handleRedirect = () => {
//         if (redirectTo === 'signup') {
//             navigate('/signup');
//         } else {
//             navigate('/login', { state: { fromAddArticle: true } });
//         }
//         setOpenPopup(false);
//     };

//     return (
//         <Dialog open={openPopup} onClose={handleClosePopup}>
//             <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
//             <DialogContent>
//                 <Typography variant="body1">
//                     על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                     ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                 </Typography>
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleClosePopup} color="secondary">Not now</Button>
//                 <Button
//                     onClick={() => {
//                         setRedirectTo('signup');
//                         handleRedirect();
//                     }}
//                     color="primary"
//                 >
//                     Sign Up
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
//     const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

//     useEffect(() => {
//         // טוען את רשימת הקטגוריות
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     // פונקציה להצגת המאמרים לפי קטגוריה
//     const seeArticlesListByCategory = (id) => {
//         navigate(`/Article/${id}`);
//     };

//     // פונקציה שבודקת אם המשתמש מחובר ומפנה לפופאפ אם לא
//     const toAddArticle = () => {
//         if (!isLoggedIn) {
//             setOpenPopup(true); // אם לא מחובר, פתיחת הפופאפ
//         } else {
//             navigate('/RequestToAddAnArticle'); // אם מחובר, נווט לדף הוספת מאמר
//         }
//     };

//     return (
//         <>
//             <div className='categoty-article-grid'>
//                 <button className="add-article-button" onClick={toAddArticle}>
//                     ✨To add an article, click here✨
//                 </button>
//                 <div className="category-article-page-container">
//                     <h2>Category Of Article</h2>
//                     {listCategoryArticle.map((category) => (
//                         <div className="category-card" key={category.id}>
//                             <div className="card-content">
//                                 <Typography variant="h6" component="div" align="center">
//                                     {category.categoryName}
//                                 </Typography>
//                             </div>
//                             <div className="card-actions">
//                                 <Button onClick={() => seeArticlesListByCategory(category.id)} color="primary">
//                                     See articles in {category.categoryName}
//                                 </Button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <SignInPopup
//                 openPopup={openPopup}
//                 setOpenPopup={setOpenPopup}
//                 redirectTo={redirectTo}
//                 setRedirectTo={setRedirectTo}
//             />
//         </>
//     );
// }


//הקוד של ינון
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryList } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import './CategoryArticle.css';

// קומפוננטת הפופאפ
const SignInPopup = ({ openPopup, setOpenPopup, redirectTo, setRedirectTo }) => {
    const navigate = useNavigate();

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleRedirect = () => {
        if (redirectTo === 'signup') {
            navigate('/signup');
        } else {
            navigate('/login', { state: { fromAddArticle: true } });
        }
        setOpenPopup(false);
    };

    return (
        <Dialog open={openPopup} onClose={handleClosePopup}>
            <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
                    ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClosePopup} color="secondary">Not now</Button>
                <Button
                    onClick={() => {
                        setRedirectTo('signup');
                        handleRedirect();
                    }}
                    color="primary"
                >
                    Sign Up
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default function CategoryArticle() {
    const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
    const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
    const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

    useEffect(() => {
        // טוען את רשימת הקטגוריות
        dispatch(getAllCategoryList());
    }, [dispatch]);

    // פונקציה להצגת המאמרים לפי קטגוריה
    const seeArticlesListByCategory = (id) => {
        navigate(`/Article/${id}`);
    };

    // פונקציה שבודקת אם המשתמש מחובר ומפנה לפופאפ אם לא
    const toAddArticle = () => {
        if (!isLoggedIn) {
            setOpenPopup(true); // אם לא מחובר, פתיחת הפופאפ
        } else {
            navigate('/RequestToAddAnArticle'); // אם מחובר, נווט לדף הוספת מאמר
        }
    };

    return (
        <>
            <div className="categoty-article-grid">
                <button className="add-article-button" onClick={toAddArticle}>
                    ✨ To add an article, click here ✨
                </button>
                <div className="category-article-page-container">
                    <p>The HiTechistim articles page offers a rich repository of professional content on various tech topics, including QA, development, DevOps, automation, project management, and emerging technologies. The articles are written by industry experts and provide insights and tools to help readers grow and stay updated in their field. Anyone with expertise in a specific tech area is encouraged to contribute articles, which will go through an approval process before being published for the community's benefit.</p>
                    {listCategoryArticle.map((category) => (
                        <div className="category-card" key={category.id}>
                            <div className="card-content">
                                <Typography variant="h6" component="div" align="center">
                                    {category.categoryName}
                                </Typography>
                            </div>
                            <div className="card-actions">
                                <Button
                                    onClick={() => seeArticlesListByCategory(category.id)}
                                    color="primary"
                                >
                                    See articles in {category.categoryName}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <SignInPopup
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    redirectTo={redirectTo}
                    setRedirectTo={setRedirectTo}
                />
            </div>

            <SignInPopup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                redirectTo={redirectTo}
                setRedirectTo={setRedirectTo}
            />
        </>
    );
}