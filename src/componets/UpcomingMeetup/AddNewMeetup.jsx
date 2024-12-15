
//14-12-24
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';

// export default function AddNewMeetup() {

//   const [meetupNmae, setMeetupNmae] = useState('');
//   const [meetupDescription, setmeetupDescription] = useState('');
//   const [meetupDate, setmeetupDate] = useState('');
//   const [nameOfTheHostCompany, setnameOfTheHostCompany] = useState('');
//   const [addressHostCompany, setaddressHostCompany] = useState('');
//   const [timeOfTheMeetup, settimeOfTheMeetup] = useState('');
//   const [whoIsthemeetupfor, setWhoIsthemeetupfor] = useState('');

//   const [poster_img_meetup, setPoster_img_meetup] = useState(null); // שים לב שה-URL של הקובץ לא ישמר כ- string אלא כ- file


//   const dispatch = useDispatch();

//   function handelForm(e) {
//     e.preventDefault();

//     const fileMeetupData = {
//       meetupNmae,
//       meetupDescription,
//       localmeetupDate: meetupDate,
//       nameOfTheHostCompany,
//       addressHostCompany,
//       timeOfTheMeetup,
//       whoIsthemeetupfor,
//       poster_img_meetup: poster_img_meetup ? poster_img_meetup : '',
//       url_wase: null,
//     };

//     const formData = new FormData();
//     formData.append('fileFileMeetup', JSON.stringify(fileMeetupData)); // שליחת המידע כ- JSON
//     formData.append('file', poster_img_meetup); // שליחת הקובץ

//     console.log('Submitting GalleryCategory with File:', formData);
//     console.log('formData', formData);

//     // שליחה לפונקציה addFileMeeetup
//     dispatch(addMeetup(formData));
//     console.log('before  dispatch');
//     console.log('meetupDetails', formData);

//     console.log('after diispatch!');

//   }

//   return (
//     <>
//       <div>AddNewMeetup</div>
//       <form onSubmit={handelForm}>
//         <input
//           type="file"
//           name="poster_img_meetup"
//           onChange={(e) => setPoster_img_meetup(e.target.files[0])} // שמירת הקובץ עצמו
//           required
//         />
//         <input type="text"
//           name="meetupNmae"
//           placeholder="Enter your MeetupNmae"
//           value={meetupNmae}
//           onChange={(e) => setMeetupNmae(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="meetupDescription"
//           placeholder="Enter your meetupDescription"
//           value={meetupDescription}
//           onChange={(e) => setmeetupDescription(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           name="meetupDate"
//           placeholder="Enter your meetupDate"
//           value={meetupDate}
//           onChange={(e) => setmeetupDate(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="nameOfTheHostCompany"
//           placeholder="Enter your nameOfTheHostCompany"
//           value={nameOfTheHostCompany}
//           onChange={(e) => setnameOfTheHostCompany(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="addressHostCompany"
//           placeholder="Enter your addressHostCompany"
//           value={addressHostCompany}
//           onChange={(e) => setaddressHostCompany(e.target.value)}
//           required
//         />
//         <input
//           type="time"
//           name="timeOfTheMeetup"
//           placeholder="Enter your timeOfTheMeetup"
//           value={timeOfTheMeetup}
//           onChange={(e) => settimeOfTheMeetup(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="WhoIsthemeetupfor"
//           placeholder="Enter your WhoIsthemeetupfor"
//           value={whoIsthemeetupfor}
//           onChange={(e) => setWhoIsthemeetupfor(e.target.value)}
//           required
//         />
//         {/* <input
//           type="text"
//           name="poster_img_meetup"
//           placeholder="Enter your poster_img_meetup"
//           value={poster_img_meetup}
//           onChange={(e) => setposter_img_meetup(e.target.value)}
//         /> */}

//         <button type="submit">Submit a new Gallery Category</button>

//       </form>
//     </>
//   );
// }


