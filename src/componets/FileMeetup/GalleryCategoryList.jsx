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
                    // הגדרת תמונת רקע
                    backgroundImage: 'url("/images/meetupA.jpg")',
                    backgroundSize: 'cover', // שהתמונה תכסה את כל הרקע
                    backgroundPosition: 'center', // למרכז את התמונה
                    backgroundRepeat: 'no-repeat', // לא לחזור על התמונה
                    height: '100vh', // הגובה של אלמנט Box יהיה בגובה של כל המסך
                    width: '100%',  // הרוחב יהיה על כל הרוחב
                    display:'grid'
                    // minHeight:'100%',
                    // paddingBottom: 7,
                    // margin: 5,
                }}
            >
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
                                borderRadius: '1%',
                                margin: 5,
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
