//עיצוב 3
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';
// import { TextField, Button, Select, MenuItem, Grid, InputLabel, FormControl, Box, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router';

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();
//     const navigate=useNavigate();

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const [PDFArticleFile, setPDFArticleFile] = useState(null);
//     const [newArticle, setNewArticle] = useState({
//         title: '',
//         author: '',
//         // content: '',
//         description: '',
//         status: false,
//         categoryOfArticles: {
//             id: '', // כאן ייכנס ה-ID של הקטגוריה שנבחרה
//         },
//     });

//     // טיפול בשינוי הקובץ
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setPDFArticleFile(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בשינוי הקטגוריה
//     const handleCategoryChange = (e) => {
//         const categoryId = e.target.value;
//         setNewArticle((prevData) => ({
//             ...prevData,
//             categoryOfArticles: {
//                 id: categoryId, // שמירת ה-ID של הקטגוריה תחת categoryOfArticles
//             },
//         }));
//     };

//     // טיפול בהגשת הטופס
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // בדיקת קובץ
//         if (!PDFArticleFile) {
//             alert('Please upload a PDF file.');
//             return;
//         }

//         console.log('Uploading..', PDFArticleFile);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify(newArticle)], { type: 'application/json' })
//         );
//         formData.append('file', PDFArticleFile);

//         console.log('FormData before dispatch:', formData);

//         dispatch(postArticle(formData))
//             .then(() => {
//                 alert('Article submitted successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error submitting article:', error);
//                 alert('Failed to submit the article.');
//             });
//     };

//     return (
//         <Box
//             sx={{
//                 // background:url('/images/B14.jpg'),
//                 display: 'flex',
//                 justifyContent: 'flex-start',
//                 alignItems: 'flex-start',
//                 padding: '16em',
//                 minHeight: '100vh', // שימו לב, הגובה כאן מתפשט
//             }}
//         >
//             <Card sx={{ maxWidth: 600, width: '100%', position: 'relative' }}>
//                 <CardContent>
//                     <Typography variant="h5" component="div" gutterBottom>
//                         Request to Add an Article
//                     </Typography>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container spacing={2}>
//                             {/* קובץ PDF */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="file"
//                                     name="PDFArticleFile"
//                                     onChange={handleFileChange}
//                                     fullWidth
//                                     required
//                                     label="Upload PDF"
//                                     InputLabelProps={{
//                                         shrink: true,
//                                     }}
//                                 />
//                             </Grid>

//                             {/* כותרת */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     name="title"
//                                     label="Article Title"
//                                     placeholder="Enter the Article Title"
//                                     value={newArticle.title}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                 />
//                             </Grid>

//                             {/* מחבר */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     name="author"
//                                     label="Author Name"
//                                     placeholder="Enter the Author Name"
//                                     value={newArticle.author}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                 />
//                             </Grid>

//                             {/* תוכן */}
//                             {/* <Grid item xs={12}>
//                                 <TextField
//                                     name="content"
//                                     label="Content"
//                                     placeholder="Enter the Content"
//                                     value={newArticle.content}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                     multiline
//                                     rows={4}
//                                 />
//                             </Grid> */}

//                             {/* תיאור */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     name="description"
//                                     label="Description"
//                                     placeholder="Enter the Description"
//                                     value={newArticle.description}
//                                     onChange={handleChange}
//                                     fullWidth
//                                     required
//                                 />
//                             </Grid>

//                             {/* קטגוריה */}
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth required>
//                                     <InputLabel>Category</InputLabel>
//                                     <Select
//                                         name="categoryOfArticles"
//                                         value={newArticle.categoryOfArticles.id}
//                                         onChange={handleCategoryChange}
//                                         label="Category"
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select a category
//                                         </MenuItem>
//                                         {options.map((option) => (
//                                             <MenuItem key={option.id} value={option.id}>
//                                                 {option.categoryName}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12}>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     fullWidth
//                                 >
//                                     Submit Article
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>
//                     <button onClick={()=>navigate('/CateforyArticle')}>Back to Category Of Articles</button>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// }


//הוספת ולידציות -חובה!!!
//יש ולידציות אהל נותן לנכהניס שם של מחבר...
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';
// import {
//     TextField,
//     Button,
//     Select,
//     MenuItem,
//     Grid,
//     InputLabel,
//     FormControl,
//     Box,
//     Card,
//     CardContent,
//     Typography,
//     FormHelperText,
//     Alert,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//     PDFArticleFile: Yup.mixed()
//         .required('דרוש קובץ PDF')
//         .test(
//             'fileFormat',
//             'נדרש קובץ בפורמט PDF',
//             value => value && value.type === 'application/pdf'
//         ),
//     title: Yup.string()
//         .min(5, 'הכותרת חייבת להכיל לפחות 5 תווים')
//         .max(100, 'הכותרת לא יכולה להכיל יותר מ-100 תווים')
//         .required('הכותרת היא חובה'),
//     author: Yup.string()
//         .min(3, 'שם המחבר חייב להכיל לפחות 3 תווים')
//         .max(50, 'שם המחבר לא יכול להכיל יותר מ-50 תווים')
//         .required('שם המחבר הוא חובה'),
//     description: Yup.string()
//         .min(10, 'התיאור חייב להכיל לפחות 10 תווים')
//         .max(500, 'התיאור לא יכול להכיל יותר מ-500 תווים')
//         .required('התיאור הוא חובה'),
//     categoryOfArticles: Yup.string()
//         .required('בחירת קטגוריה היא חובה'),
// });

// export default function RequestToAddAnArticle() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     // שליפת רשימת הקטגוריות
//     useEffect(() => {
//         dispatch(getAllCategoryList());
//     }, [dispatch]);

//     const options = useSelector((state) => state.article.CategoryList);

//     const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
//         resolver: yupResolver(validationSchema),
//         mode: 'onTouched',
//     });

//     const onSubmit = async (data) => {
//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileARTICLE',
//             new Blob([JSON.stringify({
//                 title: data.title,
//                 author: data.author,
//                 description: data.description,
//                 status: false,
//                 categoryOfArticles: { id: data.categoryOfArticles },
//             })], { type: 'application/json' })
//         );
//         formData.append('file', data.PDFArticleFile);

//         try {
//             const response = await dispatch(postArticle(formData));
//             if (postArticle.fulfilled.match(response)) {
//                 setSuccessMessage('המאמר נשלח בהצלחה!');
//                 reset();
//                 navigate('/CateforyArticle');
//             } else {
//                 setErrorMessage('השליחה של המאמר נכשלה.');
//             }
//         } catch (error) {
//             setErrorMessage('השליחה של המאמר נכשלה.');
//             console.error('שגיאה בשליחת המאמר:', error);
//         }
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 padding: '2em',
//                 minHeight: '100vh',
//                 backgroundColor: '#f5f5f5',
//             }}
//         >
//             <Card sx={{ maxWidth: 600, width: '100%', padding: '2em' }}>
//                 <CardContent>
//                     <Typography variant="h5" component="div" gutterBottom>
//                         בקשה להוספת מאמר
//                     </Typography>

//                     {errorMessage && <Alert severity="error" sx={{ mb: 2 }}>{errorMessage}</Alert>}
//                     {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

//                     <form onSubmit={handleSubmit(onSubmit)}>

//                         <Grid container spacing={2}>
//                             {/* העלאת קובץ PDF */}
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth error={!!errors.PDFArticleFile}>
//                                     <InputLabel shrink htmlFor="PDFArticleFile">
//                                         העלאת PDF
//                                     </InputLabel>
//                                     <input
//                                         id="PDFArticleFile"
//                                         type="file"
//                                         accept="application/pdf"
//                                         {...register('PDFArticleFile')}
//                                         style={{ marginTop: '16px' }}
//                                     />
//                                     {errors.PDFArticleFile && (
//                                         <FormHelperText>{errors.PDFArticleFile.message}</FormHelperText>
//                                     )}
//                                 </FormControl>
//                             </Grid>

//                             {/* כותרת */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="כותרת המאמר"
//                                     variant="outlined"
//                                     {...register('title')}
//                                     error={!!errors.title}
//                                     helperText={errors.title?.message}
//                                 />
//                             </Grid>

//                             {/* מחבר */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="שם המחבר"
//                                     variant="outlined"
//                                     {...register('author')}
//                                     error={!!errors.author}
//                                     helperText={errors.author?.message}
//                                 />
//                             </Grid>

//                             {/* תיאור */}
//                             <Grid item xs={12}>
//                                 <TextField
//                                     fullWidth
//                                     label="תיאור"
//                                     variant="outlined"
//                                     multiline
//                                     rows={4}
//                                     {...register('description')}
//                                     error={!!errors.description}
//                                     helperText={errors.description?.message}
//                                 />
//                             </Grid>

//                             {/* קטגוריה */}
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth error={!!errors.categoryOfArticles}>
//                                     <InputLabel>קטגוריה</InputLabel>
//                                     <Controller
//                                         name="categoryOfArticles"
//                                         control={control}
//                                         defaultValue=""
//                                         render={({ field }) => (
//                                             <Select
//                                                 {...field}
//                                                 label="קטגוריה"
//                                             >
//                                                 <MenuItem value="" disabled>
//                                                     בחר קטגוריה
//                                                 </MenuItem>
//                                                 {options && options.map((option) => (
//                                                     <MenuItem key={option.id} value={option.id}>
//                                                         {option.categoryName}
//                                                     </MenuItem>
//                                                 ))}
//                                             </Select>
//                                         )}
//                                     />
//                                     {errors.categoryOfArticles && (
//                                         <FormHelperText>{errors.categoryOfArticles.message}</FormHelperText>
//                                     )}
//                                 </FormControl>
//                             </Grid>

//                             {/* כפתור שליחה */}
//                             <Grid item xs={12}>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     fullWidth
//                                     disabled={isSubmitting}
//                                 >
//                                     {isSubmitting ? 'שולח...' : 'שלח מאמר'}
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </form>

//                     <Button
//                         variant="text"
//                         onClick={() => navigate('/CateforyArticle')}
//                         sx={{ marginTop: '1em' }}
//                     >
//                         חזור לקטגוריות המאמרים
//                     </Button>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// }


//עדכון הקוד
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postArticle, getAllCategoryList } from '../../slices/ArticleSlice';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    Grid,
    InputLabel,
    FormControl,
    Box,
    Card,
    CardContent,
    Typography,
    FormHelperText,
    Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    PDFArticleFile: Yup.mixed()
        .required('דרוש קובץ PDF')
        .test(
            'fileFormat',
            'נדרש קובץ בפורמט PDF',
            value => value && value.type === 'application/pdf'
        ),
    title: Yup.string()
        .min(5, 'הכותרת חייבת להכיל לפחות 5 תווים')
        .max(100, 'הכותרת לא יכולה להכיל יותר מ-100 תווים')
        .required('הכותרת היא חובה'),
    author: Yup.string()
        .min(3, 'שם המחבר חייב להכיל לפחות 3 תווים')
        .max(50, 'שם המחבר לא יכול להכיל יותר מ-50 תווים')
        .required('שם המחבר הוא חובה'),
    description: Yup.string()
        .min(10, 'התיאור חייב להכיל לפחות 10 תווים')
        .max(500, 'התיאור לא יכול להכיל יותר מ-500 תווים')
        .required('התיאור הוא חובה'),
    categoryOfArticles: Yup.string()
        .required('בחירת קטגוריה היא חובה'),
});

export default function RequestToAddAnArticle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // שליפת רשימת הקטגוריות
    useEffect(() => {
        dispatch(getAllCategoryList());
    }, [dispatch]);

    const options = useSelector((state) => state.article.CategoryList);
    const useDeatail = useSelector((state) => state.user.cucurrentUser);

    console.log('useDeatail----', useDeatail);


    const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onTouched',
    });

    const onSubmit = async (data) => {
        // יצירת FormData
        const formData = new FormData();
        formData.append(
            'fileARTICLE',
            new Blob([JSON.stringify({
                title: data.title,
                author: useDeatail.name,
                description: data.description,
                status: false,
                categoryOfArticles: { id: data.categoryOfArticles },
            })], { type: 'application/json' })
        );
        formData.append('file', data.PDFArticleFile);

        try {
            const response = await dispatch(postArticle(formData));
            if (postArticle.fulfilled.match(response)) {
                setSuccessMessage('המאמר נשלח בהצלחה!');
                reset();
                navigate('/CateforyArticle');
            } else {
                setErrorMessage('השליחה של המאמר נכשלה.');
            }
        } catch (error) {
            setErrorMessage('השליחה של המאמר נכשלה.');
            console.error('שגיאה בשליחת המאמר:', error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2em',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Card sx={{ maxWidth: 600, width: '100%', padding: '2em' }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        בקשה להוספת מאמר
                    </Typography>

                    {errorMessage && <Alert severity="error" sx={{ mb: 2 }}>{errorMessage}</Alert>}
                    {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container spacing={2}>
                            {/* העלאת קובץ PDF */}
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!errors.PDFArticleFile}>
                                    <InputLabel shrink htmlFor="PDFArticleFile">
                                        העלאת PDF
                                    </InputLabel>
                                    <input
                                        id="PDFArticleFile"
                                        type="file"
                                        accept="application/pdf"
                                        {...register('PDFArticleFile')}
                                        style={{ marginTop: '16px' }}
                                    />
                                    {errors.PDFArticleFile && (
                                        <FormHelperText>{errors.PDFArticleFile.message}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            {/* כותרת */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="כותרת המאמר"
                                    variant="outlined"
                                    {...register('title')}
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                />
                            </Grid>

                            {/* מחבר */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="שם המחבר"
                                    variant="outlined"
                                    {...register('author')}
                                    error={!!errors.author}
                                    helperText={errors.author?.message}
                                />
                            </Grid>

                            {/* תיאור */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="תיאור"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    {...register('description')}
                                    error={!!errors.description}
                                    helperText={errors.description?.message}
                                />
                            </Grid>

                            {/* קטגוריה */}
                            <Grid item xs={12}>
                                <FormControl fullWidth error={!!errors.categoryOfArticles}>
                                    <InputLabel>קטגוריה</InputLabel>
                                    <Controller
                                        name="categoryOfArticles"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                label="קטגוריה"
                                            >
                                                <MenuItem value="" disabled>
                                                    בחר קטגוריה
                                                </MenuItem>
                                                {options && options.map((option) => (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.categoryName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                    {errors.categoryOfArticles && (
                                        <FormHelperText>{errors.categoryOfArticles.message}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            {/* כפתור שליחה */}
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'שולח...' : 'שלח מאמר'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                    <Button
                        variant="text"
                        onClick={() => navigate('/CateforyArticle')}
                        sx={{ marginTop: '1em' }}
                    >
                        חזור לקטגוריות המאמרים
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