//נסיון לסדר את הקוד כך שיתווסף לDB
//בעיה בשליחת הנתונים
//כניראה הפורמט תאירךל לא נשלח נכון
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';

// export default function AddNewMeetup() {
//   const [meetupNmae, setMeetupNmae] = useState('');
//   const [meetupDescription, setMeetupDescription] = useState('');
//   const [localmeetupDate, setLocalMeetupDate] = useState(''); // שם השדה שונה להתאמה ל-Java
//   const [nameOfTheHostCompany, setNameOfTheHostCompany] = useState('');
//   const [addressHostCompany, setAddressHostCompany] = useState('');
//   const [timeOfTheMeetup, setTimeOfTheMeetup] = useState('');
//   const [whoIsthemeetupfor, setWhoIstheMeetupFor] = useState('');
//   const [poster_img_meetup, setPosterImgMeetup] = useState(null);

//   const dispatch = useDispatch();

//   function handleForm(e) {
//     e.preventDefault();

//     // יצירת אובייקט הנתונים
//     const fileMeetupData = {
//       meetupNmae,
//       meetupDescription,
//       localmeetupDate, // שליחה בפורמט YYYY-MM-DD
//       nameOfTheHostCompany,
//       addressHostCompany,
//       timeOfTheMeetup,
//       whoIsthemeetupfor,
//       poster_img_meetup: poster_img_meetup ? poster_img_meetup.name : '',
//       url_wase: null,
//     };

//     // יצירת FormData לצורך שליחת קובץ
//     const formData = new FormData();
//     formData.append('fileMeetapimSchedule', JSON.stringify(fileMeetupData)); // עדכון שם השדה
//     formData.append('file', poster_img_meetup); // הוספת הקובץ

//     console.log('Submitting Meetup Data:', formData);

//     // שליחת הנתונים ל-Redux
//     dispatch(addMeetup(formData));
//   }

//   return (
//     <>
//       <div>Add New Meetup</div>
//       <form onSubmit={handleForm}>
//         <input
//           type="file"
//           name="poster_img_meetup"
//           onChange={(e) => setPosterImgMeetup(e.target.files[0])}
//           required
//         />
//         <input
//           type="text"
//           name="meetupNmae"
//           placeholder="Enter your Meetup Name"
//           value={meetupNmae}
//           onChange={(e) => setMeetupNmae(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="meetupDescription"
//           placeholder="Enter your Meetup Description"
//           value={meetupDescription}
//           onChange={(e) => setMeetupDescription(e.target.value)}
//           required
//         />
//         <input
//           type="date"
//           name="localmeetupDate" // שם השדה עודכן להתאמה
//           placeholder="Enter your Meetup Date"
//           value={localmeetupDate}
//           onChange={(e) => setLocalMeetupDate(e.target.value)} // פורמט YYYY-MM-DD
//           required
//         />
//         <input
//           type="text"
//           name="nameOfTheHostCompany"
//           placeholder="Enter the Host Company Name"
//           value={nameOfTheHostCompany}
//           onChange={(e) => setNameOfTheHostCompany(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="addressHostCompany"
//           placeholder="Enter the Host Company Address"
//           value={addressHostCompany}
//           onChange={(e) => setAddressHostCompany(e.target.value)}
//           required
//         />
//         <input
//           type="time"
//           name="timeOfTheMeetup"
//           placeholder="Enter the Meetup Time"
//           value={timeOfTheMeetup}
//           onChange={(e) => setTimeOfTheMeetup(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           name="whoIsthemeetupfor"
//           placeholder="Enter the Meetup Audience"
//           value={whoIsthemeetupfor}
//           onChange={(e) => setWhoIstheMeetupFor(e.target.value)}
//           required
//         />
//         <button type="submit">Submit a New Meetup</button>
//       </form>
//     </>
//   );
// }


//תיקון נסיון 1
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';

// export default function AddNewMeetup() {

//   const dispatch = useDispatch();
//   const [poster_img_meetup, setPoster_img_meetup] = useState(null);
//   const [newMeetup, setNewMeetup] = useState({
//     meetupNmae: '',
//     meetupDescription: '',
//     localmeetupDate: '',
//     nameOfTheHostCompany: '',
//     addressHostCompany: '',
//     timeOfTheMeetup: '',
//     whoIsthemeetupfor: '',
//     poster_img_meetup: '',
//     url_wase: null,
//   });


//   const formattedDate = new Date(newMeetup.localmeetupDate).toISOString().split('T')[0];

//   const handelFileChange = (e) => {
//     const file = e.target.files[0];
//     setPoster_img_meetup(file);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewMeetup((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // טיפול בהגשת הטופס
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('Uploading..', poster_img_meetup);

//     // יצירת FormData
//     const formData = new FormData();
//     formData.append('fileMeetapimSchedule', new Blob([JSON.stringify(newMeetup)], { type: 'application/json' }));
//     formData.append('file', poster_img_meetup);

//     console.log(formData);

//     dispatch(addMeetup(formData));

//     console.log('formData', formData);

//   }




//   return (
//     <>
//       <div>Add New Meetup</div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           name="poster_img_meetup"
//           onChange={handelFileChange}
//           required
//         />
//         <input
//           type="text"
//           name="meetupNmae"
//           placeholder="Enter your Meetup Name"
//           value={newMeetup.meetupNmae}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="meetupDescription"
//           placeholder="Enter your Meetup Description"
//           value={newMeetup.meetupDescription}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="localmeetupDate"
//           placeholder="Enter your Meetup Date"
//           value={newMeetup.localmeetupDate}
//           onChange={handleChange} // קבלת ערך התאריך
//           required
//         />
//         <input
//           type="text"
//           name="nameOfTheHostCompany"
//           placeholder="Enter the Host Company Name"
//           value={newMeetup.nameOfTheHostCompany}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="addressHostCompany"
//           placeholder="Enter the Host Company Address"
//           value={newMeetup.addressHostCompany}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="time"
//           name="timeOfTheMeetup"
//           placeholder="Enter the Meetup Time"
//           value={newMeetup.timeOfTheMeetup}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="whoIsthemeetupfor"
//           placeholder="Enter the Meetup Audience"
//           value={newMeetup.whoIsthemeetupfor}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit a New Meetup</button>
//       </form>
//     </>
//   );
// }


//סידור הסינטאקס
//עובדדדדדדדדדדדדדדדד
//14-12-24
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';

// export default function AddNewMeetup() {
//   const dispatch = useDispatch();
//   const [poster_img_meetup, setPoster_img_meetup] = useState(null);
//   const [newMeetup, setNewMeetup] = useState({
//     meetupNmae: '',
//     meetupDescription: '',
//     localmeetupDate: '',
//     nameOfTheHostCompany: '',
//     addressHostCompany: '',
//     timeOfTheMeetup: '',
//     whoIsthemeetupfor: '',
//     poster_img_meetup: '',
//     url_wase: null,
//   });

//   // טיפול בשינוי הקובץ
//   const handelFileChange = (e) => {
//     const file = e.target.files[0];
//     setPoster_img_meetup(file);
//   };

//   // טיפול בשינוי השדות
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // אם השדה הוא התאריך, מבצעים המרה לפורמט YYYY-MM-DD
//     if (name === 'localmeetupDate') {
//       const formattedDate = new Date(value).toISOString().split('T')[0];
//       setNewMeetup((prevData) => ({
//         ...prevData,
//         [name]: formattedDate,
//       }));
//     } else {
//       setNewMeetup((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   // טיפול בהגשת הטופס
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('Uploading..', poster_img_meetup);

//     // יצירת FormData
//     const formData = new FormData();
//     formData.append(
//       'fileMeetapimSchedule',
//       new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
//     );
//     formData.append('file', poster_img_meetup);

//     console.log('FormData before dispatch:', formData);

//     dispatch(addMeetup(formData));
//   }

//   return (
//     <>
//       <div>Add New Meetup</div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           name="poster_img_meetup"
//           onChange={handelFileChange}
//           required
//         />
//         <input
//           type="text"
//           name="meetupNmae"
//           placeholder="Enter your Meetup Name"
//           value={newMeetup.meetupNmae}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="meetupDescription"
//           placeholder="Enter your Meetup Description"
//           value={newMeetup.meetupDescription}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="localmeetupDate"
//           placeholder="Enter your Meetup Date"
//           value={newMeetup.localmeetupDate}
//           onChange={handleChange} // שינוי שדה התאריך כולל המרה
//           required
//         />
//         <input
//           type="text"
//           name="nameOfTheHostCompany"
//           placeholder="Enter the Host Company Name"
//           value={newMeetup.nameOfTheHostCompany}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="addressHostCompany"
//           placeholder="Enter the Host Company Address"
//           value={newMeetup.addressHostCompany}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="time"
//           name="timeOfTheMeetup"
//           placeholder="Enter the Meetup Time"
//           value={newMeetup.timeOfTheMeetup}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="whoIsthemeetupfor"
//           placeholder="Enter the Meetup Audience"
//           value={newMeetup.whoIsthemeetupfor}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit a New Meetup</button>
//       </form>
//     </>
//   );
// }

//15-12-24
//הקוד בעיצוב MUI
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Grid,
// } from '@mui/material';

// export default function AddNewMeetup() {
//   const dispatch = useDispatch();
//   const [poster_img_meetup, setPoster_img_meetup] = useState(null);
//   const [newMeetup, setNewMeetup] = useState({
//     meetupNmae: '',
//     meetupDescription: '',
//     localmeetupDate: '',
//     nameOfTheHostCompany: '',
//     addressHostCompany: '',
//     timeOfTheMeetup: '',
//     whoIsthemeetupfor: '',
//     poster_img_meetup: '',
//     url_wase: null,
//   });

//   // טיפול בשינוי הקובץ
//   const handelFileChange = (e) => {
//     const file = e.target.files[0];
//     setPoster_img_meetup(file);
//   };

//   // טיפול בשינוי השדות
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // אם השדה הוא התאריך, מבצעים המרה לפורמט YYYY-MM-DD
//     if (name === 'localmeetupDate') {
//       const formattedDate = new Date(value).toISOString().split('T')[0];
//       setNewMeetup((prevData) => ({
//         ...prevData,
//         [name]: formattedDate,
//       }));
//     } else {
//       setNewMeetup((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   // טיפול בהגשת הטופס
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('Uploading..', poster_img_meetup);

//     // יצירת FormData
//     const formData = new FormData();
//     formData.append(
//       'fileMeetapimSchedule',
//       new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
//     );
//     formData.append('file', poster_img_meetup);

//     console.log('FormData before dispatch:', formData);

//     dispatch(addMeetup(formData));
//   }

//   return (
//     <Box
//       sx={{
//         maxWidth: 600,
//         margin: '0 auto',
//         padding: 2,
//         boxShadow: 3,
//         borderRadius: 2,
//         bgcolor: 'background.paper',
//       }}
//     >
//       <Typography variant="h4" gutterBottom align="center">
//         Add New Meetup
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Poster Image
//               <input
//                 type="file"
//                 name="poster_img_meetup"
//                 onChange={handelFileChange}
//                 hidden
//               />
//             </Button>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Meetup Name"
//               name="meetupNmae"
//               value={newMeetup.meetupNmae}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Meetup Description"
//               name="meetupDescription"
//               value={newMeetup.meetupDescription}
//               onChange={handleChange}
//               multiline
//               rows={4}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Meetup Date"
//               name="localmeetupDate"
//               type="date"
//               value={newMeetup.localmeetupDate}
//               onChange={handleChange}
//               fullWidth
//               required
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Host Company Name"
//               name="nameOfTheHostCompany"
//               value={newMeetup.nameOfTheHostCompany}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Host Company Address"
//               name="addressHostCompany"
//               value={newMeetup.addressHostCompany}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Meetup Time"
//               name="timeOfTheMeetup"
//               type="time"
//               value={newMeetup.timeOfTheMeetup}
//               onChange={handleChange}
//               fullWidth
//               required
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Audience"
//               name="whoIsthemeetupfor"
//               value={newMeetup.whoIsthemeetupfor}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Submit New Meetup
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// }

