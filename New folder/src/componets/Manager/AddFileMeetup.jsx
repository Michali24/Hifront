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
import React, { useState } from 'react';
import { addFileMeeetup } from '../../slices/FileMeetupSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

export default function AddFileMeetup() {

    const { galleryCategoryid } = useParams(); // מזהה הקטגוריה ב-URL
    const dispatch = useDispatch();

    // לא שדות חובה
    const [name, setName] = useState('');
    const [typeFile, setTypeFile] = useState('');
    
    // חובה: שדה הקובץ
    const [url_file, setUrl_file] = useState(null); // שים לב שה-URL של הקובץ לא ישמר כ- string אלא כ- file

    // פונקציה לטיפול בטופס
    function handleForm(e) {
        e.preventDefault();

        // יצירת אובייקט המידע
        const fileMeetupData = {
            name,
            typeFile,
            gallery_category_id: galleryCategoryid,
            url_file: url_file ? url_file.name : '', // אם קובץ נבחר, קח את שם הקובץ
        };

        // יצירת FormData לשילוב עם הקובץ
        const formData = new FormData();
        formData.append('fileFileMeetup', JSON.stringify(fileMeetupData)); // שליחת המידע כ- JSON
        formData.append('file', url_file); // שליחת הקובץ

        console.log('Submitting GalleryCategory with File:', formData);
        console.log('formData', formData);

        // שליחה לפונקציה addFileMeeetup
        dispatch(addFileMeeetup(formData));
    }

    return (
        <>
            <div>AddFileMeetup</div>
            <form onSubmit={handleForm}>
                {/* שדה הקובץ */}
                <input
                    type="file"
                    name="url_file"
                    onChange={(e) => setUrl_file(e.target.files[0])} // שמירת הקובץ עצמו
                    required
                />
                
                {/* שדה שם */}
                <input
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                {/* שדה סוג הקובץ */}
                <input
                    type="text"
                    name="typeFile"
                    placeholder="Enter the type of file"
                    value={typeFile}
                    onChange={(e) => setTypeFile(e.target.value)}
                />
                
                {/* כפתור לשליחה */}
                <button type="submit">Submit a new Gallery Category</button>
            </form>
        </>
    );
}
