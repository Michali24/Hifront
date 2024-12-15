

//12-12-24
//צריך לסדר את העיצוב...
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


//   return (
//     <>
//       <div className="BackgroundContainer" />
//       <div className="ContentContainer">

//         {/* <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 3 }}>
//           {videoFiles.length > 0 && videoFiles
//             .slice(-5) // בחירת 5 הקבצים החדשים ביותר
//             .map((file, index) => (
//               <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//                 <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
//                   <CardContent>
//                     <Typography variant="h6" component="div">
//                       Video {index + 1}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {file.title}
//                     </Typography>

//                     <Button href={file.videoUrl} target="_blank" variant="contained" color="primary" sx={{ marginTop: 1 }}>
//                       Watch Video
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//         </Grid> */}
//         <Grid container spacing={4} justifyContent="center">
//           {imageFiles.length > 0 && imageFiles
//             .sort(() => Math.random() - 0.5) // מיקסוס רנדומלי של התמונות
//             .slice(0, 5) // הצגת 5 תמונות בלבד
//             .map((file, index) => (
//               <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//                 <Card sx={{ height: 250, display: 'flex', flexDirection: 'column' }}>
//                   <CardMedia
//                     component="img"
//                     height="100%"
//                     image={`data:image/jpeg;base64,${file.fileData}`} // הצגת תמונה מבסיס64
//                     alt={`Image ${index + 1}`}
//                   />
//                   <CardContent sx={{ textAlign: 'center' }}>
//                     <Typography variant="h6" component="div">
//                       תמונה {index + 1}
//                     </Typography>
//                   </CardContent>                    </Card>
//               </Grid>
//             ))}
//         </Grid>

//         <div style={{ fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', width: '100%', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//           <p>"Welcome to our technology learning hub Hitechistim! </p>
//           <p> Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
//           <p>Whether you're looking to master coding,explore data science, or understand the latest </p>
//           <p>in cybersecurity, our comprehensive courses have you covered. </p>
//           <p>Learn at your own pace, with hands-on projects and real-world  applications. </p>
//           <p>Our experienced instructors are here to guide you every step of the way.</p>
//           <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
//           <p>Your journey to tech mastery starts here!" </p>

//         </div>
//       </div>

//       <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" > </div>
//       <div className="SecondaryBackground">
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             New Article on Hitechistim:
//           </Typography>
//           <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}>
//           </Typography>
//           {/* הטוב ביותר */}
//           <Grid container spacing={2} className="CourseList">
//             {articleList.slice().reverse().slice(0, 5).map((article) => (
//               <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                 <Card sx={{ maxWidth: 346 }}>
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                     <span>
//                         <strong style={{ color: '#007bff' }}>Article name:</strong>
//                         <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                         <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                       </span>
//                       <div>Description of the course :{article.description}bjhbhjublnk jnk njnkknklnl lkm</div>
//                     </Typography>
//                   </CardContent>

//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         {/* הוספת מרווח בין השוליים התחתונים */}
//         <div style={{ marginBottom: '70px' }}></div>
//       </div>
//     </>
//   );
// }

//חדש 
//בכיתה 15-12-24
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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

//   // פילטר של קבצים מסוג תמונה ווידאו
//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
//     setVideoFiles(videos);
//   }, [fileMeetupList]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <div className="BackgroundContainer" />
//       <div className="ContentContainer">

//         {/* קרוסלת תמונות */}
//         <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
//           {imageFiles.length > 0 ? (
//             <Slider {...sliderSettings}>
//               {imageFiles.map((file, index) => (
//                 <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <img
//                     src={`data:image/jpeg;base64,${file.fileData}`}
//                     alt={`Slide ${index + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Slider>
//           ) : (
//             <Typography variant="body1" sx={{ textAlign: "center" }}>
//               No images available to display.
//             </Typography>
//           )}
//         </Box>

//         <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//           <p>"Welcome to our technology learning hub Hitechistim! </p>
//           <p> Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
//           <p>Whether you're looking to master coding, explore data science, or understand the latest </p>
//           <p>in cybersecurity, our comprehensive courses have you covered. </p>
//           <p>Learn at your own pace, with hands-on projects and real-world applications. </p>
//           <p>Our experienced instructors are here to guide you every step of the way.</p>
//           <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
//           <p>Your journey to tech mastery starts here!" </p>
//         </div>
//       </div>

