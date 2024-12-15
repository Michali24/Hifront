//עיצוב נוסך כך שלאחר מחיקה מייד יעלם אותה כרטיסיה ולא יצטרכו לרפרש את העמוד
//מייד שחוזרים אחרוה הנתונים לא מתעדכנים...ולכן דברים שאושרו מופיעים עדיין
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box } from '@mui/material';

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Use local state to hold the list of articles
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // Update local state whenever the global state changes
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // Update local state to remove the deleted article
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     return (
//         <Box sx={{ padding: '20px' }}>
//             <Typography variant="h4" gutterBottom>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary">
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         gap: '16px',
//                         justifyContent: 'center',
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '300px',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         {articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         onClick={() =>
//                                             navigate(`/RequestToAddArticleList/DetailRequestArticle/${articleRegister.id}/${articleRegister?.categoryId}`)
//                                         }
//                                     >
//                                         ראה את בקשת המאמר
//                                     </Button>
//                                     <Button
//                                         variant="contained"
//                                         color="error"
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                     >
//                                         מחק בקשה
//                                     </Button>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )}
//         </Box>
//     );
// }


//15-12-24
//עובד מעולההההההההההההההההההההההההה
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box } from '@mui/material';

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Use local state to hold the list of articles
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // Update local state whenever the global state changes
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // Update local state to remove the deleted article
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
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
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <Box sx={{ padding: '20px' }}>
//             <Typography variant="h4" gutterBottom>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary">
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexWrap: 'wrap',
//                         gap: '16px',
//                         justifyContent: 'center',
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '300px',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         {articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     {articleRegister?.pdfarticleFile ? (
//                                         <>
//                                             {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                                             <Button
//                                                 onClick={() => handleOpenInNewTab(articleRegister)}
//                                                 variant="contained"
//                                                 color="primary"
//                                             >
//                                                 פתח בטאב חדש
//                                             </Button>

//                                             {/* כפתור להורדת המאמר */}
//                                             <Button
//                                                 onClick={() => handleDownload(articleRegister)}
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 style={{ marginLeft: '10px' }}
//                                             >
//                                                 הורד את המאמר
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Typography variant="body2" color="text.secondary">
//                                             לא נמצאו פרטי המאמר.
//                                         </Typography>
//                                     )}
//                                 </Box>
//                                 {/* כפתור למחיקת המאמר */}
//                                 <Box sx={{ marginTop: '16px' }}>
//                                     <Button
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                         variant="outlined"
//                                         color="error"
//                                     >
//                                         מחק
//                                     </Button>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )}
//         </Box>
//     );
// }

//נסיון לעצב את העמוד
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא האייקון

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // שימוש במצב מקומי לאחסון רשימת המאמרים
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // עדכון המצב המקומי בכל פעם שהמצב הגלובלי משתנה
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // עדכון המצב המקומי להסרת המאמר שנמחק
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
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
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
//             <Typography variant="h4" gutterBottom>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary">
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column', // עימוד עמודה
//                         gap: '18px',
//                         width: '100%', // להתאים לרוחב המיכל
//                         alignItems: 'flex-start',
//                         padding: 5 // יישור לימין
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '100%', // מלא רוחב המיכל
//                                     maxWidth: '800px', // הגבלת רוחב מקסימלי לכרטיס
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                     height: '100px', // גובה קבוע לכרטיס
//                                     minHeight: '250px', // גובה מינימלי לכרטיס
//                                     maxHeight: '200px', // גובה מקסימלי לכרטיס
//                                     overflow: 'hidden', // להסתיר תוכן שעולה על הגובה
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         title:{articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         author:{articleRegister.author}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         subject:{articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         description:{articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     {articleRegister?.pdfarticleFile ? (
//                                         <>
//                                             {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                                             <Button
//                                                 onClick={() => handleOpenInNewTab(articleRegister)}
//                                                 variant="contained"
//                                                 color="primary"
//                                             >
//                                                 פתח בטאב חדש
//                                             </Button>

//                                             {/* כפתור להורדת המאמר */}
//                                             <Button
//                                                 onClick={() => handleDownload(articleRegister)}
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 sx={{ marginLeft: '10px' }}
//                                             >
//                                                 הורד את המאמר
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Typography variant="body2" color="text.secondary">
//                                             לא נמצאו פרטי המאמר.
//                                         </Typography>
//                                     )}
//                                 </Box>
//                                 {/* כפתור למחיקת המאמר כאייקון */}
//                                 <Box sx={{ marginTop: '16px', alignSelf: 'flex-end' }}>
//                                     <IconButton
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                         color="error"
//                                         aria-label="delete"
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )
//             }
//         </Box >
//     );
// }

//עיצוב 
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא האייקון

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // שימוש במצב מקומי לאחסון רשימת המאמרים
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // עדכון המצב המקומי בכל פעם שהמצב הגלובלי משתנה
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // עדכון המצב המקומי להסרת המאמר שנמחק
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
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
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
//             <Typography variant="h4" gutterBottom>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary">
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column', // עימוד עמודה
//                         gap: '18px',
//                         width: '100%', // להתאים לרוחב המיכל
//                         alignItems: 'flex-start',
//                         padding: 5 // יישור לימין
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '100%', // מלא רוחב המיכל
//                                     maxWidth: '800px', // הגבלת רוחב מקסימלי לכרטיס
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                     height: '100px', // גובה קבוע לכרטיס
//                                     minHeight: '250px', // גובה מינימלי לכרטיס
//                                     maxHeight: '200px', // גובה מקסימלי לכרטיס
//                                     overflow: 'hidden', // להסתיר תוכן שעולה על הגובה
//                                     border: '1px solid #ccc', // הוספת מסגרת
//                                     borderRadius: '8px', // עיגול פינות המסגרת
//                                     boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)', // הוספת הצללה
//                                     backgroundColor: '#fff', // צבע רקע לבן
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         title:{articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         author:{articleRegister.author}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         subject:{articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         description:{articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     {articleRegister?.pdfarticleFile ? (
//                                         <>
//                                             {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                                             <Button
//                                                 onClick={() => handleOpenInNewTab(articleRegister)}
//                                                 variant="contained"
//                                                 color="primary"
//                                             >
//                                                 פתח בטאב חדש
//                                             </Button>

//                                             {/* כפתור להורדת המאמר */}
//                                             <Button
//                                                 onClick={() => handleDownload(articleRegister)}
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 sx={{ marginLeft: '10px' }}
//                                             >
//                                                 הורד את המאמר
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Typography variant="body2" color="text.secondary">
//                                             לא נמצאו פרטי המאמר.
//                                         </Typography>
//                                     )}
//                                 </Box>
//                                 {/* כפתור למחיקת המאמר כאייקון */}
//                                 <Box sx={{ marginTop: '16px', alignSelf: 'flex-end' }}>
//                                     <IconButton
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                         color="error"
//                                         aria-label="delete"
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )
//             }
//         </Box >
//     );
// }


//עיצוב נוסף שיראו את הכפתור מחיקה
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא האייקון

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // שימוש במצב מקומי לאחסון רשימת המאמרים
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // עדכון המצב המקומי בכל פעם שהמצב הגלובלי משתנה
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // עדכון המצב המקומי להסרת המאמר שנמחק
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
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
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
//             <Typography variant="h4" gutterBottom>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary">
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column', // עימוד עמודה
//                         gap: '18px',
//                         width: '100%', // להתאים לרוחב המיכל
//                         alignItems: 'flex-start',
//                         padding: 5 // יישור לימין
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '100%', // מלא רוחב המיכל
//                                     maxWidth: '800px', // הגבלת רוחב מקסימלי לכרטיס
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                     minHeight: '250px', // גובה מינימלי מתאים
//                                     overflow: 'hidden', // להסתיר תוכן שעולה על הגובה
//                                     border: '1px solid #ccc', // הוספת מסגרת
//                                     borderRadius: '8px', // עיגול פינות המסגרת
//                                     boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)', // הוספת הצללה
//                                     backgroundColor: '#fff', // צבע רקע לבן
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         title: {articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         author: {articleRegister.author}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         subject: {articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         description: {articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     {articleRegister?.pdfarticleFile ? (
//                                         <>
//                                             {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                                             <Button
//                                                 onClick={() => handleOpenInNewTab(articleRegister)}
//                                                 variant="contained"
//                                                 color="primary"
//                                             >
//                                                 פתח בטאב חדש
//                                             </Button>

//                                             {/* כפתור להורדת המאמר */}
//                                             <Button
//                                                 onClick={() => handleDownload(articleRegister)}
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 sx={{ marginLeft: '10px' }}
//                                             >
//                                                 הורד את המאמר
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Typography variant="body2" color="text.secondary">
//                                             לא נמצאו פרטי המאמר.
//                                         </Typography>
//                                     )}
//                                 </Box>
//                                 {/* כפתור למחיקת המאמר כאייקון */}
//                                 <Box sx={{ marginTop: '16px', alignSelf: 'flex-end' }}>
//                                     <IconButton
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                         color="error"
//                                         aria-label="delete"
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )}
//         </Box>
//     );
// }


//עיצוב נוסף שיהיה רקע
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא האייקון

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // שימוש במצב מקומי לאחסון רשימת המאמרים
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // עדכון המצב המקומי בכל פעם שהמצב הגלובלי משתנה
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // עדכון המצב המקומי להסרת המאמר שנמחק
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
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
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <Box
//             sx={{
//                 padding: '20px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-end',
//                 // הוספת תמונת הרקע כאן
//                 backgroundImage: `url(/images/artical1.jpg)`, // החלף את ה-URL לתמונת הרקע שלך
//                 backgroundSize: 'cover', // מתאם את הגודל של הרקע
//                 backgroundRepeat: 'no-repeat', // לא חוזר את התמונה
//                 backgroundPosition: 'center', // ממרכז את התמונה
//                 minHeight: '100vh', // מבטיח שהתמונה מכסה את כל הגובה
//             }}
//         >
//             {/* אופציה להוספת שכבת חצי שקופה לשיפור הנראות */}
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)', // ניתן לשנות את הצבע והשקיפות לפי הצורך
//                     zIndex: -1, // מבטיח שהשכבה תהיה מאחורי התוכן
//                 }}
//             />

//             <Typography variant="h4" gutterBottom sx={{ zIndex: 1, color: 'text.primary' }}>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary" sx={{ zIndex: 1 }}>
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column', // עימוד עמודה
//                         gap: '18px',
//                         width: '100%', // להתאים לרוחב המיכל
//                         alignItems: 'flex-start',
//                         padding: 5, // יישור לימין
//                         zIndex: 1, // מבטיח שהתוכן יהיה מעל השכבה
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '100%', // מלא רוחב המיכל
//                                     maxWidth: '800px', // הגבלת רוחב מקסימלי לכרטיס
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                     minHeight: '250px', // גובה מינימלי מתאים
//                                     overflow: 'hidden', // להסתיר תוכן שעולה על הגובה
//                                     border: '1px solid #ccc', // הוספת מסגרת
//                                     borderRadius: '8px', // עיגול פינות המסגרת
//                                     boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)', // הוספת הצללה
//                                     backgroundColor: '#fff', // צבע רקע לבן
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         title: {articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         author: {articleRegister.author}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         subject: {articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         description: {articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     {articleRegister?.pdfarticleFile ? (
//                                         <>
//                                             {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                                             <Button
//                                                 onClick={() => handleOpenInNewTab(articleRegister)}
//                                                 variant="contained"
//                                                 color="primary"
//                                             >
//                                                 פתח בטאב חדש
//                                             </Button>

//                                             {/* כפתור להורדת המאמר */}
//                                             <Button
//                                                 onClick={() => handleDownload(articleRegister)}
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 sx={{ marginLeft: '10px' }}
//                                             >
//                                                 הורד את המאמר
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Typography variant="body2" color="text.secondary">
//                                             לא נמצאו פרטי המאמר.
//                                         </Typography>
//                                     )}
//                                 </Box>
//                                 {/* כפתור למחיקת המאמר כאייקון */}
//                                 <Box sx={{ marginTop: '16px', alignSelf: 'flex-end' }}>
//                                     <IconButton
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                         color="error"
//                                         aria-label="delete"
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </Box>
//                             </Card>
//                         ))}
//                 </Box>
//             )}
//         </Box>
//     );
// }


//
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse,putAricle } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא האייקון

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // שימוש במצב מקומי לאחסון רשימת המאמרים
//     const [articleList, setArticleList] = useState([]);

//     const RegisterArticleList = useSelector((state) => state.article.ArticleList);

//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     useEffect(() => {
//         // עדכון המצב המקומי בכל פעם שהמצב הגלובלי משתנה
//         setArticleList(RegisterArticleList);
//     }, [RegisterArticleList]);

//     function deleteRequsetArticle(id) {
//         dispatch(deleteAricle(id));

//         // עדכון המצב המקומי להסרת המאמר שנמחק
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     }

//     // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
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
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // בדיקה אם הנתונים הם מחרוזת Base64
//         if (typeof article.pdfarticleFile === 'string') {
//             byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
//         } else {
//             // מניחים שמדובר במערך בייטים
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // יצירת Blob מתוך מערך הביטים להורדה
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     const approval = () => {
//         if (!DetailArticleRequest) {
//             console.error('Article details are not available.');
//             return;
//         }

//         // יצירת אובייקט מאמר חדש עם הנתונים מה-Redux
//         const newArticle = {
//             id: articleId,
//             title: DetailArticleRequest.title,
//             author: DetailArticleRequest.author, // ניתן להחליף לשם משתמש דינמי
//             content: DetailArticleRequest.content,
//             description: DetailArticleRequest.description,
//             status: false,
//             categoryId: categoryId,
//             pdfarticleFile: DetailArticleRequest.pdfarticleFile,
//         };

//         console.log('new article:', newArticle);
//         console.log('category id:', categoryId);

//         // שליחה ל-Redux לאישור המאמר
//         dispatch(putAricle(newArticle));
//         console.log('article correct and send ok!');

//         // חזרה לדף הקודם בהיסטוריית הניווט
//         navigate(-1);
//     };

//     return (
//         <Box
//             sx={{
//                 padding: '20px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-end',
//                 // הוספת תמונת הרקע כאן
//                 backgroundImage: `url(/images/artical1.jpg)`, // החלף את ה-URL לתמונת הרקע שלך
//                 backgroundSize: 'cover', // מתאם את הגודל של הרקע
//                 backgroundRepeat: 'no-repeat', // לא חוזר את התמונה
//                 backgroundPosition: 'center', // ממרכז את התמונה
//                 minHeight: '100vh', // מבטיח שהתמונה מכסה את כל הגובה
//             }}
//         >
//             {/* אופציה להוספת שכבת חצי שקופה לשיפור הנראות */}
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)', // ניתן לשנות את הצבע והשקיפות לפי הצורך
//                     zIndex: -1, // מבטיח שהשכבה תהיה מאחורי התוכן
//                 }}
//             />

//             <Typography variant="h4" gutterBottom sx={{ zIndex: 1, color: 'text.primary' }}>
//                 בקשות להוספת מאמרים
//             </Typography>

//             {articleList && articleList.length === 0 ? (
//                 <Typography variant="body1" color="text.secondary" sx={{ zIndex: 1 }}>
//                     - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                 </Typography>
//             ) : (
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column', // עימוד עמודה
//                         gap: '18px',
//                         width: '100%', // להתאים לרוחב המיכל
//                         alignItems: 'flex-start',
//                         padding: 5, // יישור לימין
//                         zIndex: 1, // מבטיח שהתוכן יהיה מעל השכבה
//                     }}
//                 >
//                     {articleList
//                         ?.filter((articleRegister) => articleRegister.status === false)
//                         .map((articleRegister) => (
//                             <Card
//                                 key={articleRegister.id}
//                                 sx={{
//                                     width: '100%', // מלא רוחב המיכל
//                                     maxWidth: '800px', // הגבלת רוחב מקסימלי לכרטיס
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     padding: '16px',
//                                     minHeight: '250px', // גובה מינימלי מתאים
//                                     overflow: 'hidden', // להסתיר תוכן שעולה על הגובה
//                                     border: '1px solid #ccc', // הוספת מסגרת
//                                     borderRadius: '8px', // עיגול פינות המסגרת
//                                     boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)', // הוספת הצללה
//                                     backgroundColor: '#fff', // צבע רקע לבן
//                                 }}
//                             >
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         title: {articleRegister.title}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         author: {articleRegister.author}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         subject: {articleRegister.subject}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         description: {articleRegister.description}
//                                     </Typography>
//                                 </CardContent>
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         justifyContent: 'space-between',
//                                         marginTop: '16px',
//                                     }}
//                                 >
//                                     {articleRegister?.pdfarticleFile ? (
//                                         <>
//                                             {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                                             <Button
//                                                 onClick={() => handleOpenInNewTab(articleRegister)}
//                                                 variant="contained"
//                                                 color="primary"
//                                             >
//                                                 פתח בטאב חדש
//                                             </Button>

//                                             {/* כפתור להורדת המאמר */}
//                                             <Button
//                                                 onClick={() => handleDownload(articleRegister)}
//                                                 variant="contained"
//                                                 color="secondary"
//                                                 sx={{ marginLeft: '10px' }}
//                                             >
//                                                 הורד את המאמר
//                                             </Button>
//                                         </>
//                                     ) : (
//                                         <Typography variant="body2" color="text.secondary">
//                                             לא נמצאו פרטי המאמר.
//                                         </Typography>
//                                     )}
//                                 </Box>
//                                 {/* כפתור למחיקת המאמר כאייקון */}
//                                 <Box sx={{ marginTop: '16px', alignSelf: 'flex-end' }}>
//                                     <IconButton
//                                         onClick={() => deleteRequsetArticle(articleRegister.id)}
//                                         color="error"
//                                         aria-label="delete"
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 </Box>
//                                 <button onClick={approval}>אשר מאמר</button>
//                             </Card>
//                         ))}
//                 </Box>
//             )}
//         </Box>
//     );
// }


//
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteAricle, getarticleWithStatusFalse, putAricle } from '../../slices/ArticleSlice';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete'; // Importing the Delete icon

// export default function RequestToAddArticleList() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Local state to hold the list of articles
//     const [articleList, setArticleList] = useState([]);

//     // Select the list of articles with status false from Redux store
//     const registerArticleList = useSelector((state) => state.article.ArticleList);

//     // Fetch articles with status false on component mount
//     useEffect(() => {
//         dispatch(getarticleWithStatusFalse());
//     }, [dispatch]);

//     // Update local state whenever the global state changes
//     useEffect(() => {
//         setArticleList(registerArticleList);
//     }, [registerArticleList]);

//     // Function to delete an article request
//     const deleteRequestArticle = (id) => {
//         dispatch(deleteAricle(id));

//         // Update local state to remove the deleted article
//         setArticleList((prevList) => prevList.filter((article) => article.id !== id));
//     };

//     // Function to approve an article
//     const approveArticle = (article) => {
//         if (!article) {
//             console.error('Article details are not available.');
//             return;
//         }

//         // Create a new article object with updated status
//         const updatedArticle = {
//             ...article,
//             status: true, // Change status to approved
//         };

//         console.log('Updated article:', updatedArticle);
//         console.log('Category ID:', updatedArticle.categoryId);

//         // Dispatch the update to Redux
//         dispatch(putAricle(updatedArticle))
//             .then(() => {
//                 console.log('Article approved and sent successfully!');
//                 // Optionally, you can show a success message or toast here
//             })
//             .catch((error) => {
//                 console.error('Error approving article:', error);
//                 // Optionally, handle the error (e.g., show a notification)
//             });
//     };

//     // Function to open the article PDF in a new tab
//     const handleOpenInNewTab = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // Check if the data is a Base64 string
//         if (typeof article.pdfarticleFile === 'string') {
//             try {
//                 byteArray = Uint8Array.from(atob(article.pdfarticleFile), (c) => c.charCodeAt(0));
//             } catch (error) {
//                 console.error('Invalid Base64 string:', error);
//                 alert("נתוני ה-PDF לא תקינים.");
//                 return;
//             }
//         } else {
//             // Assume it's a byte array
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // Create a Blob from the byte array
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

//     // Function to download the article PDF
//     const handleDownload = (article) => {
//         if (!article || !article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         let byteArray;

//         // Check if the data is a Base64 string
//         if (typeof article.pdfarticleFile === 'string') {
//             try {
//                 byteArray = Uint8Array.from(atob(article.pdfarticleFile), (c) => c.charCodeAt(0));
//             } catch (error) {
//                 console.error('Invalid Base64 string:', error);
//                 alert("נתוני ה-PDF לא תקינים.");
//                 return;
//             }
//         } else {
//             // Assume it's a byte array
//             byteArray = new Uint8Array(article.pdfarticleFile);
//         }

//         // Create a Blob from the byte array for download
//         const blob = new Blob([byteArray], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title}.pdf`; // File name for download

//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <Box
//             sx={{
//                 padding: 10,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'flex-start', // יישור לשמאל
//                 position: 'relative', // Added to position the overlay correctly
//                 // Background image settings
//                 backgroundImage: `url(/images/artical1.jpg)`, // Replace with your background image URL
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 minHeight: '100vh',
//             }}
//         >
//             {/* Optional: Add a semi-transparent overlay for better readability */}
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust color and opacity as needed
//                     zIndex: 0, // Ensure it's behind the content
//                 }}
//             />

//             <Box
//                 sx={{
//                     position: 'relative', // To ensure content is above the overlay
//                     zIndex: 1,
//                     width: '100%',
//                     maxWidth: '1200px', // Optional: limit the maximum width
//                 }}
//             >
//                 <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', textAlign: 'center' }}>
//                     Requests to add articles
//                 </Typography>

//                 {articleList && articleList.length === 0 ? (
//                     <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
//                         - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
//                     </Typography>
//                 ) : (
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column', // Column layout
//                             gap: '18px',
//                             width: '100%', // Full width container
//                             alignItems: 'center', // Center the cards
//                             padding: 2, // Adjust padding as needed
//                         }}
//                     >
//                         {articleList
//                             ?.filter((articleRegister) => articleRegister.status === false)
//                             .map((articleRegister) => (
//                                 <Card
//                                     key={articleRegister.id}
//                                     sx={{
//                                         width: '100%', // Full width
//                                         maxWidth: '800px', // Maximum width
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         justifyContent: 'space-between',
//                                         padding: '16px',
//                                         minHeight: '250px',
//                                         overflow: 'hidden',
//                                         border: '1px solid #ccc',
//                                         borderRadius: '8px',
//                                         boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)',
//                                         backgroundColor: '#fff',
//                                         position: 'relative',
//                                     }}
//                                 >
//                                     <CardContent>
//                                         <Typography variant="h6" component="div" gutterBottom>
//                                             <strong>Title:</strong> {articleRegister.title}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" paragraph>
//                                             <strong>Author:</strong> {articleRegister.author}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" paragraph>
//                                             <strong>Subject:</strong> {articleRegister.subject}
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" paragraph>
//                                             <strong>Description:</strong> {articleRegister.description}
//                                         </Typography>
//                                     </CardContent>
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             justifyContent: 'space-between',
//                                             alignItems: 'center',
//                                             flexWrap: 'wrap',
//                                             gap: '10px',
//                                         }}
//                                     >
//                                         {articleRegister?.pdfarticleFile ? (
//                                             <>
//                                                 {/* Button to open the PDF in a new tab */}
//                                                 <Button
//                                                     onClick={() => handleOpenInNewTab(articleRegister)}
//                                                     variant="contained"
//                                                     color="primary"
//                                                 >
//                                                     פתח בטאב חדש
//                                                 </Button>

//                                                 {/* Button to download the PDF */}
//                                                 <Button
//                                                     onClick={() => handleDownload(articleRegister)}
//                                                     variant="contained"
//                                                     color="secondary"
//                                                 >
//                                                     הורד את המאמר
//                                                 </Button>
//                                             </>
//                                         ) : (
//                                             <Typography variant="body2" color="text.secondary">
//                                                 לא נמצאו פרטי המאמר.
//                                             </Typography>
//                                         )}
//                                         <Box
//                                             sx={{
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 gap: '10px',
//                                             }}
//                                         >
//                                             {/* Approve Article Button */}
//                                             <Button
//                                                 onClick={() => approveArticle(articleRegister)}
//                                                 variant="contained"
//                                                 color="success"
//                                             >
//                                                 אשר מאמר
//                                             </Button>

//                                             {/* Delete Article IconButton */}
//                                             <IconButton
//                                                 onClick={() => deleteRequestArticle(articleRegister.id)}
//                                                 color="error"
//                                                 aria-label="delete"
//                                             >
//                                                 <DeleteIcon />
//                                             </IconButton>
//                                         </Box>
//                                     </Box>
//                                 </Card>
//                             ))}
//                     </Box>
//                 )}
//             </Box>
//         </Box>
//     );
// }



//עובד פגזזז
//15-12-24
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAricle, getarticleWithStatusFalse, putAricle } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא אייקון המחיקה

export default function RequestToAddArticleList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // מצב מקומי להחזיק את רשימת המאמרים
    const [articleList, setArticleList] = useState([]);

    // בחירת רשימת המאמרים עם סטטוס false מחנות Redux
    const registerArticleList = useSelector((state) => state.article.ArticleList);

    // מצב עבור הדיאלוג (פופאפ)
    const [openDialog, setOpenDialog] = useState(false);

    // שליפה של מאמרים עם סטטוס false בעת טעינת הקומפוננטה
    useEffect(() => {
        dispatch(getarticleWithStatusFalse());
    }, [dispatch]);

    // עדכון מצב מקומי כאשר רשימת המאמרים משתנה
    useEffect(() => {
        setArticleList(registerArticleList);
    }, [registerArticleList]);

    // פונקציה לסגירת הדיאלוג
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // פונקציה למחיקת בקשת מאמר
    const deleteRequestArticle = (id) => {
        dispatch(deleteAricle(id))
            .then(() => {
                // עדכון מצב מקומי להסרת המאמר מהרשימה
                setArticleList((prevList) => prevList.filter((article) => article.id !== id));
            })
            .catch((error) => {
                console.error('שגיאה במחיקת המאמר:', error);
                // ניתן להוסיף טיפול בשגיאה כאן, כמו הצגת הודעת שגיאה
            });
    };

    // פונקציה לאישור מאמר
    const approveArticle = (article) => {
        if (!article) {
            console.error('פרטי המאמר אינם זמינים.');
            return;
        }

        // יצירת אובייקט מאמר חדש עם סטטוס מעודכן
        const updatedArticle = {
            ...article,
            status: true, // שינוי סטטוס לאושר
        };

        console.log('מאמר מעודכן:', updatedArticle);
        console.log('ID קטגוריה:', updatedArticle.categoryId);

        // שליחת העדכון ל-Redux
        dispatch(putAricle(updatedArticle))
            .then(() => {
                console.log('המאמר אושר ונשלח בהצלחה!');
                setOpenDialog(true); // פתיחת הדיאלוג
                // עדכון מצב מקומי להסרת המאמר מהרשימה
                setArticleList((prevList) => prevList.filter((a) => a.id !== article.id));
            })
            .catch((error) => {
                console.error('שגיאה באישור המאמר:', error);
                // ניתן להוסיף טיפול בשגיאה כאן, כמו הצגת הודעת שגיאה
            });
    };

    // פונקציה לפתיחת ה-PDF בטאב חדש
    const handleOpenInNewTab = (article) => {
        if (!article || !article.pdfarticleFile) {
            alert("לא ניתן לפתוח את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof article.pdfarticleFile === 'string') {
            try {
                byteArray = Uint8Array.from(atob(article.pdfarticleFile), (c) => c.charCodeAt(0));
            } catch (error) {
                console.error('מחרוזת Base64 לא חוקית:', error);
                alert("נתוני ה-PDF אינם תקינים.");
                return;
            }
        } else {
            // הנחה שזהו מערך בתים
            byteArray = new Uint8Array(article.pdfarticleFile);
        }

        // יצירת Blob מהמערך בתים
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const newTab = window.open();
        if (newTab) {
            newTab.document.write(
                `<html>
                    <head><title>המאמר</title></head>
                    <body style="margin:0;">
                        <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
                    </body>
                </html>`
            );
            newTab.document.close();
        } else {
            alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
        }
    };

    // פונקציה להורדת ה-PDF
    const handleDownload = (article) => {
        if (!article || !article.pdfarticleFile) {
            alert("לא ניתן להוריד את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof article.pdfarticleFile === 'string') {
            try {
                byteArray = Uint8Array.from(atob(article.pdfarticleFile), (c) => c.charCodeAt(0));
            } catch (error) {
                console.error('מחרוזת Base64 לא חוקית:', error);
                alert("נתוני ה-PDF אינם תקינים.");
                return;
            }
        } else {
            // הנחה שזהו מערך בתים
            byteArray = new Uint8Array(article.pdfarticleFile);
        }

        // יצירת Blob מהמערך בתים להורדה
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${article.title}.pdf`; // שם הקובץ להורדה

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // יישור לשמאל
                position: 'relative', // מיקום לתצוגת הפק覆 (overlay) נכון
                // הגדרות תמונת הרקע
                backgroundImage: 'url(/images/artical1.jpg)', // החלף עם כתובת התמונה שלך
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            {/* אופציונלי: הוספת שכבה חצי שקופה לקריאה טובה יותר */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // כיוון צבע ושקיפות לפי הצורך
                    zIndex: 0, // ודא שהיא מאחורי התוכן
                }}
            />

            <Box
                sx={{
                    position: 'relative', // לוודא שהתוכן מעל השכבה החצי שקופה
                    zIndex: 1,
                    width: '100%',
                    maxWidth: '1200px', // אופציונלי: הגבלת רוחב מקסימלי
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: 'text.primary', textAlign: 'center' }}>
                    בקשות להוספת מאמרים
                </Typography>

                {articleList && articleList.length === 0 ? (
                    <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                        - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
                    </Typography>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column', // פריסה בעמודה
                            gap: '18px',
                            width: '100%', // מיכל ברוחב מלא
                            alignItems: 'center', // מרכז את הכרטיסים
                            padding: 2, // התאמת ריפוד לפי הצורך
                        }}
                    >
                        {articleList
                            ?.filter((articleRegister) => articleRegister.status === false)
                            .map((articleRegister) => (
                                <Card
                                    key={articleRegister.id}
                                    sx={{
                                        width: '100%', // רוחב מלא
                                        maxWidth: '800px', // רוחב מקסימלי
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        padding: '16px',
                                        minHeight: '250px',
                                        overflow: 'hidden',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)',
                                        backgroundColor: '#fff',
                                        position: 'relative',
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            <strong>כותרת:</strong> {articleRegister.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            <strong>מחבר:</strong> {articleRegister.author}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            <strong>נושא:</strong> {articleRegister.subject}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            <strong>תיאור:</strong> {articleRegister.description}
                                        </Typography>
                                    </CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            gap: '10px',
                                        }}
                                    >
                                        {articleRegister?.pdfarticleFile ? (
                                            <>
                                                {/* כפתור לפתיחת ה-PDF בטאב חדש */}
                                                <Button
                                                    onClick={() => handleOpenInNewTab(articleRegister)}
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    פתח בטאב חדש
                                                </Button>

                                                {/* כפתור להורדת ה-PDF */}
                                                <Button
                                                    onClick={() => handleDownload(articleRegister)}
                                                    variant="contained"
                                                    color="secondary"
                                                >
                                                    הורד את המאמר
                                                </Button>
                                            </>
                                        ) : (
                                            <Typography variant="body2" color="text.secondary">
                                                לא נמצאו פרטי המאמר.
                                            </Typography>
                                        )}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                            }}
                                        >
                                            {/* כפתור אישור מאמר */}
                                            <Button
                                                onClick={() => approveArticle(articleRegister)}
                                                variant="contained"
                                                color="success"
                                            >
                                                אשר מאמר
                                            </Button>

                                            {/* כפתור מחיקת מאמר */}
                                            <IconButton
                                                onClick={() => deleteRequestArticle(articleRegister.id)}
                                                color="error"
                                                aria-label="delete"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Card>
                            ))}
                    </Box>
                )}

                {/* הוספת רכיב ה-Dialog כאן במיקום מרכז המסך */}
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    aria-labelledby="success-dialog-title"
                    aria-describedby="success-dialog-description"
                >
                    <DialogTitle id="success-dialog-title">הצלחה</DialogTitle>
                    <DialogContent>
                        <Typography id="success-dialog-description">
                            מאמר התווסף בהצלחה!
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary" autoFocus>
                            סגור
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}
