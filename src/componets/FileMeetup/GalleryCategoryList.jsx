// //15-12-24
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
// import { bgcolor, width } from '@mui/system';
// import { Box } from '@mui/material';

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
//             <Box
//             sx = {{
//                 // bgcolor: 'blue',
//                 background:url('/images/h11.jpg'),
//                 paddingBottom: 7,
//                 margin:5,
//             }}>
//                 {/* מרכז את הטקסט Gallery Categories עם ריווח למעלה */}
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     gutterBottom
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '120px',  // הגדל את הריווח למעלה כך שיהיה מתחת לסרגל
//                         overflow: 'hidden',
//                         whiteSpace: 'nowrap',
//                         textOverflow: 'ellipsis',
//                     }}
//                 >
//                     Gallery Categories
//                 </Typography>

//                 {isAdmin && (
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => navigate('/AddGalleryCategory/')}
//                         sx={{
//                             marginTop: '20px', // ריווח בין הסרגל לכלים לכפתור
//                             marginBottom: '20px',
//                             display: 'block',
//                             marginLeft: 'auto',
//                             marginRight: 'auto', // מרכז את הכפתור
//                             padding: '6px 16px',
//                             fontSize: '0.9rem',
//                         }}
//                     >
//                         ➕ Add Gallery Category
//                     </Button>
//                 )}

//                 <Grid container spacing={3}>
//                     {GalleryCategoryList.map((galleryCategory) => (
//                         <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                             <Card sx={{
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                                 width: '100%',
//                                 height: 200,
//                                 overflow: 'hidden',
//                                 borderRadius:'1%'
//                             }}>
//                                 {galleryCategory.img_meetup ? (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                         }}
//                                         image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                         title={galleryCategory.nameMeetup}
//                                     />
//                                 ) : (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             backgroundColor: '#f0f0f0',
//                                         }}
//                                         title="No Image Available"
//                                     />
//                                 )}
//                                 <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Host company:</strong> {galleryCategory.companyName}
//                                     </Typography>
//                                     <CardActions sx={{ justifyContent: 'center' }}>
//                                         <Button
//                                             size="small"
//                                             onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                         >
//                                             File Meetup Details
//                                         </Button>
//                                     </CardActions>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </>
//     );
// }


//16-12-24
//עיצב +רקע
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
// import { Box } from '@mui/material';

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
//             <Box
//                 sx={{
//                     // הגדרת תמונת רקע
//                     backgroundImage: 'url("/images/meetupA.jpg")',
//                     backgroundSize: 'cover', // שהתמונה תכסה את כל הרקע
//                     backgroundPosition: 'center', // למרכז את התמונה
//                     backgroundRepeat: 'no-repeat', // לא לחזור על התמונה
//                     height: '100vh', // הגובה של אלמנט Box יהיה בגובה של כל המסך
//                     width: '100%',  // הרוחב יהיה על כל הרוחב
//                     display:'grid'
//                     // minHeight:'100%',
//                     // paddingBottom: 7,
//                     // margin: 5,
//                 }}
//             >
//                 {/* מרכז את הטקסט Gallery Categories עם ריווח למעלה */}
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     gutterBottom
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '120px',  // הגדל את הריווח למעלה כך שיהיה מתחת לסרגל
//                         overflow: 'hidden',
//                         whiteSpace: 'nowrap',
//                         textOverflow: 'ellipsis',
//                     }}
//                 >
//                     Gallery Categories
//                 </Typography>

//                 {isAdmin && (
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => navigate('/AddGalleryCategory/')}
//                         sx={{
//                             marginTop: '20px', // ריווח בין הסרגל לכלים לכפתור
//                             marginBottom: '20px',
//                             display: 'block',
//                             marginLeft: 'auto',
//                             marginRight: 'auto', // מרכז את הכפתור
//                             padding: '6px 16px',
//                             fontSize: '0.9rem',
//                         }}
//                     >
//                         ➕ Add Gallery Category
//                     </Button>
//                 )}

//                 <Grid container spacing={3}>
//                     {GalleryCategoryList.map((galleryCategory) => (
//                         <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                             <Card sx={{
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                                 width: '100%',
//                                 height: 200,
//                                 overflow: 'hidden',
//                                 borderRadius: '1%',
//                                 margin: 5,
//                             }}>
//                                 {galleryCategory.img_meetup ? (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                         }}
//                                         image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                         title={galleryCategory.nameMeetup}
//                                     />
//                                 ) : (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             backgroundColor: '#f0f0f0',
//                                         }}
//                                         title="No Image Available"
//                                     />
//                                 )}
//                                 <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Host company:</strong> {galleryCategory.companyName}
//                                     </Typography>
//                                     <CardActions sx={{ justifyContent: 'center' }}>
//                                         <Button
//                                             size="small"
//                                             onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}`)}
//                                         >
//                                             File Meetup Details
//                                         </Button>
//                                     </CardActions>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </>
//     );
// }

//נסיוניותתתת-----------------
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
                sx={{
                    // backgroundImage: 'url("/images/meetupA.jpg")',
                    // backgroundSize: 'cover',
                    backgroundColor: 'white',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    width: '100%',
                    display: 'grid'
                }}
            >
                {/* Added the requested text above Gallery Categories */}
                {/* <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        textAlign: 'center',
                        marginTop: '80px',  
                        color: '#fff',  
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                    }}
                >
                    Here you can explore all our past meetups.
                </Typography> */}

                {/* Centered text for Gallery Categories */}

                {/* כותרת ראשית */}
                <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        marginTop: '120px',
                        fontFamily: '"Roboto", sans-serif', // פונט מותאם אישית
                        fontWeight: 700, // משקל הפונט
                        fontSize: '2rem', // גודל הפונט
                        color: '#1A1A1A', // צבע הטקסט
                        lineHeight: 1.4, // גובה השורה
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
                            marginTop: '20px',
                            marginBottom: '20px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            padding: '6px 16px',
                            fontSize: '0.9rem',
                        }}
                    >
                        ➕ Add Gallery Category
                    </Button>
                )}

                {/* הטקסט שהוספת */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        textAlign: 'center',
                        marginTop: '20px',
                        maxWidth: '800px', // הגבלת רוחב הטקסט
                        margin: '0 auto', // למרכז את הטקסט בעמוד
                        fontFamily: '"Roboto", sans-serif', // פונט רובוטו
                        fontWeight: 500, // משקל פונט בינוני
                        fontSize: '1.1rem', // גודל פונט גדול יותר
                        color: '#333', // צבע טקסט כהה
                        lineHeight: 1.6, // גובה שורות יותר מרווח
                        letterSpacing: '0.5px', // ריווח בין אותיות
                    }}
                >
                    Here you can explore all our past meetups in the HiTechistim community. Each card represents a meetup on a different tech topic – simply click on a card to watch the full YouTube video of the meetup and enjoy pictures from the event.
                    This is your place to learn, expand your knowledge, and stay updated on the hottest topics in the tech world!
                </Typography>

                <Grid container spacing={6} sx={{padding: 20,}}>
                    {GalleryCategoryList.map((galleryCategory) => (
                        <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
                            <Card sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                overflow: 'hidden',
                                borderRadius: '1%',
                                // margin: 5,
                            }}>
                                {galleryCategory.img_meetup ? (
                                    <CardMedia
                                        sx={{
                                            flex: '0 0 335px',
                                            objectFit: 'cover',
                                        }}
                                        image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
                                        title={galleryCategory.nameMeetup}
                                    />
                                ) : (
                                    <CardMedia
                                        sx={{
                                            flex: '0 0 335px',
                                            backgroundColor: '#f0f0f0',
                                        }}
                                        title="No Image Available"
                                    />
                                )}
                                <CardContent sx={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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


//16-12-24
//נסיון 1
//הטקסט התסווף
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
// import { Box } from '@mui/material';

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
//             <Box
//                 sx={{
//                     backgroundImage: 'url("/images/meetupA.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: '100vh',
//                     width: '100%',
//                     display: 'grid'
//                 }}
//             >
//                 {/* כותרת ראשית */}
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     gutterBottom
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '120px',
//                         overflow: 'hidden',
//                         whiteSpace: 'nowrap',
//                         textOverflow: 'ellipsis',
//                     }}
//                 >
//                     Gallery Categories
//                 </Typography>

//                 {/* הטקסט שהוספת */}
//                 <Typography
//                     variant="h6"
//                     component="div"
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '20px',
//                         maxWidth: '800px',
//                         margin: '0 auto',
//                     }}
//                 >
//                     כאן תוכלו לחקור את כל המפגשים הקודמים בקהילת הייטקיסטים. כל כרטיס מייצג מפגש בנוגע לנושא טכנולוגי שונה – פשוט לחצו על כרטיס לצפייה בסרטון מלא ביוטיוב של המפגש ותהנו מתמונות מהאירוע.
//                     זהו המקום שלכם ללמוד, להרחיב את הידע ולהתעדכן בנושאים החמים בעולם הטכנולוגיה!
//                 </Typography>

//                 {isAdmin && (
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => navigate('/AddGalleryCategory/')}
//                         sx={{
//                             marginTop: '20px',
//                             marginBottom: '20px',
//                             display: 'block',
//                             marginLeft: 'auto',
//                             marginRight: 'auto',
//                             padding: '6px 16px',
//                             fontSize: '0.9rem',
//                         }}
//                     >
//                         ➕ Add Gallery Category
//                     </Button>
//                 )}

//                 <Grid container spacing={3}>
//                     {GalleryCategoryList.map((galleryCategory) => (
//                         <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                             <Card sx={{
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                                 width: '100%',
//                                 height: 200,
//                                 overflow: 'hidden',
//                                 borderRadius: '1%',
//                                 margin: 5,
//                             }}>
//                                 {galleryCategory.img_meetup ? (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                         }}
//                                         image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                         title={galleryCategory.nameMeetup}
//                                     />
//                                 ) : (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             backgroundColor: '#f0f0f0',
//                                         }}
//                                         title="No Image Available"
//                                     />
//                                 )}
//                                 <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Host company:</strong> {galleryCategory.hostCompany}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </>
//     );
// }

//נסיון 2
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
// import { Box } from '@mui/material';

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
//             <Box
//                 sx={{
//                     backgroundImage: 'url("/images/meetupA.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: '100vh',
//                     width: '100%',
//                     display: 'grid',
//                     position: 'relative', // הוספתי כדי לאפשר שימוש ב-position: 'absolute'
//                 }}
//             >
//                 {/* כפתור ממוקם בצד העליון */}
//                 {isAdmin && (
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => navigate('/AddGalleryCategory/')}
//                         sx={{
//                             position: 'absolute', // מיקום חופשי
//                             top: '20px', // מרחק מלמעלה
//                             right: '20px', // מרחק מהצד הימני
//                             padding: '6px 16px',
//                             fontSize: '0.9rem',
//                         }}
//                     >
//                         ➕ Add Gallery Category
//                     </Button>
//                 )}

//                 {/* כותרת ראשית */}
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     gutterBottom
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '120px',
//                         overflow: 'hidden',
//                         whiteSpace: 'nowrap',
//                         textOverflow: 'ellipsis',
//                     }}
//                 >
//                     Gallery Categories
//                 </Typography>

//                 {/* הטקסט שהוספת */}
//                 <Typography
//                     variant="h6"
//                     component="div"
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '20px',
//                         maxWidth: '800px',
//                         margin: '0 auto',
//                     }}
//                 >
//                     Here you can explore all our past meetups in the HiTechistim community. Each card represents a meetup on a different tech topic – simply click on a card to watch the full YouTube video of the meetup and enjoy pictures from the event.
//                     This is your place to learn, expand your knowledge, and stay updated on the hottest topics in the tech world!
//                 </Typography>

//                 <Grid container spacing={3}>
//                     {GalleryCategoryList.map((galleryCategory) => (
//                         <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                             <Card sx={{
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                                 width: '100%',
//                                 height: 200,
//                                 overflow: 'hidden',
//                                 borderRadius: '1%',
//                                 margin: 5,
//                             }}>
//                                 {galleryCategory.img_meetup ? (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                         }}
//                                         image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                         title={galleryCategory.nameMeetup}
//                                     />
//                                 ) : (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             backgroundColor: '#f0f0f0',
//                                         }}
//                                         title="No Image Available"
//                                     />
//                                 )}
//                                 <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Host company:</strong> {galleryCategory.companyName}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </>
//     );
// }


