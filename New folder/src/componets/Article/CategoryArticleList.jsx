// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';

// export default function CategoryArticle() {

//     const listCategoryArticle = useSelector((state) => state.article.CategoryList);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();


//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     function seeArticlesListByCategory(id) {
//         navigate(`/Article/${id}`);
//     }

//     function toAddArticle(){
        

//     }

//     return (
//         <>
//             <h2>CategoryArticle</h2>
//             {/* <button onClick={() => navigate('/RequestToAddAnArticle')}>✨to add article - click here✨</button> */}
//             <button onClick={() =>toAddArticle()}>✨to add article - click here✨</button>

//             <ul>
//                 {listCategoryArticle.map((category) => (
//                     <li key={category.id}>
//                         {category.categoryName}
//                         <button onClick={() => seeArticlesListByCategory(category.id)}>to see article</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }



//GPT
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// //import { LogInUser, setCurrent } from '../../slices/UserSlice'; // פעולות הקשורות למשתמש

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // האם המשתמש מחובר?
//     const dispatch = useDispatch();
//     const navigate = useNavigate(); // ניווט לדפים שונים

//     useEffect(() => {
//         dispatch(getAllCategoryList()); // טוען את רשימת הקטגוריות מה-Redux
//     }, [dispatch]);

//     // פונקציה להצגת המאמרים לפי קטגוריה
//     function seeArticlesListByCategory(id) {
//         navigate(`/Article/${id}`);
//     }

//     // פונקציה שבודקת אם המשתמש מחובר
//     function toAddArticle() {
//         if (!isLoggedIn) {
//             // אם לא מחובר, מנווט לדף התחברות
//             navigate('/login');
//         } else {
//             // אם מחובר, מנווט לדף הוספת מאמר
//             navigate('/RequestToAddAnArticle');
//         }
//     }

//     return (
//         <>
//             <h2>CategoryArticle</h2>
//             <button onClick={() => toAddArticle()}>✨to add article - click here✨</button>
//             <ul>
//                 {listCategoryArticle.map((category) => (
//                     <li key={category.id}>
//                         {category.categoryName}
//                         <button onClick={() => seeArticlesListByCategory(category.id)}>to see article</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }


// GPT-שדרוג עם פופא ובדיקה מוךתאת אישית
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
// import { motion } from 'framer-motion'; // לשימוש באנימציות

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // האם המשתמש מחובר?
//     const dispatch = useDispatch();
//     const navigate = useNavigate(); // ניווט לדפים שונים

//     const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
//     const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

//     useEffect(() => {
//         dispatch(getAllCategoryList()); // טוען את רשימת הקטגוריות מה-Redux
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
//             navigate('/signup'); // נווט להרשמה אם המשתמש לא רשום
//         } else {
//             navigate('/login'); // נווט להתחברות אם המשתמש כבר רשום
//         }
//         setOpenPopup(false); // סגור את הפופאפ לאחר לחיצה
//     }

//     return (
//         <>
//             <h2>CategoryArticle</h2>
//             {/* כפתור הוספת מאמר */}
//             <button onClick={() => toAddArticle()}>✨ הוסף מאמר - לחץ כאן ✨</button>
            
//             <ul>
//                 {listCategoryArticle.map((category) => (
//                     <li key={category.id}>
//                         {category.categoryName}
//                         <button onClick={() => seeArticlesListByCategory(category.id)}>לצפות במאמרים</button>
//                     </li>
//                 ))}
//             </ul>

//             {/* פופאפ לרשום/התחבר */}
//             <Dialog open={openPopup} onClose={handleClosePopup}>
//                 <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
//                 <DialogContent>
//                     <Typography variant="body1">
//                         על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                         ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                     </Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClosePopup} color="secondary">
//                         לא עכשיו
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             setRedirectTo('signup'); // הפנייה להרשמה
//                             handleRedirect();
//                         }}
//                         color="primary"
//                     >
//                         הירשם עכשיו
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }


//בדיקה עם TOKEN
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // סטייט למעקב אחרי אם המשתמש מחובר או לא
//     const dispatch = useDispatch();
//     const navigate = useNavigate(); // ניווט לדפים שונים

//     const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
//     const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

