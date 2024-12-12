// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList } from '../../slices/JoiningMeetupSlice'

// export default function JoiningMeetup() {

//     const [name, setName] = useState('');
//     const [familyName, seFamilyName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [role, setrRole] = useState('');
//     const [email, setEmail] = useState('');

//     const dispatch = useDispatch();
//     const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);


//     const handleForm = (e) => {
//         e.preventDefault();
//         const JoiningMeetupToAdd = {
//             name,
//             familyName,
//             phoneNumber,
//             role,
//             email,
//             meetapimSchedule_id: lastMeetup.id
//         };

//         console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);

//         dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
//     };



//     return (
//         <>
//             <div>JoiningMeetup</div>
//             <form onSubmit={handleForm}>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter the name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="familyName"
//                     placeholder="Enter the familyName"
//                     value={familyName}
//                     onChange={(e) => seFamilyName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="phoneNumberme"
//                     placeholder="Enter the phoneNumberme"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="role"
//                     placeholder="Enter the role"
//                     value={role}
//                     onChange={(e) => setrRole(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter the email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit to JoiningMeetup</button>
//             </form>
//         </>
//     )
// }


//עיצוב הדף שיראה כמו IFRAM
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
// import './JoiningMeetup.css';

// export default function JoiningMeetup() {

//     const [name, setName] = useState('');
//     const [familyName, setFamilyName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [role, setRole] = useState('');
//     const [email, setEmail] = useState('');

//     const dispatch = useDispatch();
//     const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//     }, [dispatch]);

//     const handleForm = (e) => {
//         e.preventDefault();
//         const JoiningMeetupToAdd = {
//             name,
//             familyName,
//             phoneNumber,
//             role,
//             email,
//             meetapimSchedule_id: lastMeetup.id
//         };

//         console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);

//         dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
//     };

//     return (
//         <div className="joining-meetup-container">
//             <h2 className="header">הרשמה למפגש</h2>
//             <form onSubmit={handleForm} className="form">
//                 <div className="form-group">
//                     <label htmlFor="name">שם פרטי:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         placeholder="התשובה שלך"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="familyName">שם משפחה:</label>
//                     <input
//                         type="text"
//                         id="familyName"
//                         placeholder="התשובה שלך"
//                         value={familyName}
//                         onChange={(e) => setFamilyName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="התשובה שלך"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phoneNumber">טלפון:</label>
//                     <input
//                         type="text"
//                         id="phoneNumber"
//                         placeholder="התשובה שלך"
//                         value={phoneNumber}
//                         onChange={(e) => setPhoneNumber(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="role">שם החברה:</label>
//                     <input
//                         type="text"
//                         id="role"
//                         placeholder="התשובה שלך"
//                         value={role}
//                         onChange={(e) => setRole(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="submit-button">שלח</button>
//             </form>
//             <footer className="footer">
//                 <img src="/path/to/footer-image.png" alt="Footer Banner" className="footer-image" />
//             </footer>
//         </div>
//     );
// }


//אפשרות להצגת התמונה מהDB
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList,getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
// import './JoiningMeetup.css';



// export default function JoiningMeetup() {


//     const [name, setName] = useState('');
//     const [familyName, setFamilyName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [role, setRole] = useState('');
//     const [email, setEmail] = useState('');

//     const dispatch = useDispatch();
//     const lastMeetup = useSelector((state) => state.meetup.lastMeetup);
//     const joiningMeetupList=useSelector((state)=>state.joiningMeetup.joiningMeetupList);

//     useEffect(() => {
//         dispatch(getMeetupLast());
//         dispatch(getAllJoiningMeetupList());
//     }, [dispatch]);

//     const handleForm = (e) => {
//         e.preventDefault();
//         const JoiningMeetupToAdd = {
//             name,
//             familyName,
//             phoneNumber,
//             role,
//             email,
//             meetapimSchedule_id: lastMeetup.id
//         };

//         console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);

//         dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
//     };

