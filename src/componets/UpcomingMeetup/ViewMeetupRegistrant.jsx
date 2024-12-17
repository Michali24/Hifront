// import React from 'react'
// import { getJoiningMeetupByMeetupScheduleid } from '../../slices/JoiningMeetupSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useParams } from 'react-router';


// export default function ViewMeetupRegistrant() {

//     const { id } = useParams();
//     const dispatch = useDispatch();
//     // const { LastMeetupId } = useParams();
//     const viewMeetupRegistrantList = useSelector((state) => state.joiningMeetup.joiningMeetupList);

//     useEffect(() => {
//         dispatch(getJoiningMeetupByMeetupScheduleid(id));
//     }, [dispatch]);

//     return (
//         <>
//             <div>ViewMeetupRegistrant</div>
//             <ul>
//                 {viewMeetupRegistrantList.map((register) => (
//                     <li key={register.id}>
//                         <p>{register.name}</p>
//                         <p>{register.familyName}</p>
//                         <p>{register.phoneNumber}</p>
//                         <p>{register.role}</p>
//                         <p>{register.email}</p>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }


//עיצוב של הקוד
//17-12-24
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getJoiningMeetupByMeetupScheduleid } from '../../slices/JoiningMeetupSlice';
import './ViewMeetupRegistrant.css'; // ייבוא קובץ ה-CSS

export default function ViewMeetupRegistrant() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const viewMeetupRegistrantList = useSelector((state) => state.joiningMeetup.joiningMeetupList);

    useEffect(() => {
        dispatch(getJoiningMeetupByMeetupScheduleid(id));
    }, [dispatch, id]);

    return (
        <div className="view-meetup-registrant">
            <h1>List of registrants for the upcoming meetup</h1>
            <ul className="registrant-list">
                {viewMeetupRegistrantList.map((register) => (
                    <li key={register.id} className="registrant-item">
                        <p><strong>Name:</strong> {register.name}</p>
                        <p><strong>Family Name:</strong> {register.familyName}</p>
                        <p><strong>Phone number:</strong> {register.phoneNumber}</p>
                        <p><strong>Role:</strong> {register.role}</p>
                        <p><strong>Email:</strong> {register.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
