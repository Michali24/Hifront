// import React from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useParams } from 'react-router';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { getFileMeeetupById } from '../../slices/FileMeetupSlice';
// import { Mms } from '@mui/icons-material';

// export default function FileMeetupDetail() {

//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const fileMeetup = useSelector((state) => state.fileMeetup.fileMeetup);


//     useEffect(() => {
//         dispatch(getFileMeeetupById(id));
//     }, [dispatch]);


//     return (
//         <>
//             <div>FileMeetupDetail</div>
//             <p>name:{fileMeetup.name}</p>
//             <p> typeFile:{fileMeetup.typeFile}</p>
//             {/* להציג את התמונה מהDB */}
//             <p> url_file:{fileMeetup.url_file}</p>
//             <button onClick={() => navigate('/AddFileMeetup')}>add more file</button>
//             <button onClick={() => navigate('/GalleryCategoryList')}>back to GalleryCategoryList</button>
//         </>
//     )
// }


//קוד שבו הכפותר להוספת FULE MEETUP מופיע רק אם הלקוח הוא מנהל
//עובד פגזזזזזזז
// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFileMeeetupById } from '../../slices/FileMeetupSlice';

// export default function FileMeetupDetail() {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const fileMeetup = useSelector((state) => state.fileMeetup.fileMeetup);

//     // נוודא שנטען המידע לגבי ה-FileMeetup לפי ה-ID
//     useEffect(() => {
//         dispatch(getFileMeeetupById(id));
//     }, [dispatch, id]);

//     // בדוק אם המשתמש הוא מנהל
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     if (!fileMeetup) {
//         return <div>טוען נתונים...</div>; // הצג הודעת טעינה אם הנתונים עדיין לא הושגו
//     }

//     return (
//         <>
//             <div>FileMeetupDetail</div>
//             <p>שם: {fileMeetup.name}</p>
//             <p>סוג קובץ: {fileMeetup.typeFile}</p>
//             <p>URL קובץ: {fileMeetup.url_file}</p>

//             {/* הצגת כפתור רק אם המשתמש הוא מנהל */}
//             {isAdmin && (
//                 <button onClick={() => navigate('/AddFileMeetup')}>
//                     הוסף קובץ נוסף
//                 </button>
//             )}

//             <button onClick={() => navigate('/GalleryCategoryList')}>
//                 חזור לרשימת קטגוריות גלריה
//             </button>
//         </>
//     );
// }


//שינוי הקוד כך שיקבל נתונים בנתיב בשביל הקומםוננטה הבא שהוא עובר אליה
// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFileMeeetupById } from '../../slices/FileMeetupSlice';

// export default function FileMeetupDetail() {
//     const { id,galleryCategoryid} = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const fileMeetup = useSelector((state) => state.fileMeetup.fileMeetup);

//     // נוודא שנטען המידע לגבי ה-FileMeetup לפי ה-ID
//     useEffect(() => {
//         dispatch(getFileMeeetupById(id));
//     }, [dispatch, id]);

//     // בדוק אם המשתמש הוא מנהל
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     if (!fileMeetup) {
//         return <div>טוען נתונים...</div>; // הצג הודעת טעינה אם הנתונים עדיין לא הושגו
//     }

//     return (
//         <>
//             <div>FileMeetupDetail</div>
//             <p>שם: {fileMeetup.name}</p>
//             <p>סוג קובץ: {fileMeetup.typeFile}</p>
//             <p>URL קובץ: {fileMeetup.url_file}</p>

//             {/* הצגת כפתור רק אם המשתמש הוא מנהל */}
//             {isAdmin && (
//                 <button onClick={() => navigate(`/AddFileMeetup/${galleryCategoryid}`)}>
//                     הוסף קובץ נוסף
//                 </button>
//             )}

//             <button onClick={() => navigate('/GalleryCategoryList')}>
//                 חזור לרשימת קטגוריות גלריה
//             </button>
//         </>
//     );
// }


//שיםור הקוד שהכפתור להוספה יוצג רק אם אתה מנהל
//11-12-24
// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFileMeeetupById } from '../../slices/FileMeetupSlice';

// export default function FileMeetupDetail() {
//     const { id, galleryCategoryid } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const fileMeetup = useSelector((state) => state.fileMeetup.fileMeetup);

//     // נוודא שנטען המידע לגבי ה-FileMeetup לפי ה-ID
//     useEffect(() => {
//         dispatch(getFileMeeetupById(id));
//     }, [dispatch, id]);

//     // בדוק אם המשתמש הוא מנהל
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     // אם הנתונים לא הושגו, הצג הודעת טעינה
//     if (!fileMeetup) {
//         return <div>טוען נתונים...</div>;
//     }

//     return (
//         <>
//             <div>FileMeetupDetail</div>
//             <p>שם: {fileMeetup.name}</p>
//             <p>סוג קובץ: {fileMeetup.typeFile}</p>
//             <p>URL קובץ: {fileMeetup.url_file}</p>

//             {/* הצגת כפתור הוספת קובץ רק אם המשתמש הוא מנהל */}
//             {isAdmin && (
//                 <button onClick={() => navigate(`/AddFileMeetup/${galleryCategoryid}`)}>
//                     הוסף קובץ נוסף
//                 </button>
//             )}

//             <button onClick={() => navigate('/GalleryCategoryList')}>
//                 חזור לרשימת קטגוריות גלריה
//             </button>
//         </>
//     );
// }

//11-12-24
//at night...
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getfileMeeetupByGallerCategoryId } from '../../slices/FileMeetupSlice';

export default function FileMeetupDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);

    // נוודא שנטען המידע לגבי ה-FileMeetup לפי ה-ID
    useEffect(() => {
        dispatch(getfileMeeetupByGallerCategoryId(id));
    }, [dispatch]);

    // בדוק אם המשתמש הוא מנהל
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    // אם הנתונים לא הושגו, הצג הודעת טעינה
    if (!fileMeetupList) {
        return <div>טוען נתונים...</div>;
    }

    return (
        <>
            <div>FileMeetupDetail</div>
            <button onClick={() => navigate('/GalleryCategoryList')}>
                חזור לרשימת קטגוריות גלריה
            </button>

            <ul>
                {fileMeetupList.map((fileMeetup) => (
                    <li key={fileMeetup.id}>
                        <p>שם: {fileMeetup.name}</p>
                        <p>סוג קובץ: {fileMeetup.typeFile}</p>

                        {fileMeetup.url_file ? (
                            <p>
                                <strong>Image:</strong>
                                <img
                                    src={`data:image/jpeg;base64,${fileMeetup.url_file}`}
                                    alt="FileMeetup Detail"
                                    style={{ width: '200px', height: 'auto', marginTop: '10px' }}
                                />
                            </p>
                        ) : (
                            <p>לא נמצא תמונה</p>
                        )}

                        {/* הצגת כפתור הוספת קובץ רק אם המשתמש הוא מנהל */}
                        {isAdmin && (
                            <button onClick={() => navigate(`/AddFileMeetup/${fileMeetup.id}`)}>
                                הוסף קובץ נוסף
                            </button>
                        )}

                    </li>
                ))}
            </ul>
        </>
    );
}
