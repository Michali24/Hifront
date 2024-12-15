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
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAricle, getarticleWithStatusFalse } from '../../slices/ArticleSlice';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // ייבוא האייקון

export default function RequestToAddArticleList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // שימוש במצב מקומי לאחסון רשימת המאמרים
    const [articleList, setArticleList] = useState([]);

    const RegisterArticleList = useSelector((state) => state.article.ArticleList);

    useEffect(() => {
        dispatch(getarticleWithStatusFalse());
    }, [dispatch]);

    useEffect(() => {
        // עדכון המצב המקומי בכל פעם שהמצב הגלובלי משתנה
        setArticleList(RegisterArticleList);
    }, [RegisterArticleList]);

    function deleteRequsetArticle(id) {
        dispatch(deleteAricle(id));

        // עדכון המצב המקומי להסרת המאמר שנמחק
        setArticleList((prevList) => prevList.filter((article) => article.id !== id));
    }

    // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
    const handleOpenInNewTab = (article) => {
        if (!article || !article.pdfarticleFile) {
            alert("לא ניתן לפתוח את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof article.pdfarticleFile === 'string') {
            byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
        } else {
            // מניחים שמדובר במערך בייטים
            byteArray = new Uint8Array(article.pdfarticleFile);
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
    const handleDownload = (article) => {
        if (!article || !article.pdfarticleFile) {
            alert("לא ניתן להוריד את המאמר כעת.");
            return;
        }

        let byteArray;

        // בדיקה אם הנתונים הם מחרוזת Base64
        if (typeof article.pdfarticleFile === 'string') {
            byteArray = Uint8Array.from(atob(article.pdfarticleFile), c => c.charCodeAt(0));
        } else {
            // מניחים שמדובר במערך בייטים
            byteArray = new Uint8Array(article.pdfarticleFile);
        }

        // יצירת Blob מתוך מערך הביטים להורדה
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${article.title}.pdf`; // שם הקובץ להורדה, ניתן להתאים לפי הצורך

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                // הוספת תמונת הרקע כאן
                backgroundImage: `url(/images/artical1.jpg)`, // החלף את ה-URL לתמונת הרקע שלך
                backgroundSize: 'cover', // מתאם את הגודל של הרקע
                backgroundRepeat: 'no-repeat', // לא חוזר את התמונה
                backgroundPosition: 'center', // ממרכז את התמונה
                minHeight: '100vh', // מבטיח שהתמונה מכסה את כל הגובה
            }}
        >
            {/* אופציה להוספת שכבת חצי שקופה לשיפור הנראות */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // ניתן לשנות את הצבע והשקיפות לפי הצורך
                    zIndex: -1, // מבטיח שהשכבה תהיה מאחורי התוכן
                }}
            />

            <Typography variant="h4" gutterBottom sx={{ zIndex: 1, color: 'text.primary' }}>
                בקשות להוספת מאמרים
            </Typography>

            {articleList && articleList.length === 0 ? (
                <Typography variant="body1" color="text.secondary" sx={{ zIndex: 1 }}>
                    - אין בקשות להוספת מאמרים - 404 - אין נתונים להציג
                </Typography>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column', // עימוד עמודה
                        gap: '18px',
                        width: '100%', // להתאים לרוחב המיכל
                        alignItems: 'flex-start',
                        padding: 5, // יישור לימין
                        zIndex: 1, // מבטיח שהתוכן יהיה מעל השכבה
                    }}
                >
                    {articleList
                        ?.filter((articleRegister) => articleRegister.status === false)
                        .map((articleRegister) => (
                            <Card
                                key={articleRegister.id}
                                sx={{
                                    width: '100%', // מלא רוחב המיכל
                                    maxWidth: '800px', // הגבלת רוחב מקסימלי לכרטיס
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: '16px',
                                    minHeight: '250px', // גובה מינימלי מתאים
                                    overflow: 'hidden', // להסתיר תוכן שעולה על הגובה
                                    border: '1px solid #ccc', // הוספת מסגרת
                                    borderRadius: '8px', // עיגול פינות המסגרת
                                    boxShadow: '0 4px 8px rgba(228, 53, 199, 0.1)', // הוספת הצללה
                                    backgroundColor: '#fff', // צבע רקע לבן
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        title: {articleRegister.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        author: {articleRegister.author}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        subject: {articleRegister.subject}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        description: {articleRegister.description}
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginTop: '16px',
                                    }}
                                >
                                    {articleRegister?.pdfarticleFile ? (
                                        <>
                                            {/* כפתור לפתוח את ה-PDF בטאב חדש */}
                                            <Button
                                                onClick={() => handleOpenInNewTab(articleRegister)}
                                                variant="contained"
                                                color="primary"
                                            >
                                                פתח בטאב חדש
                                            </Button>

                                            {/* כפתור להורדת המאמר */}
                                            <Button
                                                onClick={() => handleDownload(articleRegister)}
                                                variant="contained"
                                                color="secondary"
                                                sx={{ marginLeft: '10px' }}
                                            >
                                                הורד את המאמר
                                            </Button>
                                        </>
                                    ) : (
                                        <Typography variant="body2" color="text.secondary">
                                            לא נמצאו פרטי המאמר.
                                        </Typography>
                                    )}
                                </Box>
                                {/* כפתור למחיקת המאמר כאייקון */}
                                <Box sx={{ marginTop: '16px', alignSelf: 'flex-end' }}>
                                    <IconButton
                                        onClick={() => deleteRequsetArticle(articleRegister.id)}
                                        color="error"
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Card>
                        ))}
                </Box>
            )}
        </Box>
    );
}
