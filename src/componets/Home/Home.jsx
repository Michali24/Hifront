//הקוד ללא עיצןב MUI
// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { getAllArticleList } from '../../slices/ArticleSlice';

// export default function Home() {

//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);

//   useEffect(() => {
//     dispatch(getAllArticleList());
//   }, [dispatch]);

//   return (
//     <>
//       <div>Home</div>

//       <ul>
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <li key={article.id}>
//            title: {article.title}
//            author: {article.author}
//            description:{article.description}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

//הקוד בעיצוב MUI-----------------------
//עיצוב חלקי ובסיסי לגמרי
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);

//   useEffect(() => {
//     dispatch(getAllArticleList());
//   }, [dispatch]);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         --Home--
//       </Typography>

//       <Typography variant="h4" align="left" gutterBottom sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}>
//          New Article On HiTechistim
//       </Typography>

//       <Grid container spacing={14} justifyContent="center">
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 height: 180, // גובה אחיד
//                 width: 200, // רוחב אחיד
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {article.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ marginBottom: 1 }}
//                 >
//                   Author: {article.author}
//                 </Typography>
//                 <Typography variant="body2">
//                   description: {article.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


//הדף מעודכן אם מנהל נכנס...
//אבל אם אח"כ אני מתחברת בתור מתץשמש רגיל הוא נשאר עדיין בתור מנהל?..
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     // בודק אם המשתמש הוא מנהל ומאחסן את המידע ב-state
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     dispatch(getAllArticleList());
//   }, [dispatch]);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         --Home--
//       </Typography>

//       <Typography variant="h4" align="left" gutterBottom sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}>
//          New Article On HiTechistim
//       </Typography>

//       {isAdmin && (
//         <Box sx={{ marginBottom: 3 }}>
//           {/* הצגת כפתורים נוספים למנהל */}
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add File Meetup
//           </Button>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add Gallery Category
//           </Button>
//           <Button variant="contained" color="primary">
//             Request To Add Article List
//           </Button>
//         </Box>
//       )}

//       <Grid container spacing={14} justifyContent="center">
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 height: 180, // גובה אחיד
//                 width: 200, // רוחב אחיד
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {article.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ marginBottom: 1 }}
//                 >
//                   Author: {article.author}
//                 </Typography>
//                 <Typography variant="body2">
//                   description: {article.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


//תיקון שרק מנהל יוצג לו ללקוחות רגיךים לא
//מעולה הסתדר!!!!!!!!!!
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     // בודק אם המשתמש מחובר ואם הוא מנהל
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     dispatch(getAllArticleList());
//   }, [dispatch]);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         --Home--
//       </Typography>

//       <Typography
//         variant="h4"
//         align="left"
//         gutterBottom
//         sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}
//       >
//         New Article On HiTechistim
//       </Typography>

//       {/* הצגת כפתורים רק אם המשתמש הוא מנהל */}
//       {isAdmin && (
//         <Box sx={{ marginBottom: 3 }}>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add File Meetup
//           </Button>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add Gallery Category
//           </Button>
//           <Button variant="contained" color="primary">
//             Request To Add Article List
//           </Button>
//         </Box>
//       )}

//       <Grid container spacing={14} justifyContent="center">
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 height: 180, // גובה אחיד
//                 width: 200, // רוחב אחיד
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {article.title}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ marginBottom: 1 }}
//                 >
//                   Author: {article.author}
//                 </Typography>
//                 <Typography variant="body2">
//                   description: {article.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


//11-12-24
//עובבד אני רוצה להוביף הגבלה שכל פעם יופיעו לי 6 תמונות רנדומאליות
//יש לסדר את העניין של הסרטונים..
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [videoFiles, setVideoFiles] = useState([]);

//   useEffect(() => {
//     // בודק אם המשתמש מחובר ואם הוא מנהל
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     // שולף את הרשימות של המאמרים והקבצים
//     dispatch(getAllArticleList());
//     dispatch(getAllFileMeeetupList());
//   }, [dispatch]);

//   // פילטר של קבצים מסוג תמונה
//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images);  // עדכון רשימת התמונות
//     setVideoFiles(videos);  // עדכון רשימת הוידיאו
//   }, [fileMeetupList]);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         --Home--
//       </Typography>

//       {/* הצגת תמונות באופן רנדומלי מתוך המערך */}
//       <Grid container spacing={4} justifyContent="center">
//         {imageFiles.length > 0 && imageFiles
//           .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
//           .slice(0, 5) // הצגת 5 תמונות בלבד
//           .map((file, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//               <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
//                 <CardMedia
//                   component="img"
//                   height="100%"
//                   image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
//                   alt={`Image ${index + 1}`}
//                 />
//               </Card>
//             </Grid>
//           ))}
//       </Grid>

//       {/* הצגת 5 קבצי וידאו חדשים */}
//       <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 3 }}>
//         {videoFiles.length > 0 && videoFiles
//           .slice(-5) // בחירת 5 הקבצים החדשים ביותר
//           .map((file, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//               <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     Video-צריך להציג גם בתמונה של הוידיו
//                      וללת לוט אופציה כמו באתר של אבא של ציפייה {index + 1}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {file.title}
//                   </Typography>
//                   {/* הצגת לינק או משאב וידאו */}
//                   <Button href={file.videoUrl} target="_blank" variant="contained" color="primary" sx={{ marginTop: 1 }}>
//                     Watch Video
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//       </Grid>

//       {/* הצגת כותרת למאמרים */}
//       <Typography
//         variant="h4"
//         align="left"
//         gutterBottom
//         sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}
//       >
//         New Article On HiTechistim
//       </Typography>

//       {/* הצגת כפתורים רק אם המשתמש הוא מנהל */}
//       {isAdmin && (
//         <Box sx={{ marginBottom: 3 }}>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add File Meetup
//           </Button>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add Gallery Category
//           </Button>
//           <Button variant="contained" color="primary">
//             Request To Add Article List
//           </Button>
//         </Box>
//       )}

//       {/* הצגת המאמרים */}
//       <Grid container spacing={14} justifyContent="center">
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 height: 180, // גובה אחיד
//                 width: 200, // רוחב אחיד
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {article.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
//                   Author: {article.author}
//                 </Typography>
//                 <Typography variant="body2">
//                   description: {article.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

//11-12-24
//תוספת של ה6 צתמונות
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [videoFiles, setVideoFiles] = useState([]);

//   useEffect(() => {
//     // בודק אם המשתמש מחובר ואם הוא מנהל
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     // שולף את הרשימות של המאמרים והקבצים
//     dispatch(getAllArticleList());
//     dispatch(getAllFileMeeetupList());
//   }, [dispatch]);

//   // פילטר של קבצים מסוג תמונה
//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images);  // עדכון רשימת התמונות
//     setVideoFiles(videos);  // עדכון רשימת הוידיאו
//   }, [fileMeetupList]);

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         --Home--
//       </Typography>

//       {/* הצגת תמונות באופן רנדומלי מתוך המערך */}
//       <Grid container spacing={4} justifyContent="center">
//         {imageFiles.length > 0 && imageFiles
//           .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
//           .slice(0, 5) // הצגת 5 תמונות בלבד
//           .map((file, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//               <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
//                 <CardMedia
//                   component="img"
//                   height="100%"
//                   image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
//                   alt={`Image ${index + 1}`}
//                 />
//               </Card>
//             </Grid>
//           ))}
//       </Grid>

//       {/* הצגת 5 קבצי וידאו חדשים */}
//       <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 3 }}>
//         {videoFiles.length > 0 && videoFiles
//           .slice(-5) // בחירת 5 הקבצים החדשים ביותר
//           .map((file, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//               <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     Video {index + 1}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {file.title}
//                   </Typography>
//                   {/* הצגת לינק או משאב וידאו */}
//                   <Button href={file.videoUrl} target="_blank" variant="contained" color="primary" sx={{ marginTop: 1 }}>
//                     Watch Video
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//       </Grid>

//       {/* הצגת כותרת למאמרים */}
//       <Typography
//         variant="h4"
//         align="left"
//         gutterBottom
//         sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}
//       >
//         New Article On HiTechistim
//       </Typography>

//       {/* הצגת כפתורים רק אם המשתמש הוא מנהל */}
//       {isAdmin && (
//         <Box sx={{ marginBottom: 3 }}>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add File Meetup
//           </Button>
//           <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//             Add Gallery Category
//           </Button>
//           <Button variant="contained" color="primary">
//             Request To Add Article List
//           </Button>
//         </Box>
//       )}

//       {/* הצגת המאמרים */}
//       <Grid container spacing={3} justifyContent="center">
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 height: 180, // גובה אחיד
//                 width: 200, // רוחב אחיד
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {article.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
//                   Author: {article.author}
//                 </Typography>
//                 <Typography variant="body2">
//                   description: {article.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

//נסיון לעצב את הדף כמו הפרוייקט הקודם שלי
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// // import M1 from '../../assets/images/M1.jpg';
// //import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './Home.css';


// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [videoFiles, setVideoFiles] = useState([]);

//   useEffect(() => {
//     // בודק אם המשתמש מחובר ואם הוא מנהל
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     // שולף את הרשימות של המאמרים והקבצים
//     dispatch(getAllArticleList());
//     dispatch(getAllFileMeeetupList());
//   }, [dispatch]);

//   // פילטר של קבצים מסוג תמונה
//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images);  // עדכון רשימת התמונות
//     setVideoFiles(videos);  // עדכון רשימת הוידיאו
//   }, [fileMeetupList]);

// return (
//     <>
//       <div className='ImageMeetup'>
//         <div className="ContentContainer">

//           {/* <Box sx={{ padding: 3 }}>
//           <Typography variant="h4" align="center" gutterBottom>
//             --דף הבית--
//           </Typography>
//         </Box > */}

//           <div style={{ padding: '100px', paddingBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

//             {/* שאר התוכן בדף הבית נשאר ללא שינוי */}
//             <Grid container spacing={4} justifyContent="center">
//               {imageFiles.length > 0 && imageFiles
//                 .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
//                 .slice(0, 5) // הצגת 5 תמונות בלבד
//                 .map((file, index) => (
//                   <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//                     <Card sx={{ height: 250, display: 'flex', flexDirection: 'column' }}>
//                       <CardMedia
//                         component="img"
//                         height="100%"
//                         image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
//                         alt={`Image ${index + 1}`}
//                       />
//                       <CardContent sx={{ textAlign: 'center' }}>
//                         <Typography variant="h6" component="div">
//                           תמונה {index + 1}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Grid>
//                 ))}
//             </Grid>


//             {/* <div className="ContentContainer"> */}
//             {/* קטע עם תמונה וטקסט */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 alignItems: 'center',
//                 // backgroundColor: '#001f3f',
//                 color: 'white',
//                 padding: 12,
//                 borderRadius: 2,
//                 marginBottom: 4,
//               }}
//             >
//             </Box>
//             {/* תמונה בצד שמאל */}
//             {/* <Box
//           component="img"
//           src={M1}
//           alt="תמונה לדוגמה"
//           sx={{
//             width: { xs: '100%', md: '50%' },
//             borderRadius: 2,
//             marginBottom: { xs: 2, md: 0 },
//             marginLeft: 'auto', // דוחף את התמונה לימין
//             display: 'block',   // מוודא שהתמונה נשארת כאלמנט עצמאי
//           }}
//         /> */}
//             {/* טקסט בצד ימין */}
//             {/* <Box sx={{ marginLeft: { xs: 0, md: 4 }, textAlign: 'center' }}>
//           <Typography variant="h5" gutterBottom>
//             נושאים בהייטק וטכנולוגיה
//           </Typography>
//           <Typography variant="body1">
//             נושא הטכנולוגיה הוא רחב מאוד וכולל בתוכו תחומים ונושאים רבים,
//             והוא כל הזמן מתפתח ומשתנה. טכנולוגיה משפיעה על חיינו במגוון
//             רבדים, והיא הסיבה שבגללה אנחנו מסוגלים לעשות דברים שלא יכלנו לדמיין קודם לכן.
//           </Typography>
//         </Box> */}
//         </div>
//         <div style={{ fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', width: '100%', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//             <p>"Welcome to our technology learning hub HiTecourses! </p>
//             <p> Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
//             <p>Whether you're looking to master coding,explore data science, or understand the latest </p>
//             <p>in cybersecurity, our comprehensive courses have you covered. </p>
//             <p>Learn at your own pace, with hands-on projects and real-world  applications. </p>
//             <p>Our experienced instructors are here to guide you every step of the way.</p>
//             <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
//             <p>Your journey to tech mastery starts here!" </p>

//         </div>
//       </div>
//       <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" > </div>
//       <div className="SecondaryBackground">
//           {/* הצגת מאמרים */}
//           {/* <Grid container spacing={3} justifyContent="center">
//         {articleList.slice().reverse().slice(0, 5).map((article) => (
//           <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               sx={{
//                 height: 180,
//                 width: 200,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 transition: 'transform 0.3s, box-shadow 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography variant="h6" component="div" gutterBottom>
//                   {article.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
//                   Author: {article.author}
//                 </Typography>
//                 <Typography variant="body2">
//                   Description: {article.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid> */}
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//             <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//               New Courses on HiTecourses:
//             </Typography>
//             <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}>
//             </Typography>
//             {/* הטוב ביותר */}
//           <Grid container spacing={2} className="CourseList">
//               {articleList.slice().reverse().slice(0, 5).map((article) => (
//                 <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                   <Card sx={{ maxWidth: 346 }}>
//                     <CardContent>
//                       <Typography variant="body2" color="text.secondary">
//                         <div>
//                           <strong style={{ color: '#007bff' }}>Course name:</strong>
//                           <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                           <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                         </div>
//                         <div>Description of the course :{article.description} bjhbhjublnk jnk njnkknklnl lkm</div>
//                       </Typography>
//                     </CardContent>

//                   </Card>
//                 </Grid>
//               ))}
//           </Grid>
//             {/* <Button
//             className="ViewAllButton"
//             variant="outlined"
//             endIcon={<ArrowForwardIcon />}
//             onClick={navigateToAllCourses}
//           >
//             View all
//           </Button> */}
//         </Box>
//           {/* הוספת מרווח בין השוליים התחתונים */}
//         <div style={{ marginBottom: '70px' }}></div>

//       </div>
//     </>
//   );      
// }


//12-12-24
//צריך לסדר את העיצוב...
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleList } from '../../slices/ArticleSlice';
import '@fontsource/dancing-script';
import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// import M1 from '../../assets/images/M1.jpg';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Home.css';


export default function Home() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.ArticleList);
  const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);

  useEffect(() => {
    // בודק אם המשתמש מחובר ואם הוא מנהל
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
    // שולף את הרשימות של המאמרים והקבצים
    dispatch(getAllArticleList());
    dispatch(getAllFileMeeetupList());
  }, [dispatch]);

  // פילטר של קבצים מסוג תמונה
  useEffect(() => {
    const images = fileMeetupList.filter((file) => file.typeFile === 'image');
    const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
    setImageFiles(images);  // עדכון רשימת התמונות
    setVideoFiles(videos);  // עדכון רשימת הוידיאו
  }, [fileMeetupList]);


  return (
    <>
      <div className="BackgroundContainer" />
      <div className="ContentContainer">

        {/* <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 3 }}>
          {videoFiles.length > 0 && videoFiles
            .slice(-5) // בחירת 5 הקבצים החדשים ביותר
            .map((file, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Video {index + 1}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {file.title}
                    </Typography>
                    
                    <Button href={file.videoUrl} target="_blank" variant="contained" color="primary" sx={{ marginTop: 1 }}>
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid> */}
        <Grid container spacing={4} justifyContent="center">
          {imageFiles.length > 0 && imageFiles
            .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
            .slice(0, 5) // הצגת 5 תמונות בלבד
            .map((file, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: 250, display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
                    alt={`Image ${index + 1}`}
                  />
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" component="div">
                      תמונה {index + 1}
                    </Typography>
                  </CardContent>                    </Card>
              </Grid>
            ))}
        </Grid>

        <div style={{ fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', width: '100%', textAlign: 'left', color: 'black', marginTop: '50px' }}>
          <p>"Welcome to our technology learning hub Hitechistim! </p>
          <p> Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
          <p>Whether you're looking to master coding,explore data science, or understand the latest </p>
          <p>in cybersecurity, our comprehensive courses have you covered. </p>
          <p>Learn at your own pace, with hands-on projects and real-world  applications. </p>
          <p>Our experienced instructors are here to guide you every step of the way.</p>
          <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
          <p>Your journey to tech mastery starts here!" </p>

        </div>
      </div>

      <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
      <div className="MainImage" > </div>
      <div className="SecondaryBackground">
        <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
          <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
            New Article on Hitechistim:
          </Typography>
          <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}>
          </Typography>
          {/* הטוב ביותר */}
          <Grid container spacing={2} className="CourseList">
            {articleList.slice().reverse().slice(0, 5).map((article) => (
              <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
                <Card sx={{ maxWidth: 346 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    <span>
                        <strong style={{ color: '#007bff' }}>Article name:</strong>
                        <strong style={{ color: '#007bff' }}> {article.title}</strong>
                        <strong style={{ color: '#007bff' }}>{article.author}</strong>
                      </span>
                      <div>Description of the course :{article.description}bjhbhjublnk jnk njnkknklnl lkm</div>
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* הוספת מרווח בין השוליים התחתונים */}
        <div style={{ marginBottom: '70px' }}></div>
      </div>
    </>
  );
}

//עיוצב נוסף
//12-12-24




{/* //נסיון להצגת הסרטונים כראוי על המסך */ }
{/* // import React, { useEffect, useState } from 'react'; */ }
{/* // import { useSelector, useDispatch } from 'react-redux'; */ }
{/* // import { getAllArticleList } from '../../slices/ArticleSlice'; */ }
{/* // import '@fontsource/dancing-script'; */ }
{/* // import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material'; */ }
{/* // import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice'; */ }

{/* // export default function Home() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.ArticleList);
  const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);

  useEffect(() => {
    // בודק אם המשתמש מחובר ואם הוא מנהל
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
    // שולף את הרשימות של המאמרים והקבצים
    dispatch(getAllArticleList());
    dispatch(getAllFileMeeetupList());
  }, [dispatch]);

  // פילטר של קבצים מסוג תמונה ווידאו
  useEffect(() => {
    const images = fileMeetupList.filter((file) => file.typeFile === 'image');
    const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
    setImageFiles(images);  // עדכון רשימת התמונות
    setVideoFiles(videos);  // עדכון רשימת הוידיאו
  }, [fileMeetupList]);

  // פונקציה לשליפת מזהה הסרטון מ-YouTube מתוך הקישור
  const getYouTubeVideoId = (url) => {
    if (url) {
      const regExp = /(?:youtube\.com\/(?:[^\/]+\/.*\/|(?:v|e(?:mbed)?)\/?([\w-]{11}))|youtu\.be\/([\w-]{11}))/;
      const match = url.match(regExp);
      if (match) {
        return match[1] || match[2];  // מחזיר את מזהה הסרטון (11 תווים)
      }
    }
    return null;
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        --Home--
      </Typography>

      {/* הצגת תמונות באופן רנדומלי מתוך המערך */}
{/* <Grid container spacing={4} justifyContent="center">
  {imageFiles.length > 0 && imageFiles */}
// .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
// .slice(0, 5) // הצגת 5 תמונות בלבד
//     .map((file, index) => (
//       <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//         <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
//           <CardMedia
//             component="img"
//             height="100%"
//             image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
//             alt={`Image ${index + 1}`}
//           />
//         </Card>
//       </Grid>
//     ))}
// </Grid>

{/* הצגת 5 קבצי וידאו חדשים מתוך ה-DB */ }
{/* <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 3 }}>
  {videoFiles.length > 0 && videoFiles
    .slice(-5) // בחר את 5 הסרטונים החדשים ביותר
    .map((file, index) => {
      const videoId = getYouTubeVideoId(file.videoUrl);  // שליפת מזהה הסרטון
      console.log('Video URL:', file.videoUrl);  // הדפסת ה-URL של הסרטון
      console.log('Video ID:', videoId);  // הדפסת ה-ID של הסרטון

      return videoId ? (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {file.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {file.description}
              </Typography> */}
{/* הצגת סרטון YouTube בתוך iframe */ }
//               <Box sx={{ marginTop: 2 }}>
//                 <iframe
//                   width="100%"
//                   height="200"
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   title={`YouTube video player ${index}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       ) : null;
//     })}
// </Grid>

// {/* הצגת כותרת למאמרים */ }
// <Typography
//   variant="h4"
//   align="left"
//   gutterBottom
//   sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}
// >
//   New Article On HiTechistim
// </Typography>

// {/* הצגת כפתורים רק אם המשתמש הוא מנהל */ }
// {
//   isAdmin && (
//     <Box sx={{ marginBottom: 3 }}>
//       <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//         Add File Meetup
//       </Button>
//       <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
//         Add Gallery Category
//       </Button>
//       <Button variant="contained" color="primary">
//         Request To Add Article List
//       </Button>
//     </Box>
//   )
// }

{/* הצגת המאמרים */ }
{/* <Grid container spacing={14} justifyContent="center">
  {articleList.slice().reverse().slice(0, 5).map((article) => (
    <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: 180, // גובה אחיד
          width: 200, // רוחב אחיד
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
            Author: {article.author}
          </Typography>
          <Typography variant="body2">
            description: {article.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
    </Box >
      );
} */} 
