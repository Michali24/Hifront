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
import React, { useState } from 'react'; // ייבוא React ו-hook לניהול סטייט
import { useDispatch } from 'react-redux'; // ייבוא useDispatch לשליחת פעולות ל-Redux
import { addGalleryCategoryWithImg } from '../../slices/FileMeetupSlice'; // ייבוא הפעולה להוספת קטגוריה עם תמונה

export default function AddGalleryCategory() {
    const dispatch = useDispatch(); // יצירת instance של dispatch לשליחת פעולות ל-Redux
    const [nameMeetup, setNameMeetup] = useState(''); // משתנה state לשם המפגש
    const [descriptionMeetup, setDescriptionMeetup] = useState(''); // משתנה state לתיאור המפגש
    const [companyName, setCompanyName] = useState(''); // משתנה state לשם החברה
    const [img_meetup, setImg_meetup] = useState('');

    // פונקציה שמופעלת בעת שליחת הטופס
    function handelForm(e) {
        e.preventDefault(); // מניעת רענון ברירת המחדל של הדפדפן בעת שליחת הטופס

        const formData = new FormData(); // יצירת אובייקט FormData לשליחת קובץ ונתונים
        formData.append('fileGalleryCategory', JSON.stringify({
            nameMeetup, // הוספת שם המפגש ל-FormData
            descriptionMeetup, // הוספת תיאור המפגש ל-FormData
            companyName // הוספת שם החברה ל-FormData
        }));
        formData.append('file', img_meetup); // הוספת הקובץ שנבחר ל-FormData

        console.log('Submitting GalleryCategory with File:', formData); // הדפסת תוכן FormData לבדיקת הנתונים

        dispatch(addGalleryCategoryWithImg(formData)); // שליחת הפעולה ל-Redux להעלאת הנתונים לשרת
    }

    return (
        <>
            <div>AddGalleryCategory</div> {/* כותרת הרכיב */}
            <form onSubmit={handelForm}> {/* טופס */}
                <input
                    type="text" // שדה להזנת שם המפגש
                    name="nameMeetup"
                    placeholder="Enter the name Meetup" // טקסט רמז לשם המפגש
                    value={nameMeetup} // ערך השדה מה-state
                    onChange={(e) => setNameMeetup(e.target.value)} // עדכון state בעת שינוי הערך
                    required // שדה חובה
                />
                <input
                    type="text" // שדה להזנת תיאור המפגש
                    name="descriptionMeetup"
                    placeholder="Enter the description Meetup" // טקסט רמז לתיאור המפגש
                    value={descriptionMeetup} // ערך השדה מה-state
                    onChange={(e) => setDescriptionMeetup(e.target.value)} // עדכון state בעת שינוי הערך
                    required // שדה חובה
                />
                <input
                    type="text" // שדה להזנת שם החברה
                    name="companyName"
                    placeholder="Enter the company name" // טקסט רמז לשם החברה
                    value={companyName} // ערך השדה מה-state
                    onChange={(e) => setCompanyName(e.target.value)} // עדכון state בעת שינוי הערך
                    required // שדה חובה
                />
                <input
                    type="file" // שדה לבחירת קובץ
                    name="img_meetup"
                    onChange={(e) => setImg_meetup(e.target.files[0])} // שמירת הקובץ שנבחר ב-state
                    required // שדה חובה
                />
                <button type="submit">Submit a new Gallery Category</button> {/* כפתור לשליחת הטופס */}
            </form>
        </>
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