//     return (
//         <div className="joining-meetup-container">
//             <h2 className="header">הרשמה למיטאפ הקרוב</h2>
//             <form onSubmit={handleForm} className="form">
//                 <div className="form-group">
//                     <label htmlFor="name">שם פרטי:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         placeholder="התשובה שלך"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="familyName">שם משפחה:</label>
//                     <input
//                         type="text"
//                         id="familyName"
//                         placeholder="התשובה שלך"
//                         value={familyName}
//                         onChange={(e) => setFamilyName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="התשובה שלך"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="phoneNumber">טלפון:</label>
//                     <input
//                         type="text"
//                         id="phoneNumber"
//                         placeholder="התשובה שלך"
//                         value={phoneNumber}
//                         onChange={(e) => setPhoneNumber(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="role">שם החברה:</label>
//                     <input
//                         type="text"
//                         id="role"
//                         placeholder="התשובה שלך"
//                         value={role}
//                         onChange={(e) => setRole(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="submit-button">שלח</button>
//             </form>
//             <footer className="footer">
//                 <img src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`} alt="Footer Banner" className="footer-image" />
//             </footer>
//         </div>
//     );
// }


//עיצוב האניפוטיים כמו אינםוטיים של MUI
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList, getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
// import './JoiningMeetup.css';

// export default function JoiningMeetup() {
//   const [name, setName] = useState('');
//   const [familyName, setFamilyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [role, setRole] = useState('');
//   const [email, setEmail] = useState('');

//   const dispatch = useDispatch();
//   const lastMeetup = useSelector((state) => state.meetup.lastMeetup);
//   const joiningMeetupList = useSelector((state) => state.joiningMeetup.joiningMeetupList);

//   useEffect(() => {
//     dispatch(getMeetupLast());
//     dispatch(getAllJoiningMeetupList());
//   }, [dispatch]);

//   const handleForm = (e) => {
//     e.preventDefault();
//     const JoiningMeetupToAdd = {
//       name,
//       familyName,
//       phoneNumber,
//       role,
//       email,
//       meetapimSchedule_id: lastMeetup.id,
//     };

//     console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);
//     dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
//   };

//   return (
//     <div className="joining-meetup-container">
//       <h2 className="header">הרשמה למיטאפ הקרוב</h2>
//       <form onSubmit={handleForm} className="form">
//         <div className="form-group">
//           <label htmlFor="name">שם פרטי:</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="התשובה שלך"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="familyName">שם משפחה:</label>
//           <input
//             type="text"
//             id="familyName"
//             placeholder="התשובה שלך"
//             value={familyName}
//             onChange={(e) => setFamilyName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="התשובה שלך"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">טלפון:</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             placeholder="התשובה שלך"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="role">שם החברה:</label>
//           <input
//             type="text"
//             id="role"
//             placeholder="התשובה שלך"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">שלח</button>
//       </form>
//       <footer className="footer">
//         <img
//           src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`}
//           alt="Footer Banner"
//           className="footer-image"
//         />
//       </footer>
//     </div>
//   );
// }


//נסיון נוסף
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList, getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
// import './JoiningMeetup.css';

// export default function JoiningMeetup() {
//   const [name, setName] = useState('');
//   const [familyName, setFamilyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [role, setRole] = useState('');
//   const [email, setEmail] = useState('');

//   const dispatch = useDispatch();
//   const lastMeetup = useSelector((state) => state.meetup.lastMeetup);
//   const joiningMeetupList = useSelector((state) => state.joiningMeetup.joiningMeetupList);

//   useEffect(() => {
//     dispatch(getMeetupLast());
//     dispatch(getAllJoiningMeetupList());
//   }, [dispatch]);

//   const handleForm = (e) => {
//     e.preventDefault();
//     const JoiningMeetupToAdd = {
//       name,
//       familyName,
//       phoneNumber,
//       role,
//       email,
//       meetapimSchedule_id: lastMeetup.id,
//     };

//     console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);
//     dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
//   };

//   return (
//     <div className="joining-meetup-container">
//       <h2 className="header">הרשמה למיטאפ הקרוב</h2>
//       <form onSubmit={handleForm} className="form">
//         <div className="form-group">
//           <input
//             type="text"
//             id="name"
//             placeholder="שם פרטי"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="familyName"
//             placeholder="שם משפחה"
//             value={familyName}
//             onChange={(e) => setFamilyName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="phoneNumber"
//             placeholder="טלפון"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="role"
//             placeholder="שם החברה"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">שלח</button>
//       </form>
//       <footer className="footer">
//         {lastMeetup && lastMeetup.poster_img_meetup ? (
//           <img
//             src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`}
//             alt="Footer Banner"
//             className="footer-image"
//           />
//         ) : (
//           <p className="footer-placeholder">לא נמצאה תמונה להצגה</p>
//         )}
//       </footer>
//     </div>
//   );
// }

//נסיון מספר 3
//12-12-24
//ולידציות לאינפוטיים
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList, getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import './JoiningMeetup.css';

// // Validation schema
// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('שם פרטי חובה')
//     .min(3, 'השם חייב להכיל לפחות 3 תווים'),

//   familyName: Yup.string()
//     .required('שם משפחה חובה')
//     .min(3, 'שם המשפחה חייב להכיל לפחות 3 תווים'),

//   email: Yup.string()
//     .email('כתובת מייל לא תקינה')
//     .required('כתובת מייל חובה'),

//   phoneNumber: Yup.string()
//     .matches(/^\+?[1-9]\d{1,14}$/, 'מספר טלפון לא תקין')
//     .required('מספר טלפון חובה'),

//   role: Yup.string()
//     .required('תפקיד בחברה חובה')
//     .min(3, 'התפקיד חייב להכיל לפחות 3 תווים'),
// });

// export default function JoiningMeetup() {
//   const dispatch = useDispatch();
//   const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

//   useEffect(() => {
//     dispatch(getMeetupLast());
//     dispatch(getAllJoiningMeetupList());
//   }, [dispatch]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: 'onBlur',
//   });

//   const onSubmit = (data) => {
//     const JoiningMeetupToAdd = {
//       ...data,
//       meetapimSchedule_id: lastMeetup.id,
//     };

//     console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);
//     dispatch(addJoiningMeetupList(JoiningMeetupToAdd));
//   };

//   return (
//     <div className="joining-meetup-container">
//       <h2 className="header">הרשמה למיטאפ הקרוב</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="form">
//         <div className="form-group">
//           <input
//             type="text"
//             id="name"
//             placeholder="שם פרטי"
//             {...register('name')}
//           />
//           {errors.name && <p className="error-message">{errors.name.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="familyName"
//             placeholder="שם משפחה"
//             {...register('familyName')}
//           />
//           {errors.familyName && <p className="error-message">{errors.familyName.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             {...register('email')}
//           />
//           {errors.email && <p className="error-message">{errors.email.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="phoneNumber"
//             placeholder="טלפון"
//             {...register('phoneNumber')}
//           />
//           {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="role"
//             placeholder="תפקיד בחברה"
//             {...register('role')}
//           />
//           {errors.role && <p className="error-message">{errors.role.message}</p>}
//         </div>
//         <button type="submit" className="submit-button">שלח</button>
//       </form>
//       <footer className="footer">
//         {lastMeetup && lastMeetup.poster_img_meetup ? (
//           <img
//             src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`}
//             alt="Footer Banner"
//             className="footer-image"
//           />
//         ) : (
//           <p className="footer-placeholder">לא נמצאה תמונה להצגה</p>
//         )}
//       </footer>
//     </div>
//   );
// }

//כאשר משתמש ילחץ. על כפתור אישור יוםיע םופאפ
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
// import { addJoiningMeetupList, getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import Swal from 'sweetalert2';
// import './JoiningMeetup.css';

// // Validation schema
// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .required('שם פרטי חובה')
//     .min(3, 'השם חייב להכיל לפחות 3 תווים'),

//   familyName: Yup.string()
//     .required('שם משפחה חובה')
//     .min(3, 'שם המשפחה חייב להכיל לפחות 3 תווים'),

//   email: Yup.string()
//     .email('כתובת מייל לא תקינה')
//     .required('כתובת מייל חובה'),

//   phoneNumber: Yup.string()
//     .matches(/^\+?[1-9]\d{1,14}$/, 'פורמט מספר הטלפון לא תקין')
//     .required('מספר טלפון חובה'),

//   role: Yup.string()
//     .required('תפקיד בחברה חובה')
//     .min(3, 'התפקיד חייב להכיל לפחות 3 תווים'),
// });

// export default function JoiningMeetup() {
//   const dispatch = useDispatch();
//   const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

//   useEffect(() => {
//     dispatch(getMeetupLast());
//     dispatch(getAllJoiningMeetupList());
//   }, [dispatch]);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: 'onBlur',
//   });

//   const onSubmit = (data) => {
//     const JoiningMeetupToAdd = {
//       ...data,
//       meetapimSchedule_id: lastMeetup.id,
//     };

//     // Dispatch action
//     dispatch(addJoiningMeetupList(JoiningMeetupToAdd));

//     // Show success message
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "הטופס נשלח בהצלחה!",
//       showConfirmButton: false,
//       timer: 1500,
//     });

//     console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);
//   };

//   return (
//     <div className="joining-meetup-container">
//       <h2 className="header">הרשמה למיטאפ הקרוב</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="form">
//         <div className="form-group">
//           <input
//             type="text"
//             id="name"
//             placeholder="שם פרטי"
//             {...register('name')}
//           />
//           {errors.name && <p className="error-message">{errors.name.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="familyName"
//             placeholder="שם משפחה"
//             {...register('familyName')}
//           />
//           {errors.familyName && <p className="error-message">{errors.familyName.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             {...register('email')}
//           />
//           {errors.email && <p className="error-message">{errors.email.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="phoneNumber"
//             placeholder="טלפון"
//             {...register('phoneNumber')}
//           />
//           {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="role"
//             placeholder="תפקיד בחברה"
//             {...register('role')}
//           />
//           {errors.role && <p className="error-message">{errors.role.message}</p>}
//         </div>
//         <button type="submit" className="submit-button">שלח</button>
//       </form>
//       <footer className="footer">
//         {lastMeetup && lastMeetup.poster_img_meetup ? (
//           <img
//             src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`}
//             alt="Footer Banner"
//             className="footer-image"
//           />
//         ) : (
//           <p className="footer-placeholder">לא נמצאה תמונה להצגה</p>
//         )}
//       </footer>
//     </div>
//   );
// }


//עיצוב אחר שך swal
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMeetupLast } from '../../slices/UpcomingMeetupSlice';
import { addJoiningMeetupList, getAllJoiningMeetupList } from '../../slices/JoiningMeetupSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './JoiningMeetup.css';

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('שם פרטי חובה')
    .min(3, 'השם חייב להכיל לפחות 3 תווים'),

  familyName: Yup.string()
    .required('שם משפחה חובה')
    .min(3, 'שם המשפחה חייב להכיל לפחות 3 תווים'),

  email: Yup.string()
    .email('כתובת מייל לא תקינה')
    .required('כתובת מייל חובה'),

  phoneNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'פורמט מספר הטלפון לא תקין')
    .required('מספר טלפון חובה'),

  role: Yup.string()
    .required('תפקיד בחברה חובה')
    .min(3, 'התפקיד חייב להכיל לפחות 3 תווים'),
});

export default function JoiningMeetup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastMeetup = useSelector((state) => state.meetup.lastMeetup);

  useEffect(() => {
    dispatch(getMeetupLast());
    dispatch(getAllJoiningMeetupList());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const handleSuccess = () => {
    Swal.fire({
      title: 'נרשמת בהצלחה!',
      html: '<div class="animate-like">👍</div>',
      icon: 'success',
      timer: 3000,
      showConfirmButton: false,
      didClose: () => {
        navigate('/Home'); 
        reset();
      },
    });
  };

  const onSubmit = (data) => {
    const JoiningMeetupToAdd = {
      ...data,
      meetapimSchedule_id: lastMeetup.id,
    };

    // Dispatch action
    dispatch(addJoiningMeetupList(JoiningMeetupToAdd));

    // Show success message
    handleSuccess();

    console.log('Submitting JoiningMeetup:', JoiningMeetupToAdd);
  };

  return (
    <div className="joining-meetup-container">
      <h2 className="header">הרשמה למיטאפ הקרוב</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="שם פרטי"
            {...register('name')}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            id="familyName"
            placeholder="שם משפחה"
            {...register('familyName')}
          />
          {errors.familyName && <p className="error-message">{errors.familyName.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            id="phoneNumber"
            placeholder="טלפון"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            id="role"
            placeholder="תפקיד בחברה"
            {...register('role')}
          />
          {errors.role && <p className="error-message">{errors.role.message}</p>}
        </div>
        <button type="submit" className="submit-button">שלח</button>
      </form>
      <footer className="footer">
        {lastMeetup && lastMeetup.poster_img_meetup ? (
          <img
            src={`data:image/jpeg;base64,${lastMeetup.poster_img_meetup}`}
            alt="Footer Banner"
            className="footer-image"
          />
        ) : (
          <p className="footer-placeholder">לא נמצאה תמונה להצגה</p>
        )}
      </footer>
    </div>
  );
}
