// //ניסיון מספר 5
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress } from '@mui/material';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = () => {
//         if (!article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <>
//             <Box>
//                 <h1>פרטי המאמר</h1>
//                 <p>{article.title}</p>
//                 <p>{article.author}</p>
//                 <p>{article.content}</p>
//                 <p>{article.description}</p>
//                 {/* <p>{article.pdfarticleFile}</p> */}
//                 <h1>לסדר את ההצגה של המאמר</h1>
//                 <p>pdfarticleFile: {article.pdfarticleFile ? "נמצא" : "לא נמצא"}</p>

//                 {article.pdfarticleFile ? (
//                     <>
//                         {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                         <Button onClick={handleOpenInNewTab} variant="contained" color="primary">
//                             פתח בטאב חדש
//                         </Button>

//                         {/* כפתור להורדת המאמר */}
//                         <Button onClick={handleDownload} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
//                             הורד את המאמר
//                         </Button>
//                     </>
//                 ) : (
//                     <p>לא נמצאו פרטי המאמר.</p>
//                 )}

//                 <Button onClick={() => navigate(-1)} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
//                     חזור לרשימת המאמרים
//                 </Button>
//             </Box>
//         </>
//     );
// }

//15-12-24
//עובד!!!!!!!!!
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress } from '@mui/material';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <>
//             <Box>
//                 <h1>פרטי המאמר</h1>
//                 <p>כותרת: {articleData?.title}</p>
//                 <p>מחבר: {articleData?.author}</p>
//                 {/* <p>תוכן: {articleData?.content}</p> */}
//                 <p>תיאור: {articleData?.description}</p>
//                 {/* לא מציגים את מערך הבייטים ישירות */}
//                 <h2>אפשרויות להצגת והורדת המאמר</h2>
//                 <p>pdfarticleFile: {articleData?.pdfarticleFile ? "נמצא" : "לא נמצא"}</p>

//                 {articleData?.pdfarticleFile ? (
//                     <>
//                         {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                         <Button onClick={handleOpenInNewTab} variant="contained" color="primary">
//                             פתח בטאב חדש
//                         </Button>

//                         {/* כפתור להורדת המאמר */}
//                         <Button onClick={handleDownload} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
//                             הורד את המאמר
//                         </Button>
//                     </>
//                 ) : (
//                     <p>לא נמצאו פרטי המאמר.</p>
//                 )}

//                 <Button onClick={() => navigate(-1)} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
//                     חזור לרשימת המאמרים
//                 </Button>
//             </Box>
//         </>
//     );
// }


//עיצוב הקןד
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress, Typography } from '@mui/material';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box 
//                 display="flex" 
//                 justifyContent="center" 
//                 alignItems="center" 
//                 height="100vh"
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <Box 
//             display="flex" 
//             flexDirection="column" 
//             alignItems="center" 
//             justifyContent="center" 
//             minHeight="100vh"
//             padding={2}
//         >
//             <Box 
//                 display="flex" 
//                 flexDirection="column" 
//                 alignItems="center" 
//                 maxWidth="600px" 
//                 width="100%" 
//                 textAlign="center"
//             >
//                 <Typography variant="h4" gutterBottom>
//                     פרטי המאמר
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     כותרת: {articleData?.title}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     מחבר: {articleData?.author}
//                 </Typography>
//                 {/* ניתן להוסיף תוכן נוסף לפי הצורך */}
//                 <Typography variant="body1" gutterBottom>
//                     תיאור: {articleData?.description}
//                 </Typography>
//                 {/* לא מציגים את מערך הביטים ישירות */}
//                 <Typography variant="h5" gutterBottom>
//                     אפשרויות להצגת והורדת המאמר
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     pdfarticleFile: {articleData?.pdfarticleFile ? "נמצא" : "לא נמצא"}
//                 </Typography>

//                 {articleData?.pdfarticleFile ? (
//                     <Box 
//                         display="flex" 
//                         flexDirection="row" 
//                         justifyContent="center" 
//                         alignItems="center" 
//                         marginTop={2}
//                     >
//                         {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                         <Button 
//                             onClick={handleOpenInNewTab} 
//                             variant="contained" 
//                             color="primary"
//                             sx={{ marginRight: 2 }}
//                         >
//                             פתח בטאב חדש
//                         </Button>

//                         {/* כפתור להורדת המאמר */}
//                         <Button 
//                             onClick={handleDownload} 
//                             variant="contained" 
//                             color="secondary"
//                         >
//                             הורד את המאמר
//                         </Button>
//                     </Box>
//                 ) : (
//                     <Typography variant="body1" color="error" gutterBottom>
//                         לא נמצאו פרטי המאמר.
//                     </Typography>
//                 )}

//                 <Button 
//                     onClick={() => navigate(-1)} 
//                     variant="contained" 
//                     color="secondary" 
//                     sx={{ marginTop: 4 }}
//                 >
//                     חזור לרשימת המאמרים
//                 </Button>
//             </Box>
//         </Box>
//     );
// }


//שהפרטים יופיעו בצד שמאל
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import { px } from 'framer-motion';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 height="100vh"
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <Box
//             display="flex"
//             justifyContent="flex-start"
//             alignItems="flex-start"
//             minHeight="100vh"
//             padding={16}
//         >
//             <Box
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="flex-start"
//                 maxWidth="800px"
//                 width="100%"
//             >
//                 <Typography variant="h4" gutterBottom>
//                     Article details
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     {articleData?.title}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     author: {articleData?.author}
//                 </Typography>
//                 {/* ניתן להוסיף תוכן נוסף לפי הצורך */}
//                 <Typography variant="h6" gutterBottom>
//                     Description: {articleData?.description}
//                 </Typography>
//                 {/* לא מציגים את מערך הביטים ישירות */}
//                 <Typography variant="h5" gutterBottom>
//                     Options for viewing and downloading the article
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     pdfarticleFile: {articleData?.pdfarticleFile ? "Found an article" : "No article found"}
//                 </Typography>

//                 {articleData?.pdfarticleFile ? (
//                     <Box
//                         display="flex"
//                         flexDirection="row"
//                         justifyContent="flex-start"
//                         alignItems="center"
//                         marginTop={2}
//                         width="100%"
//                     >
//                         {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                         <Button
//                             onClick={handleOpenInNewTab}
//                             variant="contained"
//                             color="primary"
//                             sx={{ marginRight: 2 }}
//                         >
//                             Open the article in a new tab
//                         </Button>

//                         {/* כפתור להורדת המאמר */}
//                         <Button
//                             onClick={handleDownload}
//                             variant="contained"
//                             color="secondary"
//                         >
//                             Download the article
//                         </Button>
//                     </Box>
//                 ) : (
//                     <Typography variant="body1" color="error" gutterBottom>
//                         No article details were found.
//                     </Typography>
//                 )}

//                 <Button
//                     onClick={() => navigate(-1)}
//                     variant="contained"
//                     color="secondary"
//                     sx={{ marginTop: 4 }}
//                 >
//                     Return to the list of articles
//                 </Button>
//             </Box>
//         </Box>
//     );
// }


//עיצוב נוסף
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress, Typography } from '@mui/material';
// import { px } from 'framer-motion';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!articleData || !articleData.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof articleData.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(articleData.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 height="100vh"
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <Box
//             display="flex"
//             justifyContent="flex-start"
//             alignItems="flex-start"
//             minHeight="100vh"
//             padding={4}
//             sx={{
//                 backgroundImage: 'url(/images/x20.jpg)', // הנתיב לתמונה מתוך public/images/
//                 backgroundSize: 'cover', // גודל התמונה יתאים לגודל המסך
//                 backgroundPosition: 'center', // מיקום התמונה במרכז
//                 backgroundRepeat: 'no-repeat', // לא לחזור על התמונה
//             }}
//         >
//             <Box
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="flex-start"
//                 maxWidth="800px"
//                 width="100%"
//                 bgcolor="rgba(255, 247, 247, 0.64)"
//                 padding={4}
//                 borderRadius={2}
//             >
                
//                 <Typography variant="h4" gutterBottom >
//                     Article details
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     {articleData?.title}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                     author: {articleData?.author}
//                 </Typography>
//                 {/* ניתן להוסיף תוכן נוסף לפי הצורך */}
//                 <Typography variant="h6" gutterBottom>
//                     Description: {articleData?.description}
//                 </Typography>
//                 {/* לא מציגים את מערך הביטים ישירות */}
//                 <Typography variant="h5" gutterBottom>
//                     Options for viewing and downloading the article
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     pdfarticleFile: {articleData?.pdfarticleFile ? "Found an article" : "No article found"}
//                 </Typography>

//                 {articleData?.pdfarticleFile ? (
//                     <Box
//                         display="flex"
//                         flexDirection="row"
//                         justifyContent="flex-start"
//                         alignItems="center"
//                         marginTop={2}
//                         width="100%"
//                     >
//                         {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                         <Button
//                             onClick={handleOpenInNewTab}
//                             variant="contained"
//                             color="primary"
//                             sx={{ marginRight: 2 }}
//                         >
//                             Open the article in a new tab
//                         </Button>

//                         {/* כפתור להורדת המאמר */}
//                         <Button
//                             onClick={handleDownload}
//                             variant="contained"
//                             color="secondary"
//                         >
//                             Download the article
//                         </Button>
//                     </Box>
//                 ) : (
//                     <Typography variant="body1" color="error" gutterBottom>
//                         No article details were found.
//                     </Typography>
//                 )}

//                 <Button
//                     onClick={() => navigate(-1)}
//                     variant="contained"
//                     color="secondary"
//                     sx={{ marginTop: 4 }}
//                 >
//                     Return to the list of articles
//                 </Button>
//             </Box>
//         </Box>
//     );
// }

//נסיון נוסף לעיצוב
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { px } from 'framer-motion';

export default function DetailArticle() {
    const navigate = useNavigate();
    const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

    // אחזור פרטי המאמר מה-state של Redux
    const article = useSelector((state) => state.article.Article);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
    const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

    // טוען את המאמר ברגע שהקומפוננטה נטענת
    useEffect(() => {
        dispatch(getArticleById(id))
            .then(response => {
                setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
                setLoading(false);
            })
            .catch(error => {
                console.error("שגיאה בטעינת המאמר:", error);
                alert("לא הצלחנו להוריד את המאמר.");
                setLoading(false);
            });
    }, [dispatch, id]);

    // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
    const handleOpenInNewTab = () => {
        if (!articleData || !articleData.pdfarticleFile) {
            alert("לא ניתן לפתוח את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof articleData.pdfarticleFile === 'string') {
            byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
        } else {
            // מניחים שמדובר במערך בייטים
            byteArray = new Uint8Array(articleData.pdfarticleFile);
        }

        // יצירת Blob מתוך מערך הביטים
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const newTab = window.open();
        if (newTab) {
            newTab.document.write(`
                <html>
                    <head><title>המאמר</title></head>
                    <body style="margin:0;">
                        <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
                    </body>
                </html>
            `);
            newTab.document.close();
        } else {
            alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
        }
    };

    // פונקציה להורדת המאמר
    const handleDownload = () => {
        if (!articleData || !articleData.pdfarticleFile) {
            alert("לא ניתן להוריד את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof articleData.pdfarticleFile === 'string') {
            byteArray = Uint8Array.from(atob(articleData.pdfarticleFile), c => c.charCodeAt(0));
        } else {
            // מניחים שמדובר במערך בייטים
            byteArray = new Uint8Array(articleData.pdfarticleFile);
        }

        // יצירת Blob מתוך מערך הביטים להורדה
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'article.pdf'; // שם הקובץ להורדה

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            minHeight="100vh"
            padding={4}
            sx={{
                backgroundImage: 'url(/images/x20.jpg)', // הנתיב לתמונה מתוך public/images/
                backgroundSize: 'cover', // גודל התמונה יתאים לגודל המסך
                backgroundPosition: 'center', // מיקום התמונה במרכז
                backgroundRepeat: 'no-repeat', // לא לחזור על התמונה
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                maxWidth="800px"
                width="100%"
                bgcolor="rgba(255, 247, 247, 0.64)"
                padding={4}
                borderRadius={2}
            >
                
                <Typography variant="h4" gutterBottom >
                    Article details
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {articleData?.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    author: {articleData?.author}
                </Typography>
                {/* ניתן להוסיף תוכן נוסף לפי הצורך */}
                <Typography variant="h6" gutterBottom>
                    Description: {articleData?.description}
                </Typography>
                {/* לא מציגים את מערך הביטים ישירות */}
                <Typography variant="h5" gutterBottom>
                    Options for viewing and downloading the article
                </Typography>
                <Typography variant="body2" gutterBottom>
                    pdfarticleFile: {articleData?.pdfarticleFile ? "Found an article" : "No article found"}
                </Typography>

                {articleData?.pdfarticleFile ? (
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        marginTop={2}
                        width="100%"
                    >
                        {/* כפתור לפתוח את ה-PDF בטאב חדש */}
                        <Button
                            onClick={handleOpenInNewTab}
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: 2 }}
                        >
                            Open the article in a new tab
                        </Button>

                        {/* כפתור להורדת המאמר */}
                        <Button
                            onClick={handleDownload}
                            variant="contained"
                            color="secondary"
                        >
                            Download the article
                        </Button>
                    </Box>
                ) : (
                    <Typography variant="body1" color="error" gutterBottom>
                        No article details were found.
                    </Typography>
                )}

                <Button
                    onClick={() => navigate(-1)}
                    variant="contained"
                    color="secondary"
                    sx={{ marginTop: 4 }}
                >
                    Return to the list of articles
                </Button>
            </Box>
        </Box>
    );
}