//     useEffect(() => {
//         // בדיקה אם יש TOKEN ב-localStorage
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             setIsLoggedIn(true); // אם יש TOKEN, המשתמש מחובר
//         } else {
//             setIsLoggedIn(false); // אם אין TOKEN, המשתמש לא מחובר
//         }

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
//             navigate('/signup'); // נווט להרשמה אם המשתמש לא רשום
//         } else {
//             navigate('/login'); // נווט להתחברות אם המשתמש כבר רשום
//         }
//         setOpenPopup(false); // סגור את הפופאפ לאחר לחיצה
//     }

//     return (
//         <>
//             <h2>CategoryArticle</h2>
//             {/* כפתור הוספת מאמר */}
//             <button onClick={() => toAddArticle()}>✨ הוסף מאמר - לחץ כאן ✨</button>
            
//             <ul>
//                 {listCategoryArticle.map((category) => (
//                     <li key={category.id}>
//                         {category.categoryName}
//                         <button onClick={() => seeArticlesListByCategory(category.id)}>לצפות במאמרים</button>
//                     </li>
//                 ))}
//             </ul>

//             {/* פופאפ לרשום/התחבר */}
//             <Dialog open={openPopup} onClose={handleClosePopup}>
//                 <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
//                 <DialogContent>
//                     <Typography variant="body1">
//                         על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                         ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                     </Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClosePopup} color="secondary">
//                         לא עכשיו
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             setRedirectTo('signup'); // הפנייה להרשמה
//                             handleRedirect();
//                         }}
//                         color="primary"
//                     >
//                         הירשם עכשיו
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }


//שיםור הקוד בניהוךל הסטיס שלא יבצע לי הרבה רינדורים...
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
//     const dispatch = useDispatch();
//     const navigate = useNavigate(); // ניווט לדפים שונים

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
//             navigate('/signup'); // נווט להרשמה אם המשתמש לא רשום
//         } else {
//             navigate('/login'); // נווט להתחברות אם המשתמש כבר רשום
//         }
//         setOpenPopup(false); // סגור את הפופאפ לאחר לחיצה
//     }

//     return (
//         <>
//             <h2>CategoryArticle</h2>
//             {/* כפתור הוספת מאמר */}
//             <button onClick={() => toAddArticle()}>✨ הוסף מאמר - לחץ כאן ✨</button>
            
//             <ul>
//                 {listCategoryArticle.map((category) => (
//                     <li key={category.id}>
//                         {category.categoryName}
//                         <button onClick={() => seeArticlesListByCategory(category.id)}>לצפות במאמרים</button>
//                     </li>
//                 ))}
//             </ul>

//             {/* פופאפ לרשום/התחבר */}
//             <Dialog open={openPopup} onClose={handleClosePopup}>
//                 <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
//                 <DialogContent>
//                     <Typography variant="body1">
//                         על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                         ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                     </Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClosePopup} color="secondary">
//                         לא עכשיו
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             setRedirectTo('signup'); // הפנייה להרשמה
//                             handleRedirect();
//                         }}
//                         color="primary"
//                     >
//                         הירשם עכשיו
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }


//שיםפור הקוד בכך שברגע שמבצע לוגין הקוד ידע אח"כ לחזור לדף ההוספת מאמר
//הדבר מתבצע על ידי -location state
//בקומפוננטה CategoryArticle:
//כאשר המשתמש לא מחובר, נשלח אותו לדף login 
//עם פרמטר indicating מאיפה הוא הגיע (כמו fromAddArticle: true)

//בקומפוננטה Login:
//ברגע שהלקוח מתחבר, נבדוק אם קיים פרמטר fromAddArticle ב-
//location.state.
// אם כן, ננווט אותו לדף של הוספת מאמר. אם לא, ננווט לדף הבית
//הקוד:
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryList } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

