//נסיון שילח את הID שלו
//עובדדדדדדדדדד
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getfileMeeetupByGallerCategoryId } from '../../slices/FileMeetupSlice';

// // פונקציה לחילוץ מזהה הסרטון מתוך URL של YouTube
// const extractYouTubeId = (url) => {
//     const regex = /(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/(?:\S+|\S+\/\S+)|[\w\-]+\/\S+|\S+))|(?:youtu\.be\/))([a-zA-Z0-9_-]{11})/;
//     const match = url.match(regex);
//     return match ? match[1] : null; // אם יש התאמה, מחזירים את ה-ID של הסרטון
// };

// import './FileMeetupDetail.css';

// export default function FileMeetupDetail() {
//     const { id } = useParams();
//     console.log('id', id);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);

//     // נוודא שנטען המידע לגבי ה-FileMeetup לפי ה-ID
//     useEffect(() => {
//         dispatch(getfileMeeetupByGallerCategoryId(id));
//     }, [dispatch, id]);

//     // בדוק אם המשתמש הוא מנהל
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     // אם הנתונים לא הושגו, הצג הודעת טעינה
//     if (!fileMeetupList) {
//         return <div>טוען נתונים...</div>;
//     }

//     return (
//         <div className="fileMeetupDetail">
//             <div>FileMeetupDetail</div>
//             <button onClick={() => navigate('/GalleryCategoryList')}>
//                 חזור לרשימת קטגוריות גלריה
//             </button>

//             <div className="fileMeetup-content">
//                 {/* הצגת סרטונים */}
//                 <div className="videos">
//                     {fileMeetupList
//                         .filter(fileMeetup => fileMeetup.typeFile === 'video')
//                         .map((fileMeetup) => {
//                             const extractedVideoId = extractYouTubeId(fileMeetup.url_file);
//                             return extractedVideoId ? (
//                                 <div key={fileMeetup.id} className="video-item">
//                                     <strong>Video:</strong>
//                                     <iframe
//                                         width="560"
//                                         height="315"
//                                         src={`https://www.youtube.com/embed/${extractedVideoId}`}
//                                         title="YouTube video player"
//                                         frameBorder="0"
//                                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                                         allowFullScreen
//                                     />
//                                 </div>
//                             ) : (
//                                 <p key={fileMeetup.id}>לא נמצא מזהה סרטון תקני.</p>
//                             );
//                         })}
//                 </div>

//                 {/* הצגת תמונות */}
//                 <div className="images">
//                     {fileMeetupList
//                         .filter(fileMeetup => fileMeetup.typeFile === 'image')
//                         .map((fileMeetup) => (
//                             <div key={fileMeetup.id} className="image-item">
//                                 <img
//                                     src={`data:image/jpeg;base64,${fileMeetup.fileData}`}
//                                     alt={`Image for ${fileMeetup.name}`}
//                                     className="image"
//                                 />

//                             </div>
//                         ))}
//                 </div>
//             </div>

//             {/* הצגת כפתור הוספת קובץ רק אם המשתמש הוא מנהל */}
//             {isAdmin && (
//                 <button onClick={() => navigate(`/AddFileMeetup/${id}`)}>
//                     הוסף קובץ נוסף
//                 </button>
//             )}
//         </div>
//     );
// }



//16-12-24
//נסיון לעצב את התמונות כל שהתמונות יהי8ו במרכז העמוד עם רווחים שווים על ידי grid
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getfileMeeetupByGallerCategoryId } from '../../slices/FileMeetupSlice';

// פונקציה לחילוץ מזהה הסרטון מתוך URL של YouTube
const extractYouTubeId = (url) => {
    const regex = /(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/(?:\S+|\S+\/\S+)|[\w\-]+\/\S+|\S+))|(?:youtu\.be\/))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null; // אם יש התאמה, מחזירים את ה-ID של הסרטון
};

import './FileMeetupDetail.css';

export default function FileMeetupDetail() {
    const { id } = useParams();
    console.log('id', id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fileMeetupList = useSelector((state) => state.fileMeetup.fileMeetupList);

    // נוודא שנטען המידע לגבי ה-FileMeetup לפי ה-ID
    useEffect(() => {
        dispatch(getfileMeeetupByGallerCategoryId(id));
    }, [dispatch, id]);

    // בדוק אם המשתמש הוא מנהל
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    // אם הנתונים לא הושגו, הצג הודעת טעינה
    if (!fileMeetupList) {
        return <div>Loading data...</div>;
    }

    return (
        <div className="fileMeetupDetail">
            <h1 className='file-meetup-detail-title'>FileMeetupDetail</h1>

            <button onClick={() => navigate('/GalleryCategoryList')}>
                Back to the gallery
            </button>
            {/* הצגת כפתור הוספת קובץ רק אם המשתמש הוא מנהל */}
            {isAdmin && (
                <button className='add-file-button' onClick={() => navigate(`/AddFileMeetup/${id}`)}>
                    הוסף קובץ נוסף
                </button>
            )}

            <div className="fileMeetup-content">
                {/* הצגת סרטונים */}
                <div className="videos">
                    {fileMeetupList
                        .filter(fileMeetup => fileMeetup.typeFile === 'video')
                        .map((fileMeetup) => {
                            const extractedVideoId = extractYouTubeId(fileMeetup.url_file);
                            return extractedVideoId ? (
                                <div key={fileMeetup.id} className="video-item">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${extractedVideoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <p key={fileMeetup.id}>No valid video ID found.</p>
                            );
                        })}
                </div>

                {/* הצגת תמונות */}
                <div className="images">
                    {fileMeetupList
                        .filter(fileMeetup => fileMeetup.typeFile === 'image')
                        .map((fileMeetup) => (
                            <div key={fileMeetup.id} className="image-item">
                                <img
                                    src={`data:image/jpeg;base64,${fileMeetup.fileData}`}
                                    alt={`Image for ${fileMeetup.name}`}
                                    className="image"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