//עיצוב נוסף
//הכרטיסייה בעיצוב MUI 
//הקוד לא מסודר עד הסוף!!!!!
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeetup } from '../../slices/UpcomingMeetupSlice';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

export default function AddNewMeetup() {
  const dispatch = useDispatch();
  const [poster_img_meetup, setPoster_img_meetup] = useState(null);
  const [newMeetup, setNewMeetup] = useState({
    meetupNmae: '',
    meetupDescription: '',
    localmeetupDate: '',
    nameOfTheHostCompany: '',
    addressHostCompany: '',
    timeOfTheMeetup: '',
    whoIsthemeetupfor: '',
    poster_img_meetup: '',
    url_wase: null,
  });

  // טיפול בשינוי הקובץ
  const handelFileChange = (e) => {
    const file = e.target.files[0];
    setPoster_img_meetup(file);
  };

  // טיפול בשינוי השדות
  const handleChange = (e) => {
    const { name, value } = e.target;

    // אם השדה הוא התאריך, מבצעים המרה לפורמט YYYY-MM-DD
    if (name === 'localmeetupDate') {
      const formattedDate = new Date(value).toISOString().split('T')[0];
      setNewMeetup((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setNewMeetup((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // טיפול בהגשת הטופס
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Uploading..', poster_img_meetup);

    // יצירת FormData
    const formData = new FormData();
    formData.append(
      'fileMeetapimSchedule',
      new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
    );
    formData.append('file', poster_img_meetup);

    console.log('FormData before dispatch:', formData);

    dispatch(addMeetup(formData));
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 5,
        paddingTop: 10,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Add New Meetup
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" component="label" fullWidth>
              Upload Poster Image
              <input
                type="file"
                name="poster_img_meetup"
                onChange={handelFileChange}
                hidden
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Name"
              name="meetupNmae"
              value={newMeetup.meetupNmae}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Description"
              name="meetupDescription"
              value={newMeetup.meetupDescription}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Date"
              name="localmeetupDate"
              type="date"
              value={newMeetup.localmeetupDate}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Host Company Name"
              name="nameOfTheHostCompany"
              value={newMeetup.nameOfTheHostCompany}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Host Company Address"
              name="addressHostCompany"
              value={newMeetup.addressHostCompany}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meetup Time"
              name="timeOfTheMeetup"
              type="time"
              value={newMeetup.timeOfTheMeetup}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Audience"
              name="whoIsthemeetupfor"
              value={newMeetup.whoIsthemeetupfor}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit New Meetup
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

// עיצוב הקוד
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';
// import { TextField, Button, Typography, Box, Input, Alert } from '@mui/material';

// export default function AddNewMeetup() {
//   const dispatch = useDispatch();

//   const [poster_img_meetup, setPoster_img_meetup] = useState(null);
//   const [newMeetup, setNewMeetup] = useState({
//     meetupNmae: '',
//     meetupDescription: '',
//     localmeetupDate: '',
//     nameOfTheHostCompany: '',
//     addressHostCompany: '',
//     timeOfTheMeetup: '',
//     whoIsthemeetupfor: '',
//     url_wase: null,
//   });

//   const [successMessage, setSuccessMessage] = useState(null); // הודעת הצלחה
//   const [errorMessage, setErrorMessage] = useState(null); // הודעת שגיאה

//   // טיפול בשינוי הקובץ
//   const handelFileChange = (e) => {
//     const file = e.target.files[0];
//     setPoster_img_meetup(file);
//   };

//   // טיפול בשינוי השדות
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // אם השדה הוא התאריך, מבצעים המרה לפורמט YYYY-MM-DD
//     if (name === 'localmeetupDate') {
//       const formattedDate = new Date(value).toISOString().split('T')[0];
//       setNewMeetup((prevData) => ({
//         ...prevData,
//         [name]: formattedDate,
//       }));
//     } else {
//       setNewMeetup((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   // טיפול בהגשת הטופס
//   function handleSubmit(e) {
//     e.preventDefault();

//     // יצירת FormData
//     const formData = new FormData();
//     formData.append(
//       'fileMeetapimSchedule',
//       new Blob([JSON.stringify(newMeetup)], { type: 'application/json' })
//     );
//     formData.append('file', poster_img_meetup);

//     // שליחת הנתונים לשרת
//     dispatch(addMeetup(formData))
//       .then((response) => {
//         // אם הצליח
//         setSuccessMessage(`Meetup added successfully: ${newMeetup.meetupNmae}`);
//         // ניקוי הטופס
//         setNewMeetup({
//           meetupNmae: '',
//           meetupDescription: '',
//           localmeetupDate: '',
//           nameOfTheHostCompany: '',
//           addressHostCompany: '',
//           timeOfTheMeetup: '',
//           whoIsthemeetupfor: '',
//           url_wase: null,
//         });
//         setPoster_img_meetup(null);
//       })
//       .catch((error) => {
//         // אם נכשל
//         setErrorMessage('An error occurred while adding the meetup.');
//       });
//   }

//   return (
//     <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         Add New Meetup
//       </Typography>

//       {/* הצגת הודעת הצלחה או שגיאה */}
//       {successMessage && <Alert severity="success">{successMessage}</Alert>}
//       {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Meetup Name"
//           name="meetupNmae"
//           value={newMeetup.meetupNmae}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Meetup Description"
//           name="meetupDescription"
//           value={newMeetup.meetupDescription}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           type="date"
//           label="Meetup Date"
//           name="localmeetupDate"
//           InputLabelProps={{ shrink: true }}
//           value={newMeetup.localmeetupDate}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Host Company Name"
//           name="nameOfTheHostCompany"
//           value={newMeetup.nameOfTheHostCompany}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Host Company Address"
//           name="addressHostCompany"
//           value={newMeetup.addressHostCompany}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           type="time"
//           label="Meetup Time"
//           name="timeOfTheMeetup"
//           InputLabelProps={{ shrink: true }}
//           value={newMeetup.timeOfTheMeetup}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Target Audience"
//           name="whoIsthemeetupfor"
//           value={newMeetup.whoIsthemeetupfor}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           fullWidth
//           type="file"
//           dir="rtl"
//           onChange={handelFileChange}
//           sx={{ mb: 2 }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           type="submit"
//         >
//           Submit a New Meetup
//         </Button>
//       </form>
//     </Box>
//   );
// }


//הוספת ולידציות לקוד
//בעיות בהוספת קובץ
//אין ולידציה על הוספצ הקובץ...

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMeetup } from '../../slices/UpcomingMeetupSlice';
// import { TextField, Button, Typography, Box, Input, Alert } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   meetupNmae: Yup.string()
//     .required('Meetup Name is required')
//     .min(3, 'Meetup Name must be at least 3 characters'),
//   meetupDescription: Yup.string()
//     .required('Meetup Description is required')
//     .min(10, 'Description must be at least 10 characters'),
//   localmeetupDate: Yup.date()
//     .required('Meetup Date is required'),
//   nameOfTheHostCompany: Yup.string()
//     .required('Host Company Name is required')
//     .min(3, 'Host Company Name must be at least 3 characters'),
//   addressHostCompany: Yup.string()
//     .required('Host Company Address is required')
//     .min(5, 'Address must be at least 5 characters'),
//   timeOfTheMeetup: Yup.string()
//     .required('Meetup Time is required'),
//   whoIsthemeetupfor: Yup.string()
//     .required('Target Audience is required')
//     .min(3, 'Target Audience must be at least 3 characters'),
// });

// export default function AddNewMeetup() {
//   const dispatch = useDispatch();

//   const [successMessage, setSuccessMessage] = useState(null); // הודעת הצלחה
//   const [errorMessage, setErrorMessage] = useState(null); // הודעת שגיאה
  

//   const { register, handleSubmit, setValue, formState: { errors } } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: 'all',
//   });

//   const handelFileChange = (e) => {
//     const file = e.target.files[0];
//     setImg_meetup(file);
//   };

//   // טיפול בהגשת הטופס
//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append(
//       'fileMeetapimSchedule',
//       new Blob([JSON.stringify(data)], { type: 'application/json' })
//     );
//     formData.append('file', data.poster_img_meetup[0]); // קובץ התמונה

//     dispatch(addMeetup(formData))
//       .then(() => {
//         setSuccessMessage(`Meetup "${data.meetupNmae}" added successfully!`);
//         setErrorMessage(null);
//       })
//       .catch(() => {
//         setErrorMessage('An error occurred while adding the meetup.');
//         setSuccessMessage(null);
//       });
//   };

//   return (
//     <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, bgcolor: '#f9f9f9', borderRadius: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         Add New Meetup
//       </Typography>

//       {/* הודעות הצלחה ושגיאה */}
//       {successMessage && <Alert severity="success">{successMessage}</Alert>}
//       {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Meetup Name */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Meetup Name"
//           {...register('meetupNmae')}
//           error={!!errors.meetupNmae}
//           helperText={errors.meetupNmae?.message}
//         />

//         {/* Meetup Description */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Meetup Description"
//           {...register('meetupDescription')}
//           error={!!errors.meetupDescription}
//           helperText={errors.meetupDescription?.message}
//         />

//         {/* Meetup Date */}
//         <TextField
//           fullWidth
//           margin="normal"
//           type="date"
//           label="Meetup Date"
//           InputLabelProps={{ shrink: true }}
//           {...register('localmeetupDate')}
//           error={!!errors.localmeetupDate}
//           helperText={errors.localmeetupDate?.message}
//         />

//         {/* Host Company Name */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Host Company Name"
//           {...register('nameOfTheHostCompany')}
//           error={!!errors.nameOfTheHostCompany}
//           helperText={errors.nameOfTheHostCompany?.message}
//         />

//         {/* Host Company Address */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Host Company Address"
//           {...register('addressHostCompany')}
//           error={!!errors.addressHostCompany}
//           helperText={errors.addressHostCompany?.message}
//         />

//         {/* Meetup Time */}
//         <TextField
//           fullWidth
//           margin="normal"
//           type="time"
//           label="Meetup Time"
//           InputLabelProps={{ shrink: true }}
//           {...register('timeOfTheMeetup')}
//           error={!!errors.timeOfTheMeetup}
//           helperText={errors.timeOfTheMeetup?.message}
//         />

//         {/* Target Audience */}
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Target Audience"
//           {...register('whoIsthemeetupfor')}
//           error={!!errors.whoIsthemeetupfor}
//           helperText={errors.whoIsthemeetupfor?.message}
//         />

//         {/* Poster Image */}
//         <Input
//           fullWidth
//           type="file"
//           dir="rtl"
//           onChange={handelFileChange}
//           sx={{ mb: 2 }}
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           type="submit"
//         >
//           Submit a New Meetup
//         </Button>
//       </form>
//     </Box>
//   );
// }
