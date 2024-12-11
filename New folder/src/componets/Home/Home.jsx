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
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleList } from '../../slices/ArticleSlice';
import '@fontsource/dancing-script';
import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';

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
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        --Home--
      </Typography>

      {/* הצגת תמונות באופן רנדומלי מתוך המערך */}
      <Grid container spacing={4} justifyContent="center">
        {imageFiles.length > 0 && imageFiles
          .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
          .slice(0, 5) // הצגת 5 תמונות בלבד
          .map((file, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
                  alt={`Image ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* הצגת 5 קבצי וידאו חדשים */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 3 }}>
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
                  {/* הצגת לינק או משאב וידאו */}
                  <Button href={file.videoUrl} target="_blank" variant="contained" color="primary" sx={{ marginTop: 1 }}>
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* הצגת כותרת למאמרים */}
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        sx={{ fontFamily: 'Dancing Script, Arial, sans-serif' }}
      >
        New Article On HiTechistim
      </Typography>

      {/* הצגת כפתורים רק אם המשתמש הוא מנהל */}
      {isAdmin && (
        <Box sx={{ marginBottom: 3 }}>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Add File Meetup
          </Button>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Add Gallery Category
          </Button>
          <Button variant="contained" color="primary">
            Request To Add Article List
          </Button>
        </Box>
      )}

      {/* הצגת המאמרים */}
      <Grid container spacing={14} justifyContent="center">
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
    </Box>
  );
}
