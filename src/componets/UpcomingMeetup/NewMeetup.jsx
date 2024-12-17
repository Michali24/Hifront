//15-12-24
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
import { useNavigate } from 'react-router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MeetupMap.css';
import { Box } from '@mui/material';
import { bgcolor, margin, padding } from '@mui/system';

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

    console.log(LastMeetup.id);

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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // יישור אופקי
                    justifyContent: 'center', // יישור אנכי
                    padding: 5,
                    paddingTop: 10,
                    height: '100vh', // גובה כל המסך
                    width: '100%', // רוחב כל המסך
                    overflow: 'hidden', // מניעת גלילה אם התמונה חורגת
                }}
            >
                {/* כפתור להוספת מיטאפ */}
                {isAdmin && (
                    <Box
                        sx={{
                            width: '100%', // מאפשר יישור לשמאל
                            display: 'flex',
                            justifyContent: 'flex-start', // יישור לשמאל
                            paddingX: 2, // ריווח אופציונלי
                            marginBottom: 2, // רווח מתחת לכפתור
                            gap: 4,
                        }}
                    >
                        <button onClick={() => navigate('/AddNewMeetup')}>➕ Add New Meetup</button>
                        <button onClick={() => navigate(`/ViewMeetupRegistrant/${LastMeetup.id}`)}>View Meetup Registrant</button>
                    </Box>

                )}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh', // גובה מותאם לתמונה
                        width: '80vw', // רוחב מותאם לתמונה
                        border: '1px solid #ddd', // גבול אופציונלי
                    }}
                >
                    <img
                        src={`data:image/jpeg;base64,${LastMeetup?.poster_img_meetup || ''}`}
                        alt="Meetup Poster"
                        style={{
                            width: '100%', // התמונה מתאימה לרוחב ה-Box
                            height: '100%', // התמונה מתאימה לגובה ה-Box
                            objectFit: 'cover', // התמונה מתפרסת על כל הבוקס
                        }}
                    />
                </Box>
            </Box>


            {/* כרטיסיית התוכן */}
            <div className="card-container" style={{ width: '90%', maxWidth: '2400px', textAlign: "center" }}>
                <div className="meetup-details">
                    {/* <h2><p>Meetup Name:{LastMeetup?.meetupNmae || 'שם המיטאפ לא זמין'}</p></h2> */}
                    {/* <p>Meetup Subject: {LastMeetup?.meetupDescription}</p> */}
                    <p>Date:{LastMeetup?.localmeetupDate || 'לא זמין'}</p>
                    <p>Host Company:{LastMeetup?.nameOfTheHostCompany || 'לא זמין'}</p>
                    <p>Host Company Address: {LastMeetup?.addressHostCompany || 'לא זמין'}</p>
                    <p>Time: {LastMeetup?.timeOfTheMeetup || 'לא זמין'}</p>
                    {/* <p>Target Audience:{LastMeetup?.WhoIsthemeetupfor || 'לא זמין'}</p> */}
                    <button
                        className="join-button"
                        onClick={() => navigate(`/JoiningMeetup/${LastMeetup?.id}`)}
                    >
                        Joining Meetup
                    </button>
                </div>

                {/* מפה בתוך הכרטיסייה */}
                <LocationMap address={LastMeetup?.addressHostCompany} />
            </div>
        </div >
    );
}

export default MeetupMap;
