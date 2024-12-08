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
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGalleryCategoryWithFileList } from '../../slices/FileMeetupSlice';

export default function GalleryCategoryList() {

    const navigate = useNavigate();
    const dispatch = useDispatch(); // הכנת dispatch לשליחת פעולות ל-Redux
    const GalleryCategoryList = useSelector((state) => state.fileMeetup.galleryCategoryList); // קבלת הרשימה מ-Redux

    // שליחת הפעולה ל-Redux כדי לקבל את כל קטגוריות הגלריה
    useEffect(() => {
        dispatch(getAllGalleryCategoryWithFileList()); // קריאה לפעולה getAllGalleryCategoryWithFileList
    }, [dispatch]);

    return (
        <>
            <div>GalleryCategory</div> {/* כותרת הרכיב */}
            <ul>
                {GalleryCategoryList.map((galleryCategory) => (
                    <li key={galleryCategory.id}>
                        -----------------------------------
                        <p>{galleryCategory.id}</p>
                        <p><strong>nameMeetup:</strong> {galleryCategory.nameMeetup}</p>
                        <p><strong>descriptionMeetup:</strong> {galleryCategory.descriptionMeetup}</p>
                        <p><strong>companyName:</strong> {galleryCategory.companyName}</p>
                        <p>
                            <strong>Image:</strong>
                            <img
                                src={galleryCategory.img_meetup}

                                style={{ width: '200px', height: 'auto', marginTop: '10px' }}
                            />
                        </p>
                        <p>--------------------------------------------------</p>

                        <button onClick={() => navigate(`/FileMeetupDetail/${galleryCategory.id}`)}>file meetup details</button>
                    </li>
                ))}
            </ul>
        </>
    );
}