// import React, { useState } from 'react';
// import { addFileMeeetup } from '../../slices/FileMeetupSlice';
// import { useDispatch } from 'react-redux';

// export default function AddFileMeetup() {

//     const dispatch = useDispatch();
//     //לא שדה חובה
//     const [name, setName] = useState('');
//     //לא שדה חובה
//     const [typeFile, setTypeFile] = useState('');
//     //חובה
//     const [url_file, setUrl_file] = useState('');

//     function handleForm(e) {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('fileGalleryCategory', JSON.stringify({
//             name,
//             typeFile,

//         }));
//         formData.append('file', url_file);

//         console.log('Submitting GalleryCategory with File:', formData);

//         dispatch(addFileMeeetup(formData));
//     }


//     return (
//         <>
//             <div>AddFileMeetup</div>
//             <form onSubmit={handleForm}>
//                 <input
//                     type="file"
//                     name="url_file"
//                     placeholder="Enter the url_file "
//                     value={url_file}
//                     onChange={(e) => setUrl_file(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter the name name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     name="typeFile"
//                     placeholder="Enter the name typeFile"
//                     value={typeFile}
//                     onChange={(e) => setTypeFile(e.target.value)}

//                 />
//                 <button type="submit">Submit a new Gallery Category</button>
//             </form>

//         </>
//     )
// }


//קוד מGPT כדי לשלוח אובייקט שזהה למה שהפונ בגאווה צריכה לקבל
// import React, { useState } from 'react';
// import { addFileMeeetup } from '../../slices/FileMeetupSlice';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router';

// export default function AddFileMeetup() {

//     const { galleryCategoryid } = useParams(); // מזהה הקטגוריה ב-URL
//     const dispatch = useDispatch();

//     // לא שדות חובה
//     const [name, setName] = useState('');
//     const [typeFile, setTypeFile] = useState('');

//     // חובה: שדה הקובץ
//     const [url_file, setUrl_file] = useState(null); // שים לב שה-URL של הקובץ לא ישמר כ- string אלא כ- file

//     // פונקציה לטיפול בטופס
//     function handleForm(e) {
//         e.preventDefault();

//         // יצירת אובייקט המידע
//         const fileMeetupData = {
//             name,
//             typeFile,
//             gallery_category_id: galleryCategoryid,
//             url_file: url_file ? url_file.name : '', // אם קובץ נבחר, קח את שם הקובץ
//         };

//         // יצירת FormData לשילוב עם הקובץ
//         const formData = new FormData();
//         formData.append('fileFileMeetup', JSON.stringify(fileMeetupData)); // שליחת המידע כ- JSON
//         formData.append('file', url_file); // שליחת הקובץ

//         console.log('Submitting GalleryCategory with File:', formData);
//         console.log('formData', formData);

//         // שליחה לפונקציה addFileMeeetup
//         dispatch(addFileMeeetup(formData));
//     }

//     return (
//         <>
//             <div>AddFileMeetup</div>
//             <form onSubmit={handleForm}>
//                 {/* שדה הקובץ */}
//                 <input
//                     type="file"
//                     name="url_file"
//                     onChange={(e) => setUrl_file(e.target.files[0])} // שמירת הקובץ עצמו
//                     required
//                 />

//                 {/* שדה שם */}
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter the name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 {/* שדה סוג הקובץ */}
//                 <input
//                     type="text"
//                     name="typeFile"
//                     placeholder="Enter the type of file"
//                     value={typeFile}
//                     onChange={(e) => setTypeFile(e.target.value)}
//                 />

//                 {/* כפתור לשליחה */}
//                 <button type="submit">Submit a new Gallery Category</button>
//             </form>
//         </>
//     );
// }


//14-12-24
// import React, { useState } from 'react';
// import { addFileMeeetup } from '../../slices/FileMeetupSlice';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
// import { TextField, Button, Typography, Box, Input, Alert } from '@mui/material';


// export default function AddFileMeetup() {

//     const { id } = useParams(); // מזהה הקטגוריה ב-URL
//     const dispatch = useDispatch();


//     const [url_file, setUrl_file] = useState(null);
//     const [fileMeetup, setFileMeetup] = useState({
//         name: '',
//         typeFile: '',
//         url_file: '',
//     });

//     const [successMessage, setSuccessMessage] = useState(null); // עבור הודעת הצלחה
//     const [errorMessage, setErrorMessage] = useState(null); // עבור הודעת שגיאה

//     const handelFileChange = (e) => {
//         const file = e.target.files[0];
//         setUrl_file(file);
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
//         console.log('Uploading..', url_file);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append('fileFileMeetup', new Blob([JSON.stringify(fileMeetup)], { type: 'application/json' }));
//         formData.append('file', url_file);

