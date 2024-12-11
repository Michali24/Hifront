// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { getlastMeetup } from '../../slices/UpcomingMeetupSlice'


// //שליפת המיטאפ הכי קרוב
// export default function NewMeetup() {

//     const dispatch=useDispatch();
//     const LastMeetup=useSelector((state)=>state.meetup.lastMeetup);



//     useEffect(() => {
//         dispatch(getlastMeetup());
//     }, [dispatch]);



//     return (
//         <>
//             <div>NewMeeyup</div>
//             {LastMeetup.meetupNmae}
//             meetupDescription: {LastMeetup.meetupDescription}
//             meetupDate:  {LastMeetup.meetupDate}
//             nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany}
//             addressHostCompany: {LastMeetup.addressHostCompany}
//             timeOfTheMeetup:  {LastMeetup.timeOfTheMeetup}
//             WhoIsthemeetupfor:  {LastMeetup.WhoIsthemeetupfor}
//             poster_img_meetup:  {LastMeetup.poster_img_meetup}
//             url_wase:  {LastMeetup.url_wase}





//         </>
//     )
// }


//gpt _googloe map-לא עובד~!!1
// import React, { useEffect, useCallback, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice'; // שאילתת הנתונים מ-Redux

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// };

// function MeetupMap() {
//   // שימוש ב-Redux לשליפת המידע
//   const dispatch = useDispatch();
//   const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//   const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 }); // מיקום ברירת מחדל (תל אביב)

//   // טוענים את המיטאפ האחרון ב-useEffect
//   useEffect(() => {
//     dispatch(getMeetupLast());
//   }, [dispatch]);

//   // ניהול טעינת ה-API של Google Maps
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // אל תשכח להחליף במפתח שלך!
//     libraries: ['places'], // אם אתה צריך את ה-Places Library
//   });

//   // פונקציה שתמפה את הכתובת לקואורדינטות באמצעות Google Maps Geocoding API
//   const geocodeAddress = useCallback((address) => {
//     const geocoder = new window.google.maps.Geocoder(); // יצירת מופע של Geocoder
//     geocoder.geocode({ address: address }, (results, status) => {
//       if (status === 'OK' && results[0]) {
//         // עדכון המיקום של המפה עם הקואורדינטות שנמצאו
//         setCenter({
//           lat: results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng(),
//         });
//       } else {
//         console.error('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }, []);

//   // אם יש כתובת למיטאפ האחרון, נבצע גיאוקודינג
//   useEffect(() => {
//     if (LastMeetup.addressHostCompany) {
//       geocodeAddress(LastMeetup.addressHostCompany);
//     }
//   }, [LastMeetup, geocodeAddress]);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={15}
//     >
//       {/* מוסיפים Marker על המפה */}
//       {LastMeetup.addressHostCompany && (
//         <Marker position={center} />
//       )}
//     </GoogleMap>
//   ) : (
//     <div>Loading...</div>
//   );
// }

// export default MeetupMap;


//GPT-עם WASE-עובד
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice'; // שאילתת הנתונים מ-Redux

// const WazeMap = ({ lat, lng, zoom }) => {
//     const wazeUrl = `https://embed.waze.com/iframe?zoom=${zoom}&lat=${lat}&lon=${lng}`;

//     return (
//         <iframe
//             src={wazeUrl}
//             width="400"
//             height="400"
//             style={{ border: '0' }}
//             allowFullScreen
//             loading="lazy"
//         ></iframe>
//     );
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 }); // מיקום ברירת מחדל (תל אביב)

//     // טוענים את המיטאפ האחרון ב-useEffect
//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     // אם יש כתובת למיטאפ האחרון, נבצע גיאוקודינג
//     useEffect(() => {
//         if (LastMeetup.addressHostCompany) {
//             // גיאוקודינג או כל פעולה אחרת שדרושה לצורך המיקום
//             setCenter({
//                 lat: 32.0853, // התאם כאן את הקואורדינטות שנמצאו מהמקום
//                 lng: 34.7818, // התאם כאן את הקואורדינטות
//             });
//         }
//     }, [LastMeetup]);

//     return (
//         <div>
//             {LastMeetup.meetupNmae} <br></br>
//             meetupDescription: {LastMeetup.meetupDescription} <br></br>
//             meetupDate: {LastMeetup.meetupDate} <br></br>
//             nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany} <br></br>
//             addressHostCompany: {LastMeetup.addressHostCompany} <br></br>
//             timeOfTheMeetup: {LastMeetup.timeOfTheMeetup} <br></br>
//             WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor} <br></br>
//             {/* poster_img_meetup:{LastMeetup.poster_img_meetup} */}
//             url_wase: {LastMeetup.url_wase} <br></br>
//             <h1>Waze Map</h1>
//             {/* כאן אנחנו משתמשים בקומפוננטה של WazeMap ומעבירים את המיקום */}
//             <WazeMap lat={center.lat} lng={center.lng} zoom={12} />
//         </div>
//     );
// }

// export default MeetupMap;

//GPT-ממקם עם הכתובת מהDB
//עובד!!!!!!!!!
//אבל לא מציג תמונה כראוי!!
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice'; // שאילתת הנתונים מ-Redux

// const WazeMap = ({ lat, lng, zoom }) => {
//     const wazeUrl = `https://embed.waze.com/iframe?zoom=${zoom}&lat=${lat}&lon=${lng}&visitor_id=your_visitor_id`;

//     return (
//         <iframe
//             src={wazeUrl}
//             width="400"
//             height="400"
//             style={{ border: '0' }}
//             allowFullScreen
//             loading="lazy"
//         ></iframe>
//     );
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 }); // מיקום ברירת מחדל (תל אביב)

//     // טוענים את המיטאפ האחרון ב-useEffect
//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     // אם יש כתובת למיטאפ האחרון, נבצע גיאוקודינג
//     useEffect(() => {
//         if (LastMeetup.addressHostCompany) {
//             // גיאוקודינג או כל פעולה אחרת שדרושה לצורך המיקום
//             const address = LastMeetup.addressHostCompany;

//             // יש לבצע בקשה ל-Google Geocoding API
//             const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

//             // שולחים את הבקשה ומעדכנים את המיקום
//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.status === 'OK') {
//                         const location = data.results[0].geometry.location;
//                         setCenter({
//                             lat: location.lat,
//                             lng: location.lng
//                         });
//                     }
//                 })
//                 .catch(error => {
//                     console.error("Error geocoding address:", error);
//                     // אם לא מצליחים, נשתמש במיקום ברירת המחדל
//                     setCenter({ lat: 32.0853, lng: 34.7818 });
//                 });
//         }
//     }, [LastMeetup]);

//     return (
//         <div>
//             {LastMeetup.meetupNmae} <br />
//             meetupDescription: {LastMeetup.meetupDescription} <br />
//             meetupDate: {LastMeetup.meetupDate} <br />
//             nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany} <br />
//             addressHostCompany: {LastMeetup.addressHostCompany} <br />
//             timeOfTheMeetup: {LastMeetup.timeOfTheMeetup} <br />
//             WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor} <br />
//             {LastMeetup.poster_img_meetup}
//             {/* poster_img_meetup:{LastMeetup.poster_img_meetup} */}
//             url_wase: {LastMeetup.url_wase} <br />
//             <h1>Waze Map</h1>
//             {/* כאן אנחנו משתמשים בקומפוננטה של WazeMap ומעבירים את המיקום */}
//             <WazeMap lat={center.lat} lng={center.lng} zoom={12} />
//         </div>
//     );
// }

// export default MeetupMap;

//10-12-24
//נסיון להצתיג את התמונה שחוזרת מהDB
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';

const WazeMap = ({ lat, lng, zoom }) => {
    const wazeUrl = `https://embed.waze.com/iframe?zoom=${zoom}&lat=${lat}&lon=${lng}&visitor_id=your_visitor_id`;

    return (
        <iframe
            src={wazeUrl}
            width="400"
            height="400"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
        ></iframe>
    );
};

function MeetupMap() {
    const dispatch = useDispatch();
    const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
    const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 });

    // טוענים את המיטאפ האחרון ב-useEffect
    useEffect(() => {
        dispatch(getMeetupLast());
    }, [dispatch]);

    // אם יש כתובת למיטאפ האחרון, נבצע גיאוקודינג
    useEffect(() => {
        if (LastMeetup.addressHostCompany) {
            const address = LastMeetup.addressHostCompany;
            const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

            fetch(geocodeUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'OK') {
                        const location = data.results[0].geometry.location;
                        setCenter({
                            lat: location.lat,
                            lng: location.lng
                        });
                    }
                })
                .catch(error => {
                    console.error("Error geocoding address:", error);
                    setCenter({ lat: 32.0853, lng: 34.7818 });
                });
        }
    }, [LastMeetup]);

    return (
        <div>
            <h1>{LastMeetup.meetupNmae}</h1>
            <p>meetupDescription: {LastMeetup.meetupDescription}</p>
            <p>meetupDate: {LastMeetup.meetupDate}</p>
            <p>nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany}</p>
            <p>addressHostCompany: {LastMeetup.addressHostCompany}</p>
            <p>timeOfTheMeetup: {LastMeetup.timeOfTheMeetup}</p>
            <p>WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor}</p>

            {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
            <div>
                {LastMeetup.poster_img_meetup && (
                    <img
                        src={`data:image/jpeg;base64,${LastMeetup.poster_img_meetup}`}
                        alt="Meetup Poster"
                        style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
                    />
                )}
            </div>

            <h1>Waze Map</h1>
            <WazeMap lat={center.lat} lng={center.lng} zoom={12} />
        </div>
    );
}

export default MeetupMap;


//נסיון תיקו השגיאות שהופיעו בF12

//GPT-נסיון נוסף של GGOGLE MAP
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice'; // שאילתת הנתונים מ-Redux
// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//     width: '400px',
//     height: '400px',
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 }); // מיקום ברירת מחדל (תל אביב)
//     const [address, setAddress] = useState(''); // כתובת בשדה החיפוש
//     const [geocoder, setGeocoder] = useState(null); // אובייקט הגיאוקודר של Google

//     // טוענים את המיטאפ האחרון ב-useEffect
//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     // טוענים את ה-API של Google Maps
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // אל תשכח להחליף במפתח שלך!
//     });

//     // יצירת גיאוקודר ברגע שה-API נטען
//     useEffect(() => {
//         if (isLoaded) {
//             setGeocoder(new window.google.maps.Geocoder());
//         }
//     }, [isLoaded]);

//     // אם יש כתובת למיטאפ האחרון, נבצע עדכון למיקום ולכתובת
//     useEffect(() => {
//         if (LastMeetup.addressHostCompany) {
//             setAddress(LastMeetup.addressHostCompany); // עדכון כתובת בשדה החיפוש
//             // אם יש כתובת, נבצע גיאוקודינג לעדכון המיקום
//             geocodeAddress(LastMeetup.addressHostCompany);
//         }
//     }, [LastMeetup]);

//     // פונקציה שתמפה את הכתובת לקואורדינטות באמצעות Google Maps Geocoding API
//     const geocodeAddress = (address) => {
//         if (geocoder) {
//             geocoder.geocode({ address }, (results, status) => {
//                 if (status === 'OK' && results[0]) {
//                     setCenter({
//                         lat: results[0].geometry.location.lat(),
//                         lng: results[0].geometry.location.lng(),
//                     });
//                 } else {
//                     console.error('Geocode was not successful for the following reason: ' + status);
//                 }
//             });
//         }
//     };

//     // עדכון שדה החיפוש כאשר המשתמש מקליד כתובת חדשה
//     const handleAddressChange = (event) => {
//         setAddress(event.target.value);
//     };

//     // עדכון המיקום על פי הכתובת שהוזנה
//     const handleAddressSubmit = () => {
//         geocodeAddress(address); // עדכון המיקום עם הכתובת החדשה
//     };

//     return (
//         <div>
//             {LastMeetup.meetupNmae}<br></br>
//             meetupDescription:{LastMeetup.meetupDescription}<br></br>
//             meetupDate:{LastMeetup.meetupDate}<br></br>
//             nameOfTheHostCompany:{LastMeetup.nameOfTheHostCompany}<br></br>
//             addressHostCompany:{LastMeetup.meetupNmae}<br></br>
//             timeOfTheMeetup:{LastMeetup.meetupNmae}<br></br>
//             WhoIsthemeetupfor:{LastMeetup.meetupNmae}<br></br>
//             {/* poster_img_meetup:{LastMeetup.poster_img_meetup} */}
//             url_wase:{LastMeetup.url_wase}<br></br>
//             <p>Google Map</p>

//             {/* שדה חיפוש שיכיל את הכתובת מתוך Redux */}
//             <input
//                 type="text"
//                 value={address}
//                 onChange={handleAddressChange} // עדכון הכתובת בזמן שהמשתמש מקליד
//                 placeholder="הזן כתובת"
//             />
//             <button onClick={handleAddressSubmit}>חפש כתובת</button>

//             {/* כאן אנחנו משתמשים בקומפוננטה של GoogleMap ומעבירים את המיקום */}
//             {isLoaded ? (
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={center}
//                     zoom={15}
//                 >
//                     {/* מוסיפים Marker על המפה */}
//                     <Marker position={center} />
//                 </GoogleMap>
//             ) : (
//                 <div>Loading...</div>
//             )}


//         </div>
//     );
// }

// export default MeetupMap;