//       <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" > </div>
//       <div className="SecondaryBackground">
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             New Article on Hitechistim:
//           </Typography>
//           <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}>
//           </Typography>
//           {/* הצגת מאמרים */}
//           <Grid container spacing={2} className="CourseList">
//             {articleList.slice().reverse().slice(0, 5).map((article) => (
//               <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                 <Card sx={{ maxWidth: 346 }}>
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       <span>
//                         <strong style={{ color: '#007bff' }}>Article name:</strong>
//                         <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                         <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                       </span>
//                       <div>Description of the course: {article.description}</div>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         <div style={{ marginBottom: '70px' }}></div>
//         {/* וידאו!!-להוסיף */}
//         {/* תוכן נוסף */}
//         {/* <Grid container spacing={4} justifyContent="center">
//           {videoFiles.length > 0 && videoFiles
//             .slice(0, 5) // הצגת 5 סרטונים בלבד
//             .map((file, index) => (
//               <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
//                 <Card sx={{ height: 250, display: 'flex', flexDirection: 'column' }}>
//                   <CardMedia
//                     component="video"
//                     height="100%"
//                     controls
//                     src={file.videoUrl}
//                     alt={`Video ${index + 1}`}
//                   />
//                   <CardContent sx={{ textAlign: 'center' }}>
//                     <Typography variant="h6" component="div">
//                       סרטון {index + 1}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//         </Grid> */}
//       </div>
//     </>
//   );
// }


//נסיון נוסף בבית להציג סרטון
//15-12-24
//הוספתץ סרטון מעל הקרוסלה
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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

//   // פילטר של קבצים מסוג תמונה ווידאו
//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
//     setVideoFiles(videos);
//   }, [fileMeetupList]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <div className="BackgroundContainer" />
//       <div className="ContentContainer">

//         {/* סרטון מתוך תיקיית public */}
//         <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <video 
//             width="100%" 
//             height="400px" 
//             controls
//             style={{
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </Box>

//         {/* קרוסלת תמונות */}
//         <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
//           {imageFiles.length > 0 ? (
//             <Slider {...sliderSettings}>
//               {imageFiles.map((file, index) => (
//                 <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <img
//                     src={`data:image/jpeg;base64,${file.fileData}`}
//                     alt={`Slide ${index + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Slider>
//           ) : (
//             <Typography variant="body1" sx={{ textAlign: "center" }}>
//               אין תמונות להציג
//             </Typography>
//           )}
//         </Box>

//         <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//           <p>"ברוכים הבאים למרכז הלמידה הטכנולוגי שלנו הייטקיסטים!"</p>
//           <p> צלול לעולם של ידע עם הקורסים המומחים שלנו, המתאימים למתחילים ומקצוענים כאחד.</p>
//           <p>בין אם אתה רוצה לשלוט בתכנות, לחקור מדעי נתונים, או להבין את תחום אבטחת המידע, </p>
//           <p>הקורסים המלאים שלנו מכסים את כל מה שצריך. </p>
//           <p>למד בקצב שלך, עם פרויקטים מעשיים ויישומים מהמציאות.</p>
//           <p>המרצים המנוסים שלנו כאן כדי להדריך אותך בכל צעד.</p>
//           <p>הצטרף לקהילה שלנו ותישאר מעודכן בתחום הטכנולוגיה המשתנה במהירות.</p>
//           <p>המסע שלך לשליטה טכנולוגית מתחיל כאן!"</p>
//         </div>
//       </div>

//       <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" ></div>
//       <div className="SecondaryBackground">
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             מאמר חדש בהייטקיסטים:
//           </Typography>
//           <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}>
//           </Typography>
//           {/* הצגת מאמרים */}
//           <Grid container spacing={2} className="CourseList">
//             {articleList.slice().reverse().slice(0, 5).map((article) => (
//               <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                 <Card sx={{ maxWidth: 346 }}>
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       <span>
//                         <strong style={{ color: '#007bff' }}>שם המאמר:</strong>
//                         <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                         <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                       </span>
//                       <div>תיאור הקורס: {article.description}</div>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </div>
//     </>
//   );
// }



//עיצוב נוסף שהסרטון יפעל כל כמה שניות לבד+יתפרס לרוחב העמוד
//ניסיון
//הסרטון פרוס לרוחב אבל לא פועל אוטומטית
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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

//   // פילטר של קבצים מסוג תמונה ווידאו
//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
//     setVideoFiles(videos);
//   }, [fileMeetupList]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <div className="BackgroundContainer" />
//       <div className="ContentContainer">

//         {/* סרטון מתוך תיקיית public */}
//         <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <video
//             width="100%"
//             height="auto"
//             controls
//             autoPlay
//             loop
//             muted
//             style={{
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </Box>

//         {/* קרוסלת תמונות */}
//         <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
//           {imageFiles.length > 0 ? (
//             <Slider {...sliderSettings}>
//               {imageFiles.map((file, index) => (
//                 <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <img
//                     src={`data:image/jpeg;base64,${file.fileData}`}
//                     alt={`Slide ${index + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Slider>
//           ) : (
//             <Typography variant="body1" sx={{ textAlign: "center" }}>
//               אין תמונות להציג
//             </Typography>
//           )}
//         </Box>

//         <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//           <p>"ברוכים הבאים למרכז הלמידה הטכנולוגי שלנו הייטקיסטים!"</p>
//           <p> צלול לעולם של ידע עם הקורסים המומחים שלנו, המתאימים למתחילים ומקצוענים כאחד.</p>
//           <p>בין אם אתה רוצה לשלוט בתכנות, לחקור מדעי נתונים, או להבין את תחום אבטחת המידע, </p>
//           <p>הקורסים המלאים שלנו מכסים את כל מה שצריך. </p>
//           <p>למד בקצב שלך, עם פרויקטים מעשיים ויישומים מהמציאות.</p>
//           <p>המרצים המנוסים שלנו כאן כדי להדריך אותך בכל צעד.</p>
//           <p>הצטרף לקהילה שלנו ותישאר מעודכן בתחום הטכנולוגיה המשתנה במהירות.</p>
//           <p>המסע שלך לשליטה טכנולוגית מתחיל כאן!"</p>
//         </div>
//       </div>

//       <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" ></div>
//       <div className="SecondaryBackground">
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             מאמר חדש בהייטקיסטים:
//           </Typography>
//           <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}>
//           </Typography>
//           {/* הצגת מאמרים */}
//           <Grid container spacing={2} className="CourseList">
//             {articleList.slice().reverse().slice(0, 5).map((article) => (
//               <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                 <Card sx={{ maxWidth: 346 }}>
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       <span>
//                         <strong style={{ color: '#007bff' }}>שם המאמר:</strong>
//                         <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                         <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                       </span>
//                       <div>תיאור הקורס: {article.description}</div>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </div>
//     </>
//   );
// }

//נסיון נוסף שיפעל אוטומטית
//עובד אטומטי
// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllArticleList } from '../../slices/ArticleSlice';
// import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
// import '@fontsource/dancing-script';
// import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Home.css';

// export default function Home() {
//   const dispatch = useDispatch();
//   const articleList = useSelector((state) => state.article.ArticleList);
//   const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [videoFiles, setVideoFiles] = useState([]);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const adminStatus = localStorage.getItem('isAdmin');
//     if (adminStatus === 'true') {
//       setIsAdmin(true);
//     }
//     dispatch(getAllArticleList());
//     dispatch(getAllFileMeeetupList());
//   }, [dispatch]);

//   useEffect(() => {
//     const images = fileMeetupList.filter((file) => file.typeFile === 'image');
//     const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
//     setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
//     setVideoFiles(videos);
//   }, [fileMeetupList]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (videoRef.current) {
//         videoRef.current.currentTime = 0; // מחזיר את הסרטון להתחלה
//         videoRef.current.play(); // מתחיל את הסרטון
//       }
//     }, 1000000000); // כל 5 שניות

//     return () => clearInterval(intervalId); // לא לשכוח לנקות את ה-interval כשתרצה להפסיק
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     adaptiveHeight: true,
//   };

//   return (
//     <>
//       <div className="BackgroundContainer" />
//       <div className="ContentContainer">

//         {/* סרטון מעל הקרוסלה */}
//         <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
//           <video 
//             ref={videoRef} 
//             width="100%" 
//             height="auto" 
//             controls
//             autoPlay
//             loop
//             muted
//             style={{
//               borderRadius: "10px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </Box>

//         {/* קרוסלת תמונות */}
//         <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
//           {imageFiles.length > 0 ? (
//             <Slider {...sliderSettings}>
//               {imageFiles.map((file, index) => (
//                 <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <img
//                     src={`data:image/jpeg;base64,${file.fileData}`}
//                     alt={`Slide ${index + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Slider>
//           ) : (
//             <Typography variant="body1" sx={{ textAlign: "center" }}>
//               No images available to display.
//             </Typography>
//           )}
//         </Box>

//         <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
//           <p>"Welcome to our technology learning hub Hitechistim!</p>
//           <p>Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
//           <p>Whether you're looking to master coding, explore data science, or understand the latest</p>
//           <p>in cybersecurity, our comprehensive courses have you covered.</p>
//           <p>Learn at your own pace, with hands-on projects and real-world applications.</p>
//           <p>Our experienced instructors are here to guide you every step of the way.</p>
//           <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
//           <p>Your journey to tech mastery starts here!"</p>
//         </div>
//       </div>

