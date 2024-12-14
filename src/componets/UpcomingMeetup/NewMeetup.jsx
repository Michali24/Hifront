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
//דיי עובד..
//נסיון להצתיג את התמונה שחוזרת מהDB
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';

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
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 });
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל


//     // טוענים את המיטאפ האחרון ב-useEffect
//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     // אם יש כתובת למיטאפ האחרון, נבצע גיאוקודינג
//     useEffect(() => {
//         if (LastMeetup.addressHostCompany) {
//             const address = LastMeetup.addressHostCompany;
//             const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

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
//                     setCenter({ lat: 32.0853, lng: 34.7818 });
//                 });
//         }
//     }, [LastMeetup]);

//     return (
//         <div>
//             <br></br>
//             <br></br>
//             <br></br>
//             {isAdmin && (
//                 <button onClick={() => navigate('/AddNewMeetup')}>AddNewMeetup</button>
//             )}
//             <h1>{LastMeetup.meetupNmae}</h1>
//             <p>meetupDescription: {LastMeetup.meetupDescription}</p>
//             <p>meetupDate: {LastMeetup.localmeetupDate}</p>
//             <p>nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany}</p>
//             <p>addressHostCompany: {LastMeetup.addressHostCompany}</p>
//             <p>timeOfTheMeetup: {LastMeetup.timeOfTheMeetup}</p>
//             <p>WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor}</p>

//             {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
//             <div>
//                 {LastMeetup.poster_img_meetup && (
//                     <img
//                         src={`data:image/jpeg;base64,${LastMeetup.poster_img_meetup}`}
//                         alt="Meetup Poster"
//                         style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
//                     />
//                 )}
//             </div>

//             <h1>Waze Map</h1>
//             <WazeMap lat={center.lat} lng={center.lng} zoom={12} />
//         </div>
//     );
// }

// export default MeetupMap;

//12-12-24
//מצשהו שמליף את גוגל מאפס זוועה
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// const MeetupMap = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [center, setCenter] = useState({ lat: 32.0853, lng: 34.7818 }); // ברירת מחדל
//     const [userLocation, setUserLocation] = useState(null);  // משתנה למיקום של המשתמש

//     // טוענים את המיטאפ האחרון ב-useEffect
//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     // אם יש כתובת למיטאפ האחרון, נבצע גיאוקודינג
//     useEffect(() => {
//         if (LastMeetup.addressHostCompany) {
//             const address = LastMeetup.addressHostCompany;
//             const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`;

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
//                     setCenter({ lat: 32.0853, lng: 34.7818 });
//                 });
//         }

//         // קבלת מיקום המשתמש אם הוא מסכים לתת גישה
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setUserLocation({
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 });
//             });
//         }
//     }, [LastMeetup]);

//     return (
//         <div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <h1>{LastMeetup.meetupNmae}</h1>
//             <p>meetupDescription: {LastMeetup.meetupDescription}</p>
//             <p>meetupDate: {LastMeetup.localmeetupDate}</p>
//             <p>nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany}</p>
//             <p>addressHostCompany: {LastMeetup.addressHostCompany}</p>
//             <p>timeOfTheMeetup: {LastMeetup.timeOfTheMeetup}</p>
//             <p>WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor}</p>

//             {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
//             <div>
//                 {LastMeetup.poster_img_meetup && (
//                     <img
//                         src={`data:image/jpeg;base64,${LastMeetup.poster_img_meetup}`}
//                         alt="Meetup Poster"
//                         style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
//                     />
//                 )}
//             </div>

//             <h1>Map with Leaflet</h1>
//             {/* יצירת המפה עם Leaflet */}
//             <MapContainer 
//                 center={center} 
//                 zoom={12} 
//                 style={{ height: "400px", width: "100%" }}
//                 scrollWheelZoom={false}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {/* הוספת Marker המצביע על המיקום */}
//                 <Marker position={center}>
//                     <Popup>
//                         {LastMeetup.nameOfTheHostCompany} - {LastMeetup.addressHostCompany}
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     );
// };

// export default MeetupMap;


//12-12-24
//נסיון נוסף
//מעולה מצביע על המיקום במפה
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css'; // כולל את הסגנון של Leaflet

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]); // ערך ברירת מחדל (תל אביב)

//     useEffect(() => {
//         if (address) {
//             // גיאוקודינג של הכתובת דרך OpenStreetMap
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;

//                         setLatLng([lat, lon]); // עדכון קואורדינטות
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]); // אם יש שגיאה, נשאר עם תל אביב
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12); // יצירת המפה

//         // שימוש ב-OpenStreetMap
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // הוספת מרקר למיקום החדש
//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         // אופטימיזציה: ניקוי המפה אם הכתובת משתנה
//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return (
//         <div>
//             <div id="map" style={{ width: '100%', height: '400px' }}></div>
//         </div>
//     );
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div>
//             <br /><br /><br />
//             <h1>Location Map</h1>
//             <LocationMap address={LastMeetup.addressHostCompany} />

//             {isAdmin && (
//                 <button onClick={() => navigate('/AddNewMeetup')}>AddNewMeetup</button>
//             )}
//             <h1>{LastMeetup.meetupNmae}</h1>
//             <p>meetupDescription: {LastMeetup.meetupDescription}</p>
//             <p>meetupDate: {LastMeetup.localmeetupDate}</p>
//             <p>nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany}</p>
//             <p>addressHostCompany: {LastMeetup.addressHostCompany}</p>
//             <p>timeOfTheMeetup: {LastMeetup.timeOfTheMeetup}</p>
//             <p>WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor}</p>

//             {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
//             <div>
//                 {LastMeetup.poster_img_meetup && (
//                     <img
//                         src={`data:image/jpeg;base64,${LastMeetup.poster_img_meetup}`}
//                         alt="Meetup Poster"
//                         style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
//                     />
//                 )}
//             </div>


//         </div>
//     );
// }

// export default MeetupMap;

//עיצוב הקודשמציג מיקום במפה
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css'; // כולל את הסגנון של Leaflet

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]); // ערך ברירת מחדל (תל אביב)

//     useEffect(() => {
//         if (address) {
//             // גיאוקודינג של הכתובת דרך OpenStreetMap
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;

//                         setLatLng([lat, lon]); // עדכון קואורדינטות
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]); // אם יש שגיאה, נשאר עם תל אביב
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12); // יצירת המפה

//         // שימוש ב-OpenStreetMap
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // הוספת מרקר למיקום החדש
//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         // אופטימיזציה: ניקוי המפה אם הכתובת משתנה
//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return (
//         <div>
//             <div id="map" style={{ width: '100%', height: '400px' }}></div>
//         </div>
//     );
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div>
//             <br /><br /><br />
//             <h1>Location Map</h1>
//             <LocationMap address={LastMeetup.addressHostCompany} />

//             {isAdmin && (
//                 <button onClick={() => navigate('/AddNewMeetup')}>AddNewMeetup</button>
//             )}
//             <h1>{LastMeetup.meetupNmae}</h1>
//             <h4>המיטאפ הקרוב...</h4>
//             <h4>על מה יהיה נושא המיטאפ?</h4>
//             <p>meetupDescription: {LastMeetup.meetupDescription}</p>
//             <h4>מתי?</h4>
//             <p>meetupDate: {LastMeetup.localmeetupDate}</p>
//             <h4>החברה המארחת:</h4>
//             <p>nameOfTheHostCompany: {LastMeetup.nameOfTheHostCompany}</p>
//             <p>addressHostCompany: {LastMeetup.addressHostCompany}</p>
//             <h4>בשעה?</h4>
//             <p>timeOfTheMeetup: {LastMeetup.timeOfTheMeetup}</p>
//             <h4>למי המיטאפ מיועד?</h4>
//             <p>WhoIsthemeetupfor: {LastMeetup.WhoIsthemeetupfor}</p>
//             <h4>ההשתתפות ללא עלות ולהרשמה מראש</h4>
//             <h4>להרשמה</h4>
//             <button onClick={()=>navigate('/JoiningMeetup')}>JoiningMeetup</button>

//             {/* כאן מוצגת התמונה מקודדת ב-Base64 */}
//             <div>
//                 {LastMeetup.poster_img_meetup && (
//                     <img
//                         src={`data:image/jpeg;base64,${LastMeetup.poster_img_meetup}`}
//                         alt="Meetup Poster"
//                         style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
//                     />
//                 )}
//             </div>


//         </div>
//     );
// }

// export default MeetupMap;

//עיתצוב נוסף בו בתמונה הופכת להיות רקע הדף
//או]ציה אחת וצריך להבין איך לעצב את זה ..
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css'; // כולל את הסגנון של Leaflet

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]); // ערך ברירת מחדל (תל אביב)

//     useEffect(() => {
//         if (address) {
//             // גיאוקודינג של הכתובת דרך OpenStreetMap
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;

//                         setLatLng([lat, lon]); // עדכון קואורדינטות
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]); // אם יש שגיאה, נשאר עם תל אביב
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12); // יצירת המפה

//         // שימוש ב-OpenStreetMap
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // הוספת מרקר למיקום החדש
//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         // אופטימיזציה: ניקוי המפה אם הכתובת משתנה
//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return (
//         <div>
//             <div id="map" style={{ width: '100%', height: '400px' }}></div>
//         </div>
//     );
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);
//         }
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div style={{ fontFamily: 'Arial, sans-serif' }}>
//             {/* תמונה מה-DB בחלק העליון */}
//             <div style={{ 
//                 backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '400px',
//                 width: '100%',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 color: '#fff',
//                 fontSize: '24px',
//                 textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
//             }}>
//                 <h1>{LastMeetup.meetupNmae}</h1>
//             </div>

//             {/* כפתור להרשמה מתחת לתמונה */}
//             <div style={{ textAlign: 'center', marginTop: '20px' }}>
//                 <button 
//                     style={{ 
//                         padding: '10px 20px', 
//                         backgroundColor: '#007BFF', 
//                         color: '#fff', 
//                         border: 'none', 
//                         borderRadius: '5px',
//                         cursor: 'pointer' 
//                     }}
//                     onClick={() => navigate('/JoiningMeetup')}
//                 >
//                     הצטרפות למיטאפ
//                 </button>
//             </div>

//             {/* תוכן הדף - כרטיסיה עם התמונה של המיטאפ */}
//             <div 
//                 style={{ 
//                     backgroundColor: '#fff', 
//                     marginTop: '20px', 
//                     padding: '20px', 
//                     borderRadius: '10px',
//                     boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
//                     maxWidth: '800px',
//                     margin: '0 auto'
//                 }}
//             >
//                 <h4>נושא המיטאפ:</h4>
//                 <p>{LastMeetup.meetupDescription}</p>

//                 <h4>מתי?</h4>
//                 <p>{LastMeetup.localmeetupDate}</p>

//                 <h4>החברה המארחת:</h4>
//                 <p>{LastMeetup.nameOfTheHostCompany}</p>

//                 <h4>כתובת החברה המארחת:</h4>
//                 <p>{LastMeetup.addressHostCompany}</p>

//                 <h4>בשעה:</h4>
//                 <p>{LastMeetup.timeOfTheMeetup}</p>

//                 <h4>למי המיטאפ מיועד?</h4>
//                 <p>{LastMeetup.WhoIsthemeetupfor}</p>

//                 {/* הצגת המפה */}
//                 <LocationMap address={LastMeetup.addressHostCompany} />
//             </div>
//         </div>
//     );
// }

// export default MeetupMap;

//אופציה נוספת התמונה בצד אחד והפרטים בתד שני
//הקוד קצת בשיטה יותר מעוצבת
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]);

//     useEffect(() => {
//         if (address) {
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;
//                         setLatLng([lat, lon]);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]);
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             height: '100vh',
//         }}>
//             {/* תמונה בחלק העליון */}
//             <div style={{
//                 backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '50%',
//                 width: '100%',
//             }}></div>

//             {/* כרטיסייה בחלק התחתון */}
//             <div style={{
//                 height: '50%',
//                 width: '100%',
//                 backgroundColor: '#fff',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 padding: '20px',
//                 boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
//             }}>
//                 {/* פרטי המיטאפ */}
//                 <div style={{
//                     flex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     padding: '20px',
//                 }}>
//                     <h1 style={{ marginBottom: '20px' }}>{LastMeetup.meetupNmae}</h1>
//                     <p>נושא המיטאפ: {LastMeetup.meetupDescription}</p>
//                     <p>מתי: {LastMeetup.localmeetupDate}</p>
//                     <p>החברה המארחת: {LastMeetup.nameOfTheHostCompany}</p>
//                     <p>כתובת החברה המארחת: {LastMeetup.addressHostCompany}</p>
//                     <p>בשעה: {LastMeetup.timeOfTheMeetup}</p>
//                     <p>למי המיטאפ מיועד: {LastMeetup.WhoIsthemeetupfor}</p>
//                     <button
//                         style={{
//                             marginTop: '20px',
//                             padding: '10px 20px',
//                             backgroundColor: '#007BFF',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '5px',
//                             cursor: 'pointer',
//                         }}
//                         onClick={() => navigate('/JoiningMeetup')}
//                     >
//                         הצטרפות למיטאפ
//                     </button>
//                 </div>

//                 {/* מפה */}
//                 <div style={{
//                     flex: 1,
//                     height: '100%',
//                     marginLeft: '20px',
//                 }}>
//                     <LocationMap address={LastMeetup.addressHostCompany} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MeetupMap;

//12-12-24
//צריך לסדר ככה שהם יתפרסו לרוחה העמוד בצורה טובה יותר
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]);

//     useEffect(() => {
//         if (address) {
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;
//                         setLatLng([lat, lon]);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]);
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             margin: '0 auto',
//             maxWidth: '1200px',
//             padding: '20px',
//         }}>
//             {/* תמונה בחלק העליון */}
//             <div style={{
//                 backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 height: '300px',
//                 width: '100%',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             }}></div>

//             {/* כרטיסייה בחלק התחתון */}
//             <div style={{
//                 width: '100%',
//                 marginTop: '20px',
//                 backgroundColor: '#fff',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 display: 'flex',
//                 flexDirection: 'row',
//                 padding: '20px',
//                 gap: '20px',
//             }}>
//                 {/* פרטי המיטאפ */}
//                 <div style={{
//                     flex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                 }}>
//                     <h1 style={{ marginBottom: '20px' }}>{LastMeetup.meetupNmae}</h1>
//                     <p>נושא המיטאפ: {LastMeetup.meetupDescription}</p>
//                     <p>מתי: {LastMeetup.localmeetupDate}</p>
//                     <p>החברה המארחת: {LastMeetup.nameOfTheHostCompany}</p>
//                     <p>כתובת החברה המארחת: {LastMeetup.addressHostCompany}</p>
//                     <p>בשעה: {LastMeetup.timeOfTheMeetup}</p>
//                     <p>למי המיטאפ מיועד: {LastMeetup.WhoIsthemeetupfor}</p>
//                     <button
//                         style={{
//                             marginTop: '20px',
//                             padding: '10px 20px',
//                             backgroundColor: '#007BFF',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '5px',
//                             cursor: 'pointer',
//                         }}
//                         onClick={() => navigate('/JoiningMeetup')}
//                     >
//                         הצטרפות למיטאפ
//                     </button>
//                 </div>

//                 {/* מפה */}
//                 <div style={{
//                     flex: 1,
//                     height: '300px',
//                     borderRadius: '10px',
//                     overflow: 'hidden',
//                 }}>
//                     <LocationMap address={LastMeetup.addressHostCompany} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MeetupMap;

//
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]);

//     useEffect(() => {
//         if (address) {
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;
//                         setLatLng([lat, lon]);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]);
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <>
//             <div
//                 style={{
//                     backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center center',
//                     width: '100%',
//                     height: `calc((100vh - 64px - 72px) / 2)`,
//                     position: 'absolute',
//                     top: '64px',
//                     left: '0',
//                     zIndex: -1,
//                 }}
//             />
//             <div style={{ fontSize: '16px', fontFamily: 'cursive', height: '30vh', padding: '300px 118px 170px 100px', position: 'absolute', bottom: '0', left: '-80px', width: '100%', textAlign: 'left', color: 'black', marginTop: '50px' }}></div>

//             <div className="ContentContainer"></div>
//             <div style={{ padding: '100px', paddingBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//                 {/* <div style={{
//                     backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     height: '300px',
//                     width: '100%',
//                     borderRadius: '10px',
//                     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 }}></div> */}
//             </div>
//             <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 margin: '0 auto',
//                 maxWidth: '1200px',
//                 padding: '20px',
//             }}>
//                 {/* תמונה בחלק העליון */}


//                 {/* כרטיסייה בחלק התחתון */}
//                 <div style={{
//                     width: '100%',
//                     marginTop: '20px',
//                     backgroundColor: '#fff',
//                     borderRadius: '10px',
//                     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                     display: 'flex',
//                     flexDirection: 'row',
//                     padding: '20px',
//                     gap: '20px',
//                 }}>
//                     {/* פרטי המיטאפ */}
//                     <div style={{
//                         flex: 1,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                     }}>
//                         <h1 style={{ marginBottom: '20px' }}>{LastMeetup.meetupNmae}</h1>
//                         <p>נושא המיטאפ: {LastMeetup.meetupDescription}</p>
//                         <p>מתי: {LastMeetup.localmeetupDate}</p>
//                         <p>החברה המארחת: {LastMeetup.nameOfTheHostCompany}</p>
//                         <p>כתובת החברה המארחת: {LastMeetup.addressHostCompany}</p>
//                         <p>בשעה: {LastMeetup.timeOfTheMeetup}</p>
//                         <p>למי המיטאפ מיועד: {LastMeetup.WhoIsthemeetupfor}</p>
//                         <button
//                             style={{
//                                 marginTop: '20px',
//                                 padding: '10px 20px',
//                                 backgroundColor: '#007BFF',
//                                 color: '#fff',
//                                 border: 'none',
//                                 borderRadius: '5px',
//                                 cursor: 'pointer',
//                             }}
//                             onClick={() => navigate('/JoiningMeetup')}
//                         >
//                             הצטרפות למיטאפ
//                         </button>
//                     </div>

//                     {/* מפה */}
//                     <div style={{
//                         flex: 1,
//                         height: '300px',
//                         borderRadius: '10px',
//                         overflow: 'hidden',
//                     }}>
//                         <LocationMap address={LastMeetup.addressHostCompany} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default MeetupMap;


//נסיון לסדר את העיצוביים
//עובד פגזזזז
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MeetupMap.css';

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]);

//     useEffect(() => {
//         if (address) {
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;
//                         setLatLng([lat, lon]);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]);
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return <div id="map" className="map-container"></div>;
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div>
//             {/* רקע התמונה */}
//             <div
//                 className="background-container"
//                 style={{
//                     backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                 }}
//             ></div>

//             {/* כרטיסיית התוכן */}
//             <div className="card-container" style={{width:'90%',maxWidth:'2400px'}}>
//                 <div className="meetup-details">
//                     <h1>{LastMeetup.meetupNmae}</h1>
//                     <p>נושא המיטאפ: {LastMeetup.meetupDescription}</p>
//                     <p>מתי: {LastMeetup.localmeetupDate}</p>
//                     <p>החברה המארחת: {LastMeetup.nameOfTheHostCompany}</p>
//                     <p>כתובת החברה המארחת: {LastMeetup.addressHostCompany}</p>
//                     <p>בשעה: {LastMeetup.timeOfTheMeetup}</p>
//                     <p>למי המיטאפ מיועד: {LastMeetup.WhoIsthemeetupfor}</p>
//                     <button
//                         className="join-button"
//                         // onClick={() => navigate('/JoiningMeetup')}
//                         onClick={() => navigate(`/JoiningMeetup/${LastMeetup.id}`)}

//                     >
//                         הצטרפות למיטאפ
//                     </button>
//                 </div>

//                 {/* מפה בתוך הכרטיסייה */}
//                 <LocationMap address={LastMeetup.addressHostCompany} />
//             </div>
//         </div>
//     );
// }

// export default MeetupMap;

//14-12-24
//לא עובד לי הכפתתור שהוספתי בשביל לבדוק usADMIN
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { useNavigate } from 'react-router';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MeetupMap.css';

// const LocationMap = ({ address }) => {
//     const [latLng, setLatLng] = useState([32.0853, 34.7818]);
//     const [isAdmin, setIsAdmin] = useState(false);  // משתנה לניהול אם המשתמש הוא מנהל


//     useEffect(() => {

//         const adminStatus = localStorage.getItem('isAdmin'); // קורא את ערך ה-`isAdmin` מ-localStorage
//         if (adminStatus === 'true') {
//             setIsAdmin(true);  // אם כן, עדכון המצב של isAdmin
//         }

//         if (address) {
//             const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

//             fetch(geocodeUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data && data[0]) {
//                         const lat = data[0].lat;
//                         const lon = data[0].lon;
//                         setLatLng([lat, lon]);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('Error geocoding address:', error);
//                     setLatLng([32.0853, 34.7818]);
//                 });
//         }
//     }, [address]);

//     useEffect(() => {
//         const map = L.map('map').setView(latLng, 12);

//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//         }).addTo(map);

//         L.marker(latLng).addTo(map)
//             .bindPopup('המיקום נמצא כאן!')
//             .openPopup();

//         return () => {
//             map.remove();
//         };
//     }, [latLng]);

//     return <div id="map" className="map-container"></div>;
// };

// function MeetupMap() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const LastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     return (
//         <div>
//             {isAdmin && (
//                 <button onClick={() => navigate('/AddNewMeetup')}>➕Add NewMeetup</button>
//             )}
//             {/* רקע התמונה */}
//             <div
//                 className="background-container"
//                 style={{
//                     backgroundImage: `url(data:image/jpeg;base64,${LastMeetup.poster_img_meetup})`,
//                 }}
//             ></div>

//             {/* כרטיסיית התוכן */}
//             <div className="card-container" style={{ width: '90%', maxWidth: '2400px' }}>
//                 <div className="meetup-details">
//                     <h1>{LastMeetup.meetupNmae}</h1>
//                     <p>נושא המיטאפ: {LastMeetup.meetupDescription}</p>
//                     <p>מתי: {LastMeetup.localmeetupDate}</p>
//                     <p>החברה המארחת: {LastMeetup.nameOfTheHostCompany}</p>
//                     <p>כתובת החברה המארחת: {LastMeetup.addressHostCompany}</p>
//                     <p>בשעה: {LastMeetup.timeOfTheMeetup}</p>
//                     <p>למי המיטאפ מיועד: {LastMeetup.WhoIsthemeetupfor}</p>
//                     <button
//                         className="join-button"
//                         // onClick={() => navigate('/JoiningMeetup')}
//                         onClick={() => navigate(`/JoiningMeetup/${LastMeetup.id}`)}

//                     >
//                         הצטרפות למיטאפ
//                     </button>
//                 </div>

//                 {/* מפה בתוך הכרטיסייה */}
//                 <LocationMap address={LastMeetup.addressHostCompany} />
//             </div>

//         </div>
//     );
// }

// export default MeetupMap;


//נסיון נוסף לבדיקת מנהל
//עובד!!!!!!!!!!!
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
import { useNavigate } from 'react-router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MeetupMap.css';

const LocationMap = ({ address }) => {
    const [latLng, setLatLng] = useState([32.0853, 34.7818]);

    useEffect(() => {
        if (address) {
            const geocodeUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;

            fetch(geocodeUrl)
                .then(response => response.json())
                .then(data => {
                    if (data && data[0]) {
                        const lat = parseFloat(data[0].lat); // המרה למספר
                        const lon = parseFloat(data[0].lon); // המרה למספר
                        setLatLng([lat, lon]);
                    }
                })
                .catch(error => {
                    console.error('Error geocoding address:', error);
                    setLatLng([32.0853, 34.7818]);
                });
        }
    }, [address]);

    useEffect(() => {
        const map = L.map('map').setView(latLng, 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker(latLng).addTo(map)
            .bindPopup('המיקום נמצא כאן!')
            .openPopup();

        return () => {
            map.remove();
        };
    }, [latLng]);

    return <div id="map" className="map-container"></div>;
};

function MeetupMap() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const LastMeetup = useSelector((state) => state.meetup.lastMeetup);
    const [isAdmin, setIsAdmin] = useState(false); // ברירת מחדל: לא מנהל

    // בדיקה אם המשתמש הוא מנהל
    useEffect(() => {
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus !== null) {
            setIsAdmin(JSON.parse(adminStatus)); // המרה לערך בוליאני
        }
    }, []);

    // שליפת הנתון האחרון
    useEffect(() => {
        dispatch(getMeetupLast());
    }, [dispatch]);

    return (
        <div>
            <br></br>
            {/* כפתור להוספת מיטאפ */}
            {isAdmin && (
                <button onClick={() => navigate('/AddNewMeetup')}>➕ Add New Meetup</button>
            )}

            {/* רקע התמונה */}
            <div
                className="background-container"
                style={{
                    backgroundImage: `url(data:image/jpeg;base64,${LastMeetup?.poster_img_meetup || ''})`,
                }}
            ></div>

            {/* כרטיסיית התוכן */}
            <div className="card-container" style={{ width: '90%', maxWidth: '2400px' }}>
                <div className="meetup-details">
                    <h1>{LastMeetup?.meetupNmae || 'שם המיטאפ לא זמין'}</h1>
                    <p>נושא המיטאפ: {LastMeetup?.meetupDescription || 'לא זמין'}</p>
                    <p>מתי: {LastMeetup?.localmeetupDate || 'לא זמין'}</p>
                    <p>החברה המארחת: {LastMeetup?.nameOfTheHostCompany || 'לא זמין'}</p>
                    <p>כתובת החברה המארחת: {LastMeetup?.addressHostCompany || 'לא זמין'}</p>
                    <p>בשעה: {LastMeetup?.timeOfTheMeetup || 'לא זמין'}</p>
                    <p>למי המיטאפ מיועד: {LastMeetup?.WhoIsthemeetupfor || 'לא זמין'}</p>
                    <button
                        className="join-button"
                        onClick={() => navigate(`/JoiningMeetup/${LastMeetup?.id}`)}
                    >
                        הצטרפות למיטאפ
                    </button>
                </div>

                {/* מפה בתוך הכרטיסייה */}
                <LocationMap address={LastMeetup?.addressHostCompany} />
            </div>
        </div>
    );
}

export default MeetupMap;
