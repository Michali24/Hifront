// import React, { useState } from 'react'
// //import { useEffect } from 'react'
// import {addMeetup} from '../../slices/UpcomingMeetupSlice'
// import { useDispatch } from 'react-redux';


// export default function AddNewMeetup() {

//   const [MeetupNmae, setMeetupNmae] = useState('');
//   const [meetupDescription, setmeetupDescription] = useState('');
//   const [meetupDate, setmeetupDate] = useState('');
//   const [nameOfTheHostCompany, setnameOfTheHostCompany] = useState('');
//   const [addressHostCompany, setaddressHostCompany] = useState('');
//   const [timeOfTheMeetup, settimeOfTheMeetup] = useState('');
//   const [WhoIsthemeetupfor, setWhoIsthemeetupfor] = useState('');
//   const [poster_img_meetup, setposter_img_meetup] = useState('');
//   //const[seturl_wase,seturl_wase]=useState('');

//   const dispatch=useDispatch();

//   function handelForm(e) {
//     e.preventDefault();

//     const userDetails = {
//       MeetupNmae: MeetupNmae,
//       meetupDescription: meetupDescription,
//       meetupDate: meetupDate,
//       nameOfTheHostCompany: nameOfTheHostCompany,
//       addressHostCompany: addressHostCompany,
//       timeOfTheMeetup: timeOfTheMeetup,
//       WhoIsthemeetupfor: WhoIsthemeetupfor,
//       poster_img_meetup:poster_img_meetup
//     };

//     dispatch(postUser(addMeetup));

//   }
//   return (
//     <>
//       <div>AddNewMeetup</div>
//       <form onSubmit={handelForm}>
//         <input
//           type="text"
//           name="MeetupNmae"
//           placeholder="Enter your MeetupNmae"
//           value={MeetupNmae}
//           onChange={(e) => (setMeetupNmae, 'MeetupNmae', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="meetupDescription"
//           placeholder="Enter your meetupDescription"
//           value={meetupDescription}
//           onChange={(e) => (setmeetupDescription, 'meetupDescription', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="meetupDate"
//           placeholder="Enter your meetupDate"
//           value={meetupDate}
//           onChange={(e) => (setmeetupDate, 'meetupDate', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="nameOfTheHostCompany"
//           placeholder="Enter your nameOfTheHostCompany"
//           value={nameOfTheHostCompany}
//           onChange={(e) => (setnameOfTheHostCompany, 'nameOfTheHostCompany', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="addressHostCompany"
//           placeholder="Enter your addressHostCompany"
//           value={addressHostCompany}
//           onChange={(e) => (setaddressHostCompany, 'addressHostCompany', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="timeOfTheMeetup"
//           placeholder="Enter your timeOfTheMeetup"
//           value={timeOfTheMeetup}
//           onChange={(e) => (settimeOfTheMeetup, 'timeOfTheMeetup', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="WhoIsthemeetupfor"
//           placeholder="Enter your WhoIsthemeetupfor"
//           value={WhoIsthemeetupfor}
//           onChange={(e) => (setWhoIsthemeetupfor, 'WhoIsthemeetupfor', e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="poster_img_meetup"
//           placeholder="Enter your poster_img_meetup"
//           value={poster_img_meetup}
//           onChange={(e) => updateField(setposter_img_meetup, 'poster_img_meetup', e.target.value)}
//         // required
//         />
//       </form>

//     </>

//   )
// }

//GPT
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeetup } from '../../slices/UpcomingMeetupSlice';

export default function AddNewMeetup() {

  const [meetupNmae, setMeetupNmae] = useState('');
  const [meetupDescription, setmeetupDescription] = useState('');
  const [meetupDate, setmeetupDate] = useState('');
  const [nameOfTheHostCompany, setnameOfTheHostCompany] = useState('');
  const [addressHostCompany, setaddressHostCompany] = useState('');
  const [timeOfTheMeetup, settimeOfTheMeetup] = useState('');
  const [whoIsthemeetupfor, setWhoIsthemeetupfor] = useState('');
  // const [poster_img_meetup, setposter_img_meetup] = useState('');

  const dispatch = useDispatch();

  function handelForm(e) {
    e.preventDefault();

    const meetupDetails = {
      meetupNmae,
      meetupDescription,
      meetupDate,
      nameOfTheHostCompany,
      addressHostCompany,
      timeOfTheMeetup,
      whoIsthemeetupfor,
      poster_img_meetup: null,
      url_wase: null,
    };
    console.log('before  dispatch');

    // Dispatching the action to Redux
    dispatch(addMeetup(meetupDetails));
    console.log('after diispatch!');

  }

  return (
    <>
      <div>AddNewMeetup</div>
      <form onSubmit={handelForm}>
        <input type="text"
          name="meetupNmae"
          placeholder="Enter your MeetupNmae"
          value={meetupNmae}
          onChange={(e) => setMeetupNmae(e.target.value)}
          required
        />
        <input
          type="text"
          name="meetupDescription"
          placeholder="Enter your meetupDescription"
          value={meetupDescription}
          onChange={(e) => setmeetupDescription(e.target.value)}
          required
        />
        <input
          type="date"
          name="meetupDate"
          placeholder="Enter your meetupDate"
          value={meetupDate}
          onChange={(e) => setmeetupDate(e.target.value)}
          required
        />
        <input
          type="text"
          name="nameOfTheHostCompany"
          placeholder="Enter your nameOfTheHostCompany"
          value={nameOfTheHostCompany}
          onChange={(e) => setnameOfTheHostCompany(e.target.value)}
          required
        />
        <input
          type="text"
          name="addressHostCompany"
          placeholder="Enter your addressHostCompany"
          value={addressHostCompany}
          onChange={(e) => setaddressHostCompany(e.target.value)}
          required
        />
        <input
          type="time"
          name="timeOfTheMeetup"
          placeholder="Enter your timeOfTheMeetup"
          value={timeOfTheMeetup}
          onChange={(e) => settimeOfTheMeetup(e.target.value)}
          required
        />
        <input
          type="text"
          name="WhoIsthemeetupfor"
          placeholder="Enter your WhoIsthemeetupfor"
          value={whoIsthemeetupfor}
          onChange={(e) => setWhoIsthemeetupfor(e.target.value)}
          required
        />
        {/* <input
          type="text"
          name="poster_img_meetup"
          placeholder="Enter your poster_img_meetup"
          value={poster_img_meetup}
          onChange={(e) => setposter_img_meetup(e.target.value)}
        /> */}
        <button type="submit">Add Meetup</button>
      </form>
    </>
  );
}