export default function CategoryArticle() {
    const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
    const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
    const dispatch = useDispatch();
    const navigate = useNavigate(); // ניווט לדפים שונים

    const [openPopup, setOpenPopup] = useState(false); // מצב פתיחת הפופאפ
    const [redirectTo, setRedirectTo] = useState(''); // אם ההפנייה היא להרשמה או התחברות

    useEffect(() => {
        // טוען את רשימת הקטגוריות
        dispatch(getAllCategoryList());
    }, [dispatch]);

    // פונקציה להצגת המאמרים לפי קטגוריה
    function seeArticlesListByCategory(id) {
        navigate(`/Article/${id}`);
    }

    // פונקציה שבודקת אם המשתמש מחובר ומפנה לפופאפ אם לא
    function toAddArticle() {
        if (!isLoggedIn) {
            setOpenPopup(true); // אם לא מחובר, פתיחת הפופאפ
        } else {
            navigate('/RequestToAddAnArticle'); // אם מחובר, נווט לדף הוספת מאמר
        }
    }

    // סגירת הפופאפ
    function handleClosePopup() {
        setOpenPopup(false);
    }

    // ניווט לפי הכפתור בלחיצה
    function handleRedirect() {
        if (redirectTo === 'signup') {
            navigate('/signup'); // נווט להרשמה
        } else {
            navigate('/login', { state: { fromAddArticle: true } }); // הוסף state כדי לשלוח את המשתמש לדף הוספת מאמר לאחר ההתחברות
        }
        setOpenPopup(false); // סגור את הפופאפ לאחר לחיצה
    }

    return (
        <>
            <h2>CategoryArticle</h2>
            {/* כפתור הוספת מאמר */}
            <button onClick={() => toAddArticle()}>✨ הוסף מאמר - לחץ כאן ✨</button>
            
            <ul>
                {listCategoryArticle.map((category) => (
                    <li key={category.id}>
                        {category.categoryName}
                        <button onClick={() => seeArticlesListByCategory(category.id)}>לצפות במאמרים</button>
                    </li>
                ))}
            </ul>

            {/* פופאפ לרשום/התחבר */}
            <Dialog open={openPopup} onClose={handleClosePopup}>
                <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
                        ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopup} color="secondary">
                        לא עכשיו
                    </Button>
                    <Button
                        onClick={() => {
                            setRedirectTo('signup'); // הפנייה להרשמה
                            handleRedirect();
                        }}
                        color="primary"
                    >
                        הירשם עכשיו
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}


//



//
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategoryList } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

// export default function CategoryArticle() {
//     const listCategoryArticle = useSelector((state) => state.article.CategoryList); // רשימת הקטגוריות
//     const isLoggedIn = useSelector((state) => state.user.auth.isLoggedIn); // נתון מתוך ה-Redux
//     const dispatch = useDispatch();
//     const navigate = useNavigate(); // ניווט לדפים שונים

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
//             navigate('/signup', { state: { fromCategoryPage: true } }); // הוסף state להחזיר את המשתמש לדף הקטגוריות אחרי ההרשמה
//         } else {
//             navigate('/login', { state: { fromAddArticle: true } }); // הוסף state כדי לשלוח את המשתמש לדף הוספת מאמר לאחר ההתחברות
//         }
//         setOpenPopup(false); // סגור את הפופאפ לאחר לחיצה
//     }

//     return (
//         <>
//             <h2>CategoryArticle</h2>
//             {/* כפתור הוספת מאמר */}
//             <button onClick={() => toAddArticle()}>✨ הוסף מאמר - לחץ כאן ✨</button>
            
//             <ul>
//                 {listCategoryArticle.map((category) => (
//                     <li key={category.id}>
//                         {category.categoryName}
//                         <button onClick={() => seeArticlesListByCategory(category.id)}>לצפות במאמרים</button>
//                     </li>
//                 ))}
//             </ul>

//             {/* פופאפ לרשום/התחבר */}
//             <Dialog open={openPopup} onClose={handleClosePopup}>
//                 <DialogTitle>הצטרף לקהילת הייטקיסטים והוסף את המאמר שלך!</DialogTitle>
//                 <DialogContent>
//                     <Typography variant="body1">
//                         על מנת להוסיף מאמר, עליך להירשם לאתר ולהיות חלק מהקהילה שלנו.
//                         ההרשמה מאפשרת לך לא רק להוסיף מאמרים, אלא גם לגשת למיטאפים, לשתף רעיונות עם מקצוענים נוספים, ולהתעדכן בתכנים חשובים ביותר בעולם ההייטק!
//                     </Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleClosePopup} color="secondary">
//                         לא עכשיו
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             setRedirectTo('signup'); // הפנייה להרשמה
//                             handleRedirect();
//                         }}
//                         color="primary"
//                     >
//                         הירשם עכשיו
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }
