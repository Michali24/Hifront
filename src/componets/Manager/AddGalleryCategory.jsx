// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice';

// export default function AddGalleryCategory() {

//     const dispatch = useDispatch();
//     const [nameMeetup, setNameMeetup] = useState('');
//     const [descriptionMeetup, setDescriptionMeetup] = useState('');
//     const [companyName, setCompanyName] = useState('');
//     const [img_meetup, setImg_meetup] = useState('');

//     function handelForm(e) {
//         e.preventDefault();
//         const GalleryCategoryToAdd = {
//             nameMeetup,
//             descriptionMeetup,
//             companyName,
//             img_meetup
//         };

//         console.log('Submitting GalleryCategory:', GalleryCategoryToAdd);

//         dispatch(addGalleryCategoryWithImg(GalleryCategoryToAdd));

//     }

//     return (
//         <>
//             <div>AddGalleryCategory</div>
//             <form onSubmit={handelForm}>
//                 <input
//                     type="text"
//                     name="nameMeetup"
//                     placeholder="Enter the name Meetup"
//                     value={nameMeetup}
//                     onChange={(e) => setNameMeetup(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="descriptionMeetup"
//                     placeholder="Enter the name description Meetup"
//                     value={descriptionMeetup}
//                     onChange={(e) => setDescriptionMeetup(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Enter the name companyName"
//                     value={companyName}
//                     onChange={(e) => setCompanyName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="file"
//                     name="img_meetup"
//                     placeholder="Enter the name img_meetup"
//                     value={img_meetup}
//                     onChange={(e) => setImg_meetup(e.target.value)}
//                     required
//                 />

//                 <button type="submit">Submit an new Gallery Category</button>

//             </form>
//         </>

//     )
// }

//Gpt
// import React, { useState } from 'react'; // ייבוא React ו-hook לניהול סטייט
// import { useDispatch } from 'react-redux'; // ייבוא useDispatch לשליחת פעולות ל-Redux
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice'; // ייבוא הפעולה להוספת קטגוריה עם תמונה

// export default function AddGalleryCategory() {
//     const dispatch = useDispatch(); // יצירת instance של dispatch לשליחת פעולות ל-Redux
//     const [nameMeetup, setNameMeetup] = useState(''); // משתנה state לשם המפגש
//     const [descriptionMeetup, setDescriptionMeetup] = useState(''); // משתנה state לתיאור המפגש
//     const [companyName, setCompanyName] = useState(''); // משתנה state לשם החברה
//     const [img_meetup, setImg_meetup] = useState('');

//     // פונקציה שמופעלת בעת שליחת הטופס
//     function handelForm(e) {
//         e.preventDefault(); // מניעת רענון ברירת המחדל של הדפדפן בעת שליחת הטופס

//         const formData = new FormData(); // יצירת אובייקט FormData לשליחת קובץ ונתונים
//         formData.append('fileGalleryCategory', JSON.stringify({
//             //אולי צריך להוסיף ID
//             id: 0,
//             nameMeetup, // הוספת שם המפגש ל-FormData
//             descriptionMeetup, // הוספת תיאור המפגש ל-FormData
//             companyName // הוספת שם החברה ל-FormData
//         }));
//         formData.append('file', img_meetup); // הוספת הקובץ שנבחר ל-FormData

//         console.log('Submitting GalleryCategory with File:', formData); // הדפסת תוכן FormData לבדיקת הנתונים

//         dispatch(addGalleryCategoryWithImg(formData)); // שליחת הפעולה ל-Redux להעלאת הנתונים לשרת
//     }

//     return (
//         <>
//             <div>AddGalleryCategory</div> {/* כותרת הרכיב */}
//             <form onSubmit={handelForm}> {/* טופס */}
//                 <input
//                     type="text" // שדה להזנת שם המפגש
//                     name="nameMeetup"
//                     placeholder="Enter the name Meetup" // טקסט רמז לשם המפגש
//                     value={nameMeetup} // ערך השדה מה-state
//                     onChange={(e) => setNameMeetup(e.target.value)} // עדכון state בעת שינוי הערך
//                     required // שדה חובה
//                 />
//                 <input
//                     type="text" // שדה להזנת תיאור המפגש
//                     name="descriptionMeetup"
//                     placeholder="Enter the description Meetup" // טקסט רמז לתיאור המפגש
//                     value={descriptionMeetup} // ערך השדה מה-state
//                     onChange={(e) => setDescriptionMeetup(e.target.value)} // עדכון state בעת שינוי הערך
//                     required // שדה חובה
//                 />
//                 <input
//                     type="text" // שדה להזנת שם החברה
//                     name="companyName"
//                     placeholder="Enter the company name" // טקסט רמז לשם החברה
//                     value={companyName} // ערך השדה מה-state
//                     onChange={(e) => setCompanyName(e.target.value)} // עדכון state בעת שינוי הערך
//                     required // שדה חובה
//                 />
//                 <input
//                     type="file" // שדה לבחירת קובץ
//                     name="img_meetup"
//                     onChange={(e) => setImg_meetup(e.target.files[0])} // שמירת הקובץ שנבחר ב-state
//                     required // שדה חובה
//                 />
//                 <button type="submit">Submit a new Gallery Category</button> {/* כפתור לשליחת הטופס */}
//             </form>
//         </>
//     );
// }

//----------------------------------------------------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//נסיונות נוספים:
//לא מצליח לשלוח את הנתונים של האובייקט.. לפונ של גאווה
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice';

// export default function AddGalleryCategory() {
//     const dispatch = useDispatch();
//     const [nameMeetup, setNameMeetup] = useState('');
//     const [descriptionMeetup, setDescriptionMeetup] = useState('');
//     const [companyName, setCompanyName] = useState('');
//     const [img_meetup, setImg_meetup] = useState(null);

//     // טיפול בהגשת הטופס
//     function handleForm(e) {
//         e.preventDefault();

//         // יצירת FormData
//         const formData = new FormData();

//         // הוספת כל הנתונים ל-FormData
//         formData.append('fileGalleryCategory', JSON.stringify({
//             id: 0,
//             nameMeetup,
//             descriptionMeetup,
//             companyName
//         }));

//         // הוספת התמונה ל-FormData
//         if (img_meetup) {
//             formData.append('file', img_meetup.name);
//         }
//         console.log('formData:',formData);


//         console.log(' before --Gallery Category Data:', {
//             nameMeetup,
//             descriptionMeetup,
//             companyName,
//             img_meetup: img_meetup.name
//         });

//       const a={
//         id:0,
//         nameMeetup,
//         descriptionMeetup,
//         companyName,
//         img_meetup: null
//       }
//       console.log('a',a,img_meetup.name);


//         // שליחת הנתונים לשרת
//         dispatch(addGalleryCategoryWithImg(a,img_meetup.name));

//         console.log('after--Gallery Category Data:', {
//             nameMeetup,
//             descriptionMeetup,
//             companyName,
//             img_meetup: img_meetup.name
//         });
//     }

//     return (
//         <>
//             <div>Add Gallery Category</div>
//             <form onSubmit={handleForm}>
//                 <input
//                     type="text"
//                     name="nameMeetup"
//                     placeholder="Enter the name Meetup"
//                     value={nameMeetup}
//                     onChange={(e) => setNameMeetup(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="descriptionMeetup"
//                     placeholder="Enter the description Meetup"
//                     value={descriptionMeetup}
//                     onChange={(e) => setDescriptionMeetup(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Enter the company name"
//                     value={companyName}
//                     onChange={(e) => setCompanyName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="file"
//                     name="img_meetup"
//                     onChange={(e) => setImg_meetup(e.target.files[0])}
//                     required
//                 />
//                 <button type="submit">Submit a new Gallery Category</button>
//             </form>
//         </>
//     );
// }


//11-12-24
//הקוד מוצג טוב!!!!!!!!!!-מעולה -13-12-24
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice';

// export default function AddGalleryCategory() {
//     const dispatch = useDispatch();

//     const [img_meetup, setImg_meetup] = useState(null);

//     const [fileMeetup, setFileMeetup] = useState({
//         id: 0,
//         nameMeetup: '',
//         descriptionMeetup: '',
//         companyName: '',
//         img_meetup:'',
//     })

//     const handelFileChange = (e) => {
//         const file = e.target.files[0];
//         setImg_meetup(file);
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFileMeetup((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }))
//     }

//     // טיפול בהגשת הטופס
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('Uploading..',img_meetup);

//         // יצירת FormData
//         const formData = new FormData();
//         // הוספת כל הנתונים ל-FormData
//         formData.append('fileGalleryCategory', new Blob([JSON.stringify(fileMeetup)], { type: 'application/json' }));
//         formData.append('file', img_meetup);