//         console.log(formData);

//         // שליחת הנתונים לשרת
//         dispatch(addFileMeeetup(formData))
//             .then(response => {
//                 // אם הצלחה
//                 setSuccessMessage(`Category added: ${fileMeetup.name}`);
//                 // ננקה את השדות
//                 setFileMeetup({
//                     name: '',
//                     typeFile: '',
//                     url_file: '',
//                 });
//                 setUrl_file(null);
//             })
//             .catch(error => {
//                 // אם יש שגיאה
//                 setErrorMessage('An error occurred while adding the gallery category.');
//             });
//     }

//     return (
//         <>
//             <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
//                 <Typography variant="h5" gutterBottom>
//                     Add Gallery Category
//                 </Typography>

//                 {/* הצגת הודעת הצלחה או שגיאה */}
//                 {successMessage && <Alert severity="success">{successMessage}</Alert>}
//                 {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//                 <form onSubmit={handleSubmit}>

//                     {/* שדה הקובץ */}
//                     <Input
//                         fullWidth
//                         type="file"
//                         dir="rtl"
//                         onChange={handelFileChange}
//                         sx={{ mb: 2 }}
//                     />
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Enter the name Meetup"
//                         name="nameMeetup"
//                         value={fileMeetup.name}
//                         onChange={handleChange}
//                         required
//                     />
//                     <TextField
//                         fullWidth
//                         margin="normal"
//                         label="Enter the name Meetup"
//                         name="nameMeetup"
//                         value={fileMeetup.typeFile}
//                         onChange={handleChange}
//                         required
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


//שינוי הקוד מבחינתצ סינטאקס
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addFileMeeetup } from '../../slices/FileMeetupSlice';
// import { useParams } from 'react-router';

// export default function AddNewMeetup() {
//     const dispatch = useDispatch();
//     const { galleryCategoryId } = useParams();

//     const [url_file, setUrl_file] = useState(null);
//     const [newMeetup, setNewMeetup] = useState({
//         name: '',
//         typeFile: '',
//         url_file: '',
//         fileData: null,
//         galleryCategoryId: galleryCategoryId,
//     });



//     // טיפול בשינוי הקובץ
//     const handelFileChange = (e) => {
//         const file = e.target.files[0];
//         setUrl_file(file);
//     };

//     // טיפול בשינוי השדות
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewMeetup((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));

//     };

//     // טיפול בהגשת הטופס
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('Uploading..', url_file);

//         // יצירת FormData
//         const formData = new FormData();
//         formData.append(
//             'fileFileMeetup',
//             new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
//         );
//         formData.append('file', url_file);

//         console.log('FormData before dispatch:', formData);

//         dispatch(addFileMeeetup(formData));
//     }

//     return (
//         <>
//             <div>Add New Meetup</div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="file"
//                     name="url_file"
//                     onChange={handelFileChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your Meetup Name"
//                     value={newMeetup.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="typeFile"
//                     placeholder="Enter your typeFile"
//                     value={newMeetup.typeFile}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit">Submit a New Meetup</button>
//             </form>
//         </>
//     );
// }


//14-12-24
//נסיון שהקוד יעבוד
//עובד!!!!!!!!!!!!!
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFileMeeetup } from '../../slices/FileMeetupSlice';
import { useParams } from 'react-router';

export default function AddNewMeetup() {
    const dispatch = useDispatch();
    const { id } = useParams();

    console.log('galleryCategoryId:', id);


    const [url_file, setFileData] = useState(null); // קובץ שמועלה
    const [newMeetup, setNewMeetup] = useState({
        name: '',
        typeFile: '',
        url_file: '', // אם נדרש לשדה זה מחרוזת
        fileData: null,
        galleryCategoryId: id,
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileData(file); // שמירת הקובץ ב-state
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMeetup((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append(
            'fileFileMeetup',
            new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
        );
        formData.append('file', url_file); // הוספת הקובץ

        console.log('FormData before dispatch:', formData);

        dispatch(addFileMeeetup(formData));

    };

    return (
        <div>
            <h2>Add New Meetup File</h2>
            <form onSubmit={handleSubmit}>
                {/* העלאת קובץ */}
                <input
                    type="file"
                    name="url_file"
                    onChange={handleFileChange}
                    required
                />
                {/* שם המיטאפ */}
                <input
                    type="text"
                    name="name"
                    placeholder="Enter file name"
                    value={newMeetup.name}
                    onChange={handleChange}
                    required
                />

                {/* סוג הקובץ */}
                <input
                    type="text"
                    name="typeFile"
                    placeholder="Enter file type"
                    value={newMeetup.typeFile}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
