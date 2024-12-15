//11-12-24
//שיפוא הקוד שכפתור להוספה יהיה רק מורשה למנהל
//הבדיקה אם הוא מנהל נעשה על ידי הלוקאל סטורג שזה יותר פשוט בגלל שהוא כבר קיים המידע הזה במקום ליצצא קריאות שרת
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         // בודק אם המשתמש מנהל
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }

//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}

//             {/* אם המשתמש מנהל, תציג את כפתור ההוספה */}
//             {isAdmin && (
//                 <button onClick={() => navigate('/AddGalleryCategory/')}>➕Add Gallery Category</button>
//             )}

//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p>

//                         {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
//                         {galleryCategory.img_meetup ? (
//                             <p>
//                                 <strong>Image:</strong>
//                                 <img
//                                     src={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     alt="Gallery Meetup"
//                                     style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                                 />
//                             </p>
//                         ) : (
//                             <p>לא נמצא תמונה</p>
//                         )}

//                         <button onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}>
//                             File Meetup Details
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

//הקוד בצורה מעוצבת בעיתוב MUI
//הכרטיסיות לא מלבניות ולכן התמונות לא ניראות טוב
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         // בודק אם המשתמש מנהל
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }

//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom>
//                 Gallery Categories
//             </Typography>

//             {/* אם המשתמש מנהל, תציג את כפתור ההוספה */}
//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{ marginBottom: '20px' }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={galleryCategory.id}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{ height: 140 }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{ height: 140, backgroundColor: '#f0f0f0' }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     size="small"
//                                     onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                 >
//                                     File Meetup Details
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//עיצוב נוסף
//הכרטיסיות אורך ולא רוחב
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         // בודק אם המשתמש מנהל
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }

//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom>
//                 Gallery Categories
//             </Typography>

//             {/* אם המשתמש מנהל, תציג את כפתור ההוספה */}
//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{ marginBottom: '20px' }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={galleryCategory.id}>
//                         <Card sx={{ 
//                             maxWidth: 400, // הגדרת רוחב מותאם אישית
//                             display: 'flex',
//                             flexDirection: 'column',
//                             height: 'auto', // מתאם את גובה הכרטיס לגובה התמונה
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{ 
//                                         height: 0, // לא מגדיר גובה קבוע
//                                         paddingTop: '56.25%', // יחס גובה-רוחב 16:9
//                                         backgroundSize: 'cover', // מכסה את כל האזור
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{ 
//                                         height: 200, 
//                                         backgroundColor: '#f0f0f0' 
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ flex: 1 }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     size="small"
//                                     onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                 >
//                                     File Meetup Details
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//עיצוב 4
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         // בודק אם המשתמש מנהל
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }

//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom>
//                 Gallery Categories
//             </Typography>

//             {/* אם המשתמש מנהל, תציג את כפתור ההוספה */}
//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{ marginBottom: '20px' }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={6} md={6} lg={4} key={galleryCategory.id}>
//                         <Card sx={{ 
//                             maxWidth: 600, // הגדרת רוחב מותאם אישית
//                             height: 250,   // גובה נמוך יותר למראה רחב
//                             display: 'flex',
//                             flexDirection: 'column'
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{ 
//                                         height: 150, // גובה התמונה
//                                         objectFit: 'cover' // שמירה על יחס גובה-רוחב של התמונה
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{ 
//                                         height: 150, 
//                                         backgroundColor: '#f0f0f0' 
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ flex: 1 }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     size="small"
//                                     onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                 >
//                                     File Meetup Details
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//עיצוב 5
//עיצוב טוב רק שאני רותה שהם יהיו יותר רחבות
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         // בודק אם המשתמש מנהל
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }

//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom>
//                 Gallery Categories
//             </Typography>

//             {/* אם המשתמש מנהל, תציג את כפתור ההוספה */}
//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{ marginBottom: '20px' }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={6} md={6} lg={4} key={galleryCategory.id}>
//                         <Card sx={{ 
//                             maxWidth: 600, // הגדרת רוחב מותאם אישית
//                             height: 400,   // גובה הכרטיס
//                             display: 'flex',
//                             flexDirection: 'column',
//                             overflow: 'hidden', // כדי למנוע תמונה שמזיזה את שאר הכרטיס
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{
//                                         height: 250, // גובה התמונה
//                                         width: '100%', // התמונה מתפשטת לרוחב הכרטיס
//                                         objectFit: 'cover', // התמונה תכסה את השטח מבלי לעוות את יחס הגובה-רוחב שלה
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{ 
//                                         height: 250, 
//                                         width: '100%',
//                                         backgroundColor: '#f0f0f0',
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ flex: 1 }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button
//                                     size="small"
//                                     onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                 >
//                                     File Meetup Details
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//עיצוב 6
//עיצוב מאוד נחמד
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin');
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }

//         dispatch(getAllGalleryCategoryWithFileList());
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom>
//                 Gallery Categories
//             </Typography>

//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{ marginBottom: '20px' }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                         <Card sx={{ 
//                             display: 'flex',
//                             flexDirection: 'row', // הופך את התמונה והטקסט למקביליים
//                             width: '100%', // הכרטיס יתפוס את כל רוחב המסך
//                             height: 200, // גובה הכרטיס נשאר נמוך
//                             overflow: 'hidden',
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%', // התמונה תתפוס 30% מהרוחב
//                                         height: '100%', // התמונה תכסה את כל הגובה
//                                         objectFit: 'cover',
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{ 
//                                         width: '30%', 
//                                         height: '100%', 
//                                         backgroundColor: '#f0f0f0',
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ width: '70%' }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     {galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                                 <CardActions>
//                                     <Button
//                                         size="small"
//                                         onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                     >
//                                         File Meetup Details
//                                     </Button>
//                                 </CardActions>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//עיצוב 7
//עיצוב מהמםםםם
//רק צריך להוסיף רקע..
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin');
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }

//         dispatch(getAllGalleryCategoryWithFileList());
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom>
//                 Gallery Categories
//             </Typography>

//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{ marginBottom: '20px' }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                         <Card sx={{
//                             display: 'flex',
//                             flexDirection: 'row', // הופך את התמונה והטקסט למקביליים
//                             width: '100%', // הכרטיס יתפוס את כל רוחב המסך
//                             height: 200, // גובה הכרטיס נשאר נמוך
//                             overflow: 'hidden',
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%', // התמונה תתפוס 30% מהרוחב
//                                         height: '100%', // התמונה תכסה את כל הגובה
//                                         objectFit: 'cover',
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         backgroundColor: '#f0f0f0',
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Host company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                                 <CardActions sx={{ justifyContent: 'center' }}>
//                                     <Button
//                                         size="small"
//                                         onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                     >
//                                         File Meetup Details
//                                     </Button>
//                                 </CardActions>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }



//עיצוב נוסף
//רואים את הכפתור את הכותרת עוד לא..
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin');
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }

//         dispatch(getAllGalleryCategoryWithFileList());
//     }, [dispatch]);

//     return (
//         <>
//             <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', marginTop: '10px' }}>
//                 Gallery Categories
//             </Typography>

//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{
//                         marginTop: '20px', // ריווח בין הסרגל לכלים לכפתור
//                         marginBottom: '20px',
//                         display: 'block', 
//                         marginLeft: 'auto', 
//                         marginRight: 'auto', // מרכז את הכפתור
//                         padding: '6px 16px', // גודל הכפתור
//                         fontSize: '0.9rem',
//                     }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                         <Card sx={{
//                             display: 'flex',
//                             flexDirection: 'row',
//                             width: '100%',
//                             height: 200,
//                             overflow: 'hidden',
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         objectFit: 'cover',
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         backgroundColor: '#f0f0f0',
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Host company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                                 <CardActions sx={{ justifyContent: 'center' }}>
//                                     <Button
//                                         size="small"
//                                         onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                     >
//                                         File Meetup Details
//                                     </Button>
//                                 </CardActions>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//עיצוה 9
//הקוד בצורה מהממת
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin');
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }

//         dispatch(getAllGalleryCategoryWithFileList());
//     }, [dispatch]);

//     return (
//         <>
//             {/* מרכז את הטקסט Gallery Categories עם ריווח למעלה */}
//             <Typography 
//                 variant="h4" 
//                 component="div" 
//                 gutterBottom 
//                 sx={{ 
//                     textAlign: 'center', 
//                     marginTop: '50px',  // ריווח גדול יותר למעלה
//                     overflow: 'hidden',
//                     whiteSpace: 'nowrap',
//                     textOverflow: 'ellipsis', // מונע חיתוך של הטקסט במקרה שהוא ארוך מדי
//                 }} 
//             >
//                 Gallery Categories
//             </Typography>

//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{
//                         marginTop: '20px', // ריווח בין הסרגל לכלים לכפתור
//                         marginBottom: '20px',
//                         display: 'block', 
//                         marginLeft: 'auto', 
//                         marginRight: 'auto', // מרכז את הכפתור
//                         padding: '6px 16px', // גודל הכפתור
//                         fontSize: '0.9rem',
//                     }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                         <Card sx={{
//                             display: 'flex',
//                             flexDirection: 'row',
//                             width: '100%',
//                             height: 200,
//                             overflow: 'hidden',
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         objectFit: 'cover',
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         backgroundColor: '#f0f0f0',
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Host company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                                 <CardActions sx={{ justifyContent: 'center' }}>
//                                     <Button
//                                         size="small"
//                                         onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                     >
//                                         File Meetup Details
//                                     </Button>
//                                 </CardActions>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//שינוי מיקום הכפתור שהיה בצד
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin');
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }

//         dispatch(getAllGalleryCategoryWithFileList());
//     }, [dispatch]);

//     return (
//         <>
//             {/* מרכז את הטקסט Gallery Categories עם ריווח למעלה */}
//             <Typography 
//                 variant="h4" 
//                 component="div" 
//                 gutterBottom 
//                 sx={{ 
//                     textAlign: 'center', 
//                     marginTop: '120px',  // הגדל את הריווח למעלה כך שיהיה מתחת לסרגל
//                     overflow: 'hidden',
//                     whiteSpace: 'nowrap',
//                     textOverflow: 'ellipsis',
//                 }} 
//             >
//                 Gallery Categories
//             </Typography>

//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => navigate('/AddGalleryCategory/')}
//                     sx={{
//                         marginTop: '20px', // ריווח בין הסרגל לכלים לכפתור
//                         marginBottom: '20px',
//                         display: 'block', 
//                         marginLeft: 'auto', 
//                         marginRight: 'auto', // מרכז את הכפתור
//                         padding: '6px 16px',
//                         fontSize: '0.9rem',
//                     }}
//                 >
//                     ➕ Add Gallery Category
//                 </Button>
//             )}

//             <Grid container spacing={3}>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                         <Card sx={{
//                             display: 'flex',
//                             flexDirection: 'row',
//                             width: '100%',
//                             height: 200,
//                             overflow: 'hidden',
//                         }}>
//                             {galleryCategory.img_meetup ? (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         objectFit: 'cover',
//                                     }}
//                                     image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     title={galleryCategory.nameMeetup}
//                                 />
//                             ) : (
//                                 <CardMedia
//                                     sx={{
//                                         width: '30%',
//                                         height: '100%',
//                                         backgroundColor: '#f0f0f0',
//                                     }}
//                                     title="No Image Available"
//                                 />
//                             )}
//                             <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                 <Typography gutterBottom variant="h6" component="div">
//                                     <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <strong>Host company:</strong> {galleryCategory.companyName}
//                                 </Typography>
//                                 <CardActions sx={{ justifyContent: 'center' }}>
//                                     <Button
//                                         size="small"
//                                         onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                     >
//                                         File Meetup Details
//                                     </Button>
//                                 </CardActions>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </>
//     );
// }


//15-12-24
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { bgcolor, width } from '@mui/system';
import { Box } from '@mui/material';

export default function GalleryCategoryList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus === 'true') {
            setIsAdmin(true);
        }

        dispatch(getAllGalleryCategoryWithFileList());
    }, [dispatch]);

    return (
        <>
            <Box
            sx = {{
                // bgcolor: 'blue',
                paddingBottom: 7,
                margin:5,
            }}>
                {/* מרכז את הטקסט Gallery Categories עם ריווח למעלה */}
                <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        marginTop: '120px',  // הגדל את הריווח למעלה כך שיהיה מתחת לסרגל
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}
                >
                    Gallery Categories
                </Typography>

                {isAdmin && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/AddGalleryCategory/')}
                        sx={{
                            marginTop: '20px', // ריווח בין הסרגל לכלים לכפתור
                            marginBottom: '20px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto', // מרכז את הכפתור
                            padding: '6px 16px',
                            fontSize: '0.9rem',
                        }}
                    >
                        ➕ Add Gallery Category
                    </Button>
                )}

                <Grid container spacing={3}>
                    {GalleryCategoryList.map((galleryCategory) => (
                        <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                height: 200,
                                overflow: 'hidden',
                                borderRadius:'1%'
                            }}>
                                {galleryCategory.img_meetup ? (
                                    <CardMedia
                                        sx={{
                                            width: '30%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
                                        title={galleryCategory.nameMeetup}
                                    />
                                ) : (
                                    <CardMedia
                                        sx={{
                                            width: '30%',
                                            height: '100%',
                                            backgroundColor: '#f0f0f0',
                                        }}
                                        title="No Image Available"
                                    />
                                )}
                                <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Host company:</strong> {galleryCategory.companyName}
                                    </Typography>
                                    <CardActions sx={{ justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
                                        >
                                            File Meetup Details
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