//         console.log(formData);

//         // שליחת הנתונים לשרת
//         dispatch(addGalleryCategoryWithImg(formData));

//         console.log('formData', formData);

//     }

//     return (
//         <>
//             <div>Add Gallery Category</div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="nameMeetup"
//                     placeholder="Enter the name Meetup"
//                     value={fileMeetup.nameMeetup}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="descriptionMeetup"
//                     placeholder="Enter the description Meetup"
//                     value={fileMeetup.descriptionMeetup}
//                     onChange={handleChange} required
//                 />
//                 <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Enter the company name"
//                     value={fileMeetup.companyName}
//                     onChange={handleChange} required
//                 />
//                 <input
//                     dir='rtl'
//                     type='file'
//                     onChange={handelFileChange}
//                 />
//                 <button type="submit">Submit a new Gallery Category</button>
//             </form>
//         </>
//     );
// }


//הקוד מעוצב על ידי MUI
//13-12-24
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice';
// import { TextField, Button, Typography, Box, Input } from '@mui/material';

// export default function AddGalleryCategory() {
//     const dispatch = useDispatch();

//     const [img_meetup, setImg_meetup] = useState(null);

//     const [fileMeetup, setFileMeetup] = useState({
//         id: 0,
//         nameMeetup: '',
//         descriptionMeetup: '',
//         companyName: '',
//         img_meetup: '',
//     });

//     const handelFileChange = (e) => {
//         const file = e.target.files[0];
//         setImg_meetup(file);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFileMeetup((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בהגשת הטופס
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('Uploading..', img_meetup);

//         // יצירת FormData
//         const formData = new FormData();
//         // הוספת כל הנתונים ל-FormData
//         formData.append('fileGalleryCategory', new Blob([JSON.stringify(fileMeetup)], { type: 'application/json' }));
//         formData.append('file', img_meetup);

//         console.log(formData);

//         // שליחת הנתונים לשרת
//         dispatch(addGalleryCategoryWithImg(formData));

//         console.log('formData', formData);
//     }

//     return (
//         <>
//             <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
//                 <Typography variant="h5" gutterBottom>
//                     Add Gallery Category
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Enter the name Meetup"
//                         name="nameMeetup"
//                         value={fileMeetup.nameMeetup}
//                         onChange={handleChange}
//                         required
//                     />
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Enter the description Meetup"
//                         name="descriptionMeetup"
//                         value={fileMeetup.descriptionMeetup}
//                         onChange={handleChange}
//                         required
//                     />
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Enter the company name"
//                         name="companyName"
//                         value={fileMeetup.companyName}
//                         onChange={handleChange}
//                         required
//                     />
//                     <Input
//                         fullWidth
//                         type="file"
//                         dir="rtl"
//                         onChange={handelFileChange}
//                         sx={{ mb: 2 }}
//                     />
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         type="submit"
//                     >
//                         Submit a new Gallery Category
//                     </Button>
//                 </form>
//             </Box>
//         </>
//     );
// }

//13-12-24
//עיצוב נוסף של הקוד כך שבעת הצלחה זהיאמר ללקוח
//ושהאינפוטים יתנקו
//הקוד עושה הכל בצורה מעולה!!!
//נשאר רק לעצה את הרקע של הדף
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice';
// import { TextField, Button, Typography, Box, Input, Alert } from '@mui/material';

// export default function AddGalleryCategory() {
//     const dispatch = useDispatch();

//     const [img_meetup, setImg_meetup] = useState(null);
//     const [fileMeetup, setFileMeetup] = useState({
//         id: 0,
//         nameMeetup: '',
//         descriptionMeetup: '',
//         companyName: '',
//         img_meetup: '',
//     });

//     const [successMessage, setSuccessMessage] = useState(null); // עבור הודעת הצלחה
//     const [errorMessage, setErrorMessage] = useState(null); // עבור הודעת שגיאה

//     const handelFileChange = (e) => {
//         const file = e.target.files[0];
//         setImg_meetup(file);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFileMeetup((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     // טיפול בהגשת הטופס
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('Uploading..', img_meetup);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append('fileGalleryCategory', new Blob([JSON.stringify(fileMeetup)], { type: 'application/json' }));
//         formData.append('file', img_meetup);

//         console.log(formData);

//         // שליחת הנתונים לשרת
//         dispatch(addGalleryCategoryWithImg(formData))
//             .then(response => {
//                 // אם הצלחה
//                 setSuccessMessage(`Category added: ${fileMeetup.nameMeetup} - ${fileMeetup.companyName}`);
//                 // ננקה את השדות
//                 setFileMeetup({
//                     id: 0,
//                     nameMeetup: '',
//                     descriptionMeetup: '',
//                     companyName: '',
//                     img_meetup: '',
//                 });
//                 setImg_meetup(null);
//             })
//             .catch(error => {
//                 // אם יש שגיאה
//                 setErrorMessage('An error occurred while adding the gallery category.');
//             });
//     }

//     return (
//         <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
//             <Typography variant="h5" gutterBottom>
//                 Add Gallery Category
//             </Typography>

//             {/* הצגת הודעת הצלחה או שגיאה */}
//             {successMessage && <Alert severity="success">{successMessage}</Alert>}
//             {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     label="Enter the name Meetup"
//                     name="nameMeetup"
//                     value={fileMeetup.nameMeetup}
//                     onChange={handleChange}
//                     required
//                 />
//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     label="Enter the description Meetup"
//                     name="descriptionMeetup"
//                     value={fileMeetup.descriptionMeetup}
//                     onChange={handleChange}
//                     required
//                 />
//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     label="Enter the company name"
//                     name="companyName"
//                     value={fileMeetup.companyName}
//                     onChange={handleChange}
//                     required
//                 />
//                 <Input
//                     fullWidth
//                     type="file"
//                     dir="rtl"
//                     onChange={handelFileChange}
//                     sx={{ mb: 2 }}
//                 />
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     type="submit"
//                 >
//                     Submit a new Gallery Category
//                 </Button>
//             </form>
//         </Box>
//     );
// }


//נסין הוספת ולידציות
//מעולה!!!!!!!!!
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice';
import { TextField, Button, Box, Typography, Alert, Input } from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import './AddGalleryCategory.css';

// הגדרת סכמת הולידציה עם Yup, ללא הולידציה על שדה התמונה
const validationSchema = Yup.object().shape({
    nameMeetup: Yup.string()
        .required('שם המפגש נדרש')
        .min(3, 'שם המפגש צריך להיות לפחות 3 תווים'),

    descriptionMeetup: Yup.string()
        .required('תיאור המפגש נדרש')
        .min(10, 'תיאור המפגש צריך להיות לפחות 10 תווים'),

    companyName: Yup.string()
        .required('שם החברה נדרש')
        .min(3, 'שם החברה צריך להיות לפחות 3 תווים'),

    img_meetup: Yup.mixed()
        .test('fileSize', 'גודל הקובץ גדול מדי', (value) => !value || value.size <= 5000000), // גודל מקסימלי 5MB
});