//נסיון 3
//שינוי עיצוב הכיתוב
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
// import { Box } from '@mui/material';

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
//             <Box
//                 sx={{
//                     backgroundImage: 'url("/images/meetupA.jpg")',
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: '100vh',
//                     width: '100%',
//                     display: 'grid',
//                     position: 'relative', // הוספתי כדי לאפשר שימוש ב-position: 'absolute'
//                 }}
//             >
//                 {/* כפתור ממוקם בצד העליון */}
//                 {isAdmin && (
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => navigate('/AddGalleryCategory/')}
//                         sx={{
//                             position: 'absolute', // מיקום חופשי
//                             top: '20px', // מרחק מלמעלה
//                             right: '20px', // מרחק מהצד הימני
//                             padding: '6px 16px',
//                             fontSize: '0.9rem',
//                         }}
//                     >
//                         ➕ Add Gallery Category
//                     </Button>
//                 )}

//                 {/* כותרת ראשית */}
//                 <Typography
//                     variant="h4"
//                     component="div"
//                     gutterBottom
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '120px',
//                         fontFamily: '"Roboto", sans-serif', // פונט מותאם אישית
//                         fontWeight: 700, // משקל הפונט
//                         fontSize: '2rem', // גודל הפונט
//                         color: '#1A1A1A', // צבע הטקסט
//                         lineHeight: 1.4, // גובה השורה
//                     }}
//                 >
//                     Gallery Categories
//                 </Typography>

//                 {/* הטקסט שהוספת */}
//                 <Typography
//                     variant="h6"
//                     component="div"
//                     sx={{
//                         textAlign: 'center',
//                         marginTop: '20px',
//                         maxWidth: '800px', // הגבלת רוחב הטקסט
//                         margin: '0 auto', // למרכז את הטקסט בעמוד
//                         fontFamily: '"Roboto", sans-serif', // פונט רובוטו
//                         fontWeight: 500, // משקל פונט בינוני
//                         fontSize: '1.1rem', // גודל פונט גדול יותר
//                         color: '#333', // צבע טקסט כהה
//                         lineHeight: 1.6, // גובה שורות יותר מרווח
//                         letterSpacing: '0.5px', // ריווח בין אותיות
//                     }}
//                 >
//                     Here you can explore all our past meetups in the HiTechistim community. Each card represents a meetup on a different tech topic – simply click on a card to watch the full YouTube video of the meetup and enjoy pictures from the event.
//                     This is your place to learn, expand your knowledge, and stay updated on the hottest topics in the tech world!
//                 </Typography>

//                 <Grid container spacing={3}>
//                     {GalleryCategoryList.map((galleryCategory) => (
//                         <Grid item xs={12} sm={12} md={12} lg={12} key={galleryCategory.id}>
//                             <Card sx={{
//                                 display: 'flex',
//                                 flexDirection: 'row',
//                                 width: '100%',
//                                 height: 200,
//                                 overflow: 'hidden',
//                                 borderRadius: '1%',
//                                 margin: 5,
//                             }}>
//                                 {galleryCategory.img_meetup ? (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             objectFit: 'cover',
//                                         }}
//                                         image={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                         title={galleryCategory.nameMeetup}
//                                     />
//                                 ) : (
//                                     <CardMedia
//                                         sx={{
//                                             width: '30%',
//                                             height: '100%',
//                                             backgroundColor: '#f0f0f0',
//                                         }}
//                                         title="No Image Available"
//                                     />
//                                 )}
//                                 <CardContent sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         <strong>Meetup Name:</strong>{galleryCategory.nameMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Meetup Description:</strong>{galleryCategory.descriptionMeetup}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         <strong>Host company:</strong> {galleryCategory.companyName}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </>
//     );
// }
