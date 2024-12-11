import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJoiningMeetupByMeetupScheduleid } from '../../slices/JoiningMeetupSlice'
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
//import { LocalFireDepartment } from '@mui/icons-material';

export default function MeetupRegistrationRequests() {
    const dispatch = useDispatch();
    const lastMeetup = useSelector((state) => state.meetup.lastMeetup);
    const JoiningMeetupList = useSelector((state) => state.joiningMeetup.joiningMeetupList);

    useEffect(() => {
        console.log('aaa');
        // שליחה של בקשה לקבלת המפגש האחרון
        dispatch(getMeetupLast());
        console.log('getMeetupLast append');
    }, [dispatch]);

    useEffect(() => {
        if (lastMeetup && lastMeetup.id) {
            console.log('get lkast meetup id', lastMeetup.id);
            // אם ה-ID של המפגש האחרון קיים, שלח בקשה לקבלת הנרשמים למפגש הזה
            dispatch(getJoiningMeetupByMeetupScheduleid(lastMeetup.id));
            console.log('sucesss')
        }
    }, [dispatch, lastMeetup]);  // אם lastMeetup משתנה, הריצה השנייה תתרחש

    return (
        <>
            <div>MeetupRegistrationRequests</div>
            {JoiningMeetupList.length === 0 ? (
                <p>No meetup registrations found.</p>
            ) : (
                <ul>
                    {JoiningMeetupList.map((joiningMeetup) => (
                        <li key={joiningMeetup.id}>
                            <strong>Name:</strong> {joiningMeetup.name} - {joiningMeetup.familyName}<br />
                            <strong>Phone Number:</strong> {joiningMeetup.phoneNumber}<br />
                            <strong>Role:</strong> {joiningMeetup.role}<br />
                            <strong>Email:</strong> {joiningMeetup.email}
                            <p>---------------------------------------------------------</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