export default function AddGalleryCategory() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [img_meetup, setImg_meetup] = useState(null);
    const [fileMeetup, setFileMeetup] = useState({
        id: 0,
        nameMeetup: '',
        descriptionMeetup: '',
        companyName: '',
        img_meetup: '',
    });

    const [successMessage, setSuccessMessage] = useState(null); // עבור הודעת הצלחה
    const [errorMessage, setErrorMessage] = useState(null); // עבור הודעת שגיאה

    // הגדרת useForm עם yupResolver
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'all', // מאפשר לוודא שכל הטופס נבדק בזמן שינוי כל שדה
    });

    const handelFileChange = (e) => {
        const file = e.target.files[0];
        setImg_meetup(file);
        setValue('img_meetup', file); // עדכון ערך ה-form
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFileMeetup((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // טיפול בהגשת הטופס
    function onSubmit(data) {
        console.log('Uploading..', img_meetup);

        // יצירת FormData
        const formData = new FormData();
        formData.append('fileGalleryCategory', new Blob([JSON.stringify(data)], { type: 'application/json' }));
        formData.append('file', img_meetup);

        dispatch(addGalleryCategoryWithImg(formData))
            .then(response => {
                // אם הצלחה
                setSuccessMessage(`Category added: ${data.nameMeetup} - ${data.companyName}`);
                // ננקה את השדות
                setFileMeetup({
                    id: 0,
                    nameMeetup: '',
                    descriptionMeetup: '',
                    companyName: '',
                    img_meetup: '',
                });
                setImg_meetup(null);
            })
            .catch(error => {
                // אם יש שגיאה
                setErrorMessage('An error occurred while adding the gallery category.');
            });
    }

    return (
        <div className='add-galery-category-container'>
            <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, bgcolor: '#f9f9f9',
                borderRadius: 2, position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)' }}>
                <Typography variant="h5" gutterBottom>
                    Add Gallery Category
                </Typography>

                {/* הצגת הודעת הצלחה או שגיאה */}
                {successMessage && <Alert severity="success">{successMessage}</Alert>}
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* שם המפגש */}
                    <Box sx={{ mb: 2 }}>
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <TextField
                                fullWidth
                                label="Enter the name Meetup"
                                name="nameMeetup"
                                {...register('nameMeetup')}
                                error={!!errors.nameMeetup}
                                helperText={errors.nameMeetup?.message}
                            />
                        </motion.div>
                    </Box>

                    {/* תיאור המפגש */}
                    <Box sx={{ mb: 2 }}>
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                            <TextField
                                fullWidth
                                label="Enter the description Meetup"
                                name="descriptionMeetup"
                                {...register('descriptionMeetup')}
                                error={!!errors.descriptionMeetup}
                                helperText={errors.descriptionMeetup?.message}
                            />
                        </motion.div>
                    </Box>

                    {/* שם החברה */}
                    <Box sx={{ mb: 2 }}>
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <TextField
                                fullWidth
                                label="Enter the company name"
                                name="companyName"
                                {...register('companyName')}
                                error={!!errors.companyName}
                                helperText={errors.companyName?.message}
                            />
                        </motion.div>
                    </Box>

                    {/* קובץ התמונה */}
                    <Box sx={{ mb: 2 }}>
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <Input
                                fullWidth
                                type="file"
                                dir="rtl"
                                onChange={handelFileChange}
                                sx={{ mb: 2 }}
                            />
                        </motion.div>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                    >
                        Submit a new Gallery Category
                    </Button>
                </form>
                <Button
                    onClick={() => navigate(-1)}
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 3,
                        bgcolor: '#007BFF',
                        '&:hover': { bgcolor: '#0056b3' },
                        padding: '6px 16px', // הגדרת padding קטן יותר כדי להקטין את הגודל
                        fontSize: '0.875rem', // גודל טקסט קטן יותר
                    }}
                >
                    Back to Gallery
                </Button>
            </Box>
        </div>
    );
}





//GPT-2
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice'; // שימוש בפעולת Redux

// export default function AddGalleryCategory() {
//     const dispatch = useDispatch(); // יצירת instance של dispatch לשליחת פעולות ל-Redux
//     const [nameMeetup, setNameMeetup] = useState(''); // משתנה state לשם המפגש
//     const [descriptionMeetup, setDescriptionMeetup] = useState(''); // משתנה state לתיאור המפגש
//     const [companyName, setCompanyName] = useState(''); // משתנה state לשם החברה
//     const [file, setFile] = useState(null); // משתנה state לקובץ שנבחר

//     // פונקציה שמופעלת בעת שליחת הטופס
//     const handleForm = async (e) => {
//         e.preventDefault(); // מניעת רענון ברירת מחדל

//         const formData = new FormData(); // יצירת אובייקט FormData לשליחת נתונים
//         formData.append('fileGalleryCategory', JSON.stringify({
//             nameMeetup,
//             descriptionMeetup,
//             companyName,
//         })); // הוספת נתוני JSON
//         formData.append('file', file); // הוספת הקובץ

//         try {
//             // שימוש בפונקציה של Redux Dispatch
//             await dispatch(addGalleryCategoryWithImg(formData));
//             alert('Gallery Category added successfully!');
//         } catch (error) {
//             console.error('Error:', error); // טיפול בשגיאות
//             alert('Failed to add Gallery Category.');
//         }
//     };

//     return (
//         <div>
//             <h2>Add Gallery Category</h2>
//             <form onSubmit={handleForm}>
//                 <input
//                     type="text"
//                     placeholder="Name of Meetup"
//                     value={nameMeetup}
//                     onChange={(e) => setNameMeetup(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description of Meetup"
//                     value={descriptionMeetup}
//                     onChange={(e) => setDescriptionMeetup(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Company Name"
//                     value={companyName}
//                     onChange={(e) => setCompanyName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="file"
//                     onChange={(e) => setFile(e.target.files[0])}
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }
