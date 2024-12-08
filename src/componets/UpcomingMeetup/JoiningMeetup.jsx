import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
import { addJoiningMeetupList } from '../../slices/JoiningMeetupSlice'

export default function JoiningMeetup() {

    const [name, setName] = useState('');
    const [familyName, seFamilyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setrRole] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

    useEffect(() => {
        dispatch(getMeetupLast());
    }, [dispatch]);


    const handleForm = (e) => {
        e.preventDefault();
        const JoiningMeetupToAdd = {
            name,
            familyName,
            phoneNumber,
            role,
            email,
            meetapimSchedule_id: lastMeetup.id
        };

        console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);

        dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
    };



    return (
        <>
            <div>JoiningMeetup</div>
            <form onSubmit={handleForm}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="familyName"
                    placeholder="Enter the familyName"
                    value={familyName}
                    onChange={(e) => seFamilyName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="phoneNumberme"
                    placeholder="Enter the phoneNumberme"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Enter the role"
                    value={role}
                    onChange={(e) => setrRole(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter the email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Submit to JoiningMeetup</button>
            </form>
        </>
    )
}
