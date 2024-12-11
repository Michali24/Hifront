// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryList } from '../../slices/FileMeetupSlice';


// export default function GalleryCategoryList() {

//     const dispatch = useDispatch();
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);

//     useEffect(() => {
//         dispatch(getAllGalleryCategoryList());
//     }, [dispatch]);


//     return (
//         <>
//             <div>GalleryCategory</div>
//             <ul >
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         <p>nameMeetup: {galleryCategory.nameMeetup}</p>
//                         <p> descriptionMeetup: {galleryCategory.descriptionMeetup}</p>
//                         <p>companyName:{galleryCategory.companyName}</p>
//                         img_meetup:<p>{galleryCategory.img_meetup}</p>
//                         <p>--------------------------------------------------</p>
//                         {/* <button onClick={() => seeArticlesDetailes(articleCategory.id)}>to see details'article</button>
//                         <button onClick={() => navigate('/CateforyArticle')}>to return to CateforyArticle</button> */}
//                     </li>
//                 ))}
//             </ul >
//         </>
//     )
// }


//gpt
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryList()); // קריאה לפעולה getAllGalleryCategoryList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}> {/* יצירת פריט ברשימה לכל קטגוריה */}
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p> {/* הצגת שם המפגש */}
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p> {/* הצגת תיאור המפגש */}
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p> {/* הצגת שם החברה */}
//                         {/* הצגת התמונה */}
//                         <p>
//                             <strong>Image:</strong>
//                             <img 
//                                 src={`http://localhost:8080/imgesMeetup/${galleryCategory.img_meetup}`} 
//                                 alt={galleryCategory.nameMeetup} 
//                                 style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                             />
//                         </p>
//                         <p>--------------------------------------------------</p> {/* מפריד ויזואלי */}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

//GPT
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {

//     const navigate=useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory, index) => (
//                     <li key={index}> {/* יצירת פריט ברשימה לכל קטגוריה */}
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p> {/* הצגת שם המפגש */}
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p> {/* הצגת תיאור המפגש */}
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p> {/* הצגת שם החברה */}
//                         {/* הצגת התמונה */}
//                         <p>
//                             <strong>Image:</strong>
//                             <img
//                                 src={galleryCategory.img_meetup} // שימוש ישיר ב-URL המלא מהשרת
//                                 //alt={galleryCategory.nameMeetup} 
//                                 style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                             />
//                         </p>
//                         <p>--------------------------------------------------</p> {/* מפריד ויזואלי */}
//                         <button onClick={() => navigate(`/FileMeetupDetail:${index}`)}>עעע</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }



//
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {

//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         -----------------------------------
//                         <p>{galleryCategory.id}</p>
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p>
//                         <p>
//                             <strong>Image:</strong>
//                             <img
//                                 src={galleryCategory.img_meetup}

//                                 style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                             />
//                         </p>
//                         <p>--------------------------------------------------</p>

//                         <button onClick={() => navigate(`/FileMeetupDetail/${galleryCategory.id}`)}>file meetup details</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }


//שהקוד ישלח לי לקומםוננטה הבא גם את הID שךל הקטגרויה
//כדי שידעו לאיזה קטגוריה חבצע עדכון
//בגאווה הוא מקבל אובייקט של DTO
//ולכן צריך שזה יהיה  תואם
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {

//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         -----------------------------------
//                         <p>{galleryCategory.id}</p>
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p>
//                         {/* <p>
//                             <strong>Image:</strong>
//                             <img
//                                 src={galleryCategory.img_meetup}

//                                 style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                             />
//                         </p>
//                         <p>--------------------------------------------------</p> */}
//                         {{galleryCategory.img_meetup}?(
//                             <img src={galleryCategory.img_meetup} alt=''></img>
//                         ):(
//                             <p>לא נמצא תמונה</p>
//                         )}
//                         <button onClick={() => navigate(`GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}/${galleryCategory?.gallery_category_id}`)}>file meetup details</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

//GPT
//10-12-24
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {

//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     console.log('GalleryCategoryList',GalleryCategoryList);
    

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         <p>-------------------------------------</p>
//                         <p>{galleryCategory.gallery_category_id}</p>
//                         -----------------------------------
//                         <p>{galleryCategory.id}</p>
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p>
//                         {galleryCategory.img_meetup ? (
//                             <p>
//                                 <strong>Image:</strong>
//                                 <img
//                                     src={galleryCategory.img_meetup}
//                                     alt='Gallery Meetup'
//                                     style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                                 />
//                             </p>
//                         ) : (
//                             <p>לא נמצא תמונה</p>
//                         )}
//                         <button onClick={() => navigate(`GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}/${galleryCategory?.gallery_category_id}`)}>file meetup details</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

//10-12-24--2
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {

//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     console.log('GalleryCategoryList',GalleryCategoryList);
    

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         <p>-------------------------------------</p>
//                         <p>{galleryCategory.gallery_category_id}</p>
//                         -----------------------------------
//                         <p>{galleryCategory.id}</p>
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p>
//                         {/* אם התמונה נמצאת, מציגים את התמונה מקודדת ב-Base64 */}
//                         {galleryCategory.img_meetup ? (
//                             <p>
//                                 <strong>Image:</strong>
//                                 <img
//                                     src={`data:image/jpeg;base64,${galleryCategory.img_meetup}`} // הצגת התמונה מקודדת ב-Base64
//                                     alt='Gallery Meetup'
//                                     style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                                 />
//                             </p>
//                         ) : (
//                             <p>לא נמצא תמונה</p> // אם אין תמונה, מציגים הודעה
//                         )}
//                         <button onClick={() => navigate(`GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}/${galleryCategory?.gallery_category_id}`)}>
//                             file meetup details
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

//קוד נוסך כדי שהתמונה תוצג
//10-12-24
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const galleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList);

//     const [imagesBase64, setImagesBase64] = useState([]); // לשמור את התמונות המומרות מראש

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList());
//     }, [dispatch]);

//     // פונקציה להמיר מערך של ביטים ל-Base64
//     const convertToBase64 = (byteArray) => {
//         if (!byteArray || byteArray.length === 0) return "";
//         return btoa(String.fromCharCode(...byteArray));
//     };

//     // המרת כל התמונות ל-Base64 בהתחלה
//     useEffect(() => {
//         const base64Images = galleryCategoryList.map((category) => {
//             if (category.img_meetup && Array.isArray(category.img_meetup)) {
//                 return {
//                     id: category.id,
//                     base64: convertToBase64(category.img_meetup),
//                 };
//             }
//             return null;
//         }).filter(item => item !== null);

//         setImagesBase64(base64Images);
//     }, [galleryCategoryList]);

//     return (
//         <>
//             <div>GalleryCategory</div>
//             <ul>
//                 {galleryCategoryList.map((galleryCategory) => {
//                     // חיפוש התמונה המומרת עבור כל קטגוריה
//                     const imageBase64 = imagesBase64.find(image => image.id === galleryCategory.id)?.base64;
//                     return (
//                         <li key={galleryCategory.id}>
//                             <p>-------------------------------------</p>
//                             <p>{galleryCategory.gallery_category_id}</p>
//                             <p>{galleryCategory.id}</p>
//                             <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                             <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                             <p><strong>companyName:</strong> {galleryCategory.companyName}</p>

//                             {/* הצגת התמונה אם קיימת */}
//                             {imageBase64 ? (
//                                 <div>
//                                     <strong>Image:</strong>
//                                     <img
//                                         src={`data:image/jpeg;base64,${imageBase64}`}
//                                         alt="Gallery Meetup"
//                                         style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                                     />
//                                 </div>
//                             ) : (
//                                 <p>לא נמצא תמונה</p>
//                             )}

//                             <button onClick={() => navigate(`GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}/${galleryCategory?.gallery_category_id}`)}>
//                                 file meetup details
//                             </button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </>
//     );
// }


//נסיון נוסף
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

// export default function GalleryCategoryList() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
//     const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
//     console.log('GalleryCategoryList', GalleryCategoryList);

//     // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
//     useEffect(() => {
//         dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
//     }, [dispatch]);

//     return (
//         <>
//             <div>GalleryCategory</div> {/* כותרת הרכיב */}
//             <button onClick={()=>navigate('/AddGalleryCategory/')}>add Gallery Category</button>
//             <ul>
//                 {GalleryCategoryList.map((galleryCategory) => (
//                     <li key={galleryCategory.id}>
//                         <p>-------------------------------------</p>
//                         <p>{galleryCategory.gallery_category_id}</p>
//                         -----------------------------------
//                         <p>{galleryCategory.id}</p>
//                         <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
//                         <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
//                         <p><strong>companyName:</strong> {galleryCategory.companyName}</p>
                        
//                         {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
//                         {galleryCategory.img_meetup ? (
//                             <p>
//                                 <strong>Image:</strong>
//                                 <img
//                                     src={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
//                                     alt='Gallery Meetup'
//                                     style={{ width: '200px', height: 'auto', marginTop: '10px' }}
//                                 />
//                             </p>
//                         ) : (
//                             <p>לא נמצא תמונה</p>
//                         )}
                        
//                         <button onClick={() => navigate(`GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}/${galleryCategory?.gallery_category_id}`)}>file meetup details</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }


//11-12-24
//שיפוא הקוד שכפתור להוספה יהיה רק מורשה למנהל
//הבדיקה אם הוא מנהל נעשה על ידי הלוקאל סטורג שזה יותר פשוט בגלל שהוא כבר קיים המידע הזה במקום ליצצא קריאות שרת
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

export default function GalleryCategoryList() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
    const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux
    const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל

    // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
    useEffect(() => {
        // בודק אם המשתמש מנהל
        const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
        if (adminStatus === 'true') {
            setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
        }

        dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
    }, [dispatch]);

    return (
        <>
            <div>GalleryCategory</div> {/* כותרת הרכיב */}

            {/* אם המשתמש מנהל, תציג את כפתור ההוספה */}
            {isAdmin && (
                <button onClick={() => navigate('/AddGalleryCategory/')}>➕Add Gallery Category</button>
            )}

            <ul>
                {GalleryCategoryList.map((galleryCategory) => (
                    <li key={galleryCategory.id}>
                        <p>-------------------------------------</p>
                        <p>{galleryCategory.gallery_category_id}</p>
                        <p>-----------------------------------</p>
                        <p>{galleryCategory.id}</p>
                        <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
                        <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
                        <p><strong>companyName:</strong> {galleryCategory.companyName}</p>

                        {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
                        {galleryCategory.img_meetup ? (
                            <p>
                                <strong>Image:</strong>
                                <img
                                    src={`data:image/jpeg;base64,${galleryCategory.img_meetup}`}
                                    alt="Gallery Meetup"
                                    style={{ width: '200px', height: 'auto', marginTop: '10px' }}
                                />
                            </p>
                        ) : (
                            <p>לא נמצא תמונה</p>
                        )}

                        <button onClick={() => navigate(`/GalleryCategoryList/FileMeetupDetail/${galleryCategory.id}/${galleryCategory?.gallery_category_id}`)}>
                            File Meetup Details
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