//       <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
//       <div className="MainImage" /> 
//       <div className="SecondaryBackground">
//         <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
//           <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
//             New Article on Hitechistim:
//           </Typography>
//           <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}></Typography>

//           {/* הצגת מאמרים */}
//           <Grid container spacing={2} className="CourseList">
//             {articleList.slice().reverse().slice(0, 5).map((article) => (
//               <Grid item key={article.id} sx={{ paddingBottom: 6 }}>
//                 <Card sx={{ maxWidth: 346 }}>
//                   <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                       <span>
//                         <strong style={{ color: '#007bff' }}>Article name:</strong>
//                         <strong style={{ color: '#007bff' }}> {article.title}</strong>
//                         <strong style={{ color: '#007bff' }}>{article.author}</strong>
//                       </span>
//                       <div>Description of the course: {article.description}</div>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         <div style={{ marginBottom: '70px' }}></div>
//       </div>
//     </>
//   );
// }

//שיוינ גודל תצוגת הסרטון
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleList } from '../../slices/ArticleSlice';
import { getAllFileMeeetupList } from '../../slices/FileMeetupSlice';
import '@fontsource/dancing-script';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.article.ArticleList);
  const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
    dispatch(getAllArticleList());
    dispatch(getAllFileMeeetupList());
  }, [dispatch]);

  useEffect(() => {
    const images = fileMeetupList.filter((file) => file.typeFile === 'image');
    const videos = fileMeetupList.filter((file) => file.typeFile === 'video');
    setImageFiles(images.sort(() => Math.random() - 0.5)); // מיקסוס רנדומלי של התמונות
    setVideoFiles(videos);
  }, [fileMeetupList]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // מחזיר את הסרטון להתחלה
        videoRef.current.play(); // מתחיל את הסרטון
      }
    }, 1000000000); // כל 5 שניות

    return () => clearInterval(intervalId); // לא לשכוח לנקות את ה-interval כשתרצה להפסיק
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="BackgroundContainer" />
      <div className="ContentContainer">
        
        <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <video
            ref={videoRef}
            width="70%" // שינוי רוחב הווידאו ל-70% (תוכל לשנות לפי הצורך)
            height="auto"
            controls
            autoPlay
            loop
            muted
            style={{
              maxWidth: "600px", // קביעת רוחב מקסימלי
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* <Box sx={{ marginBottom: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <video
            ref={videoRef}
            width="80%" // יגרום לסרטון להתפשט לרוחב הדף
            height="auto"
            controls
            autoPlay
            loop
            muted
            style={{
              objectFit: "cover", // ישמור על יחס גובה-רוחב של הסרטון ויתפשט לכל רוחב המסך
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <source src="/vidoe/iconVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box> */}



        {/* קרוסלת תמונות */}
        <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: 3, marginTop: 7 }}>
          {imageFiles.length > 0 ? (
            <Slider {...sliderSettings}>
              {imageFiles.map((file, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img
                    src={`data:image/jpeg;base64,${file.fileData}`}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          ) : (
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              No images available to display.
            </Typography>
          )}
        </Box>

        <div style={{ margin: '115px', fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', textAlign: 'left', color: 'black', marginTop: '50px' }}>
          <p>"Welcome to our technology learning hub Hitechistim!</p>
          <p>Dive into a world of knowledge with our expertly crafted courses designed for beginners and professionals alike.</p>
          <p>Whether you're looking to master coding, explore data science, or understand the latest</p>
          <p>in cybersecurity, our comprehensive courses have you covered.</p>
          <p>Learn at your own pace, with hands-on projects and real-world applications.</p>
          <p>Our experienced instructors are here to guide you every step of the way.</p>
          <p>Join our vibrant community of learners and stay ahead in the fast-evolving tech landscape.</p>
          <p>Your journey to tech mastery starts here!"</p>
        </div>
      </div>

      <hr style={{ borderTop: '2px solid purple', margin: '20px 0' }} />
      <div className="MainImage" />
      <div className="SecondaryBackground">
        <Box sx={{ position: 'relative', zIndex: 1, padding: '20px', width: '100%', paddingBottom: 2 }}>
          <Typography variant="h4" component="div" gutterBottom sx={{ paddingBottom: 0, fontFamily: '"Great Vibes", cursive' }}>
            New Article on Hitechistim:
          </Typography>
          <Typography variant="body1" component="div" sx={{ paddingBottom: 7, fontFamily: '"Great Vibes", cursive' }}></Typography>

          {/* הצגת מאמרים */}
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
                      <div>Description of the course: {article.description}</div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <div style={{ marginBottom: '70px' }}></div>
      </div>
      <div className='TheradBackground'>
      </div>
    </>
  );
}