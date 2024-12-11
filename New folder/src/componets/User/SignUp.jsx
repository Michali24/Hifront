//GPT---
//קוד ללא עיצוב MUI
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUser } from '../../slices/UserSlices';

// export default function SignUp() {
//   const [userPravitName, setUserPravitName] = useState('');
//   const [userLastName, setUserLastName] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPhone, setUserPhone] = useState('');
//   const [userCompanyName, setUserCompanyName] = useState('');
//   const [userRoleInSociety, setUserRoleInSociety] = useState('');

//   const dispatch = useDispatch();

//   // פעולה לטיפול בשינוי השדות ושמירת הנתונים ב-localStorage
//   const updateField = (setter, fieldName, value) => {
//     setter(value);
//     // שמירת השדה העדכני ב-localStorage
//     //it is good?
//     const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};
//     localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
//   };

//   // שליחה של פרטי המשתמש לשרת באמצעות Redux
//   const handleForm = (e) => {
//     e.preventDefault();

//     const userDetails = {
//       name: userPravitName,
//       lastName: userLastName,
//       password: userPassword,
//       email: userEmail,
//       phone: userPhone,
//       companyName: userCompanyName,
//       roleInSociety: userRoleInSociety,
//     };

//     dispatch(postUser(userDetails)); // קריאה ל-redux עבור שליחת הנתונים
//   };

//   return (
//     <form onSubmit={handleForm}>
//       <input
//         type="text"
//         name="PravitName"
//         placeholder="Enter your private name"
//         value={userPravitName}
//         onChange={(e) => updateField(setUserPravitName, 'name', e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         name="LastName"
//         placeholder="Enter your last name"
//         value={userLastName}
//         onChange={(e) => updateField(setUserLastName, 'lastName', e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter your password"
//         value={userPassword}
//         onChange={(e) => updateField(setUserPassword, 'password', e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter your email"
//         value={userEmail}
//         onChange={(e) => updateField(setUserEmail, 'email', e.target.value)}
//         required
//       />
//       <input
//         type="tel"
//         name="phone"
//         placeholder="Enter your phone"
//         value={userPhone}
//         onChange={(e) => updateField(setUserPhone, 'phone', e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         name="companyName"
//         placeholder="Enter your company name"
//         value={userCompanyName}
//         onChange={(e) => updateField(setUserCompanyName, 'companyName', e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         name="roleInSociety"
//         placeholder="Enter your role in society"
//         value={userRoleInSociety}
//         onChange={(e) => updateField(setUserRoleInSociety, 'roleInSociety', e.target.value)}
//         required
//       />
//       <button type="submit">Add-Send</button>
//     </form>
//   );
// }

//קוד מעוצב בMUI--------------------------------------------------------------------
//עיצוב פשוט ובסיסי
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUser } from '../../slices/UserSlices';
// import { TextField, Button, Box, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// export default function SignUp() {
//   const [userPravitName, setUserPravitName] = useState('');
//   const [userLastName, setUserLastName] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPhone, setUserPhone] = useState('');
//   const [userCompanyName, setUserCompanyName] = useState('');
//   const [userRoleInSociety, setUserRoleInSociety] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // state for password visibility
//   const dispatch = useDispatch();

//   // פעולה לטיפול בשינוי השדות ושמירת הנתונים ב-localStorage
//   const updateField = (setter, fieldName, value) => {
//     setter(value);
//     // שמירת השדה העדכני ב-localStorage
//     const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};
//     localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
//   };

//   // שליחה של פרטי המשתמש לשרת באמצעות Redux
//   const handleForm = (e) => {
//     e.preventDefault();

//     const userDetails = {
//       name: userPravitName,
//       lastName: userLastName,
//       password: userPassword,
//       email: userEmail,
//       phone: userPhone,
//       companyName: userCompanyName,
//       roleInSociety: userRoleInSociety,
//     };

//     dispatch(postUser(userDetails)); // קריאה ל-redux עבור שליחת הנתונים
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword); // toggle visibility
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto', mt: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         HiTechistim - Sign Up
//       </Typography>
//       <form onSubmit={handleForm}>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="First Name"
//               value={userPravitName}
//               onChange={(e) => updateField(setUserPravitName, 'userPravitName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="given-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <TextField
//               fullWidth
//               label="Last Name"
//               value={userLastName}
//               onChange={(e) => updateField(setUserLastName, 'userLastName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="family-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <TextField
//               fullWidth
//               label="Password"
//               value={userPassword}
//               onChange={(e) => updateField(setUserPassword, 'userPassword', e.target.value)}
//               variant="outlined"
//               required
//               type={showPassword ? "text" : "password"} // toggle between password and text input
//               autoComplete="new-password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <TextField
//               fullWidth
//               label="Email"
//               value={userEmail}
//               onChange={(e) => updateField(setUserEmail, 'userEmail', e.target.value)}
//               type="email"
//               variant="outlined"
//               required
//               autoComplete="email"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <TextField
//               fullWidth
//               label="Phone Number"
//               value={userPhone}
//               onChange={(e) => updateField(setUserPhone, 'userPhone', e.target.value)}
//               type="tel"
//               variant="outlined"
//               required
//               autoComplete="tel"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="Company Name"
//               value={userCompanyName}
//               onChange={(e) => updateField(setUserCompanyName, 'userCompanyName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="organization"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <TextField
//               fullWidth
//               label="Role in Society"
//               value={userRoleInSociety}
//               onChange={(e) => updateField(setUserRoleInSociety, 'userRoleInSociety', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="off"
//             />
//           </motion.div>
//         </Box>
//         <Button
//           fullWidth
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2 }}
//         >
//           Add & Send
//         </Button>
//       </form>
//     </Paper>
//   );
// }


//בעת שגיאת 404 מציג שגיאה
//לא באמת עובד
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUser } from '../../slices/UserSlices';
// import { TextField, Button, Box, Typography, Paper, InputAdornment, IconButton, Alert } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// export default function SignUp() {
//   const [userPravitName, setUserPravitName] = useState('');
//   const [userLastName, setUserLastName] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPhone, setUserPhone] = useState('');
//   const [userCompanyName, setUserCompanyName] = useState('');
//   const [userRoleInSociety, setUserRoleInSociety] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // state for password visibility
//   const [errorMessage, setErrorMessage] = useState(''); // state for error message
//   const dispatch = useDispatch();

//   // Function to update fields and save them to localStorage
//   const updateField = (setter, fieldName, value) => {
//     setter(value);
//     const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};
//     localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
//   };

//   // Function to handle form submission
//   const handleForm = async (e) => {
//     e.preventDefault();

//     const userDetails = {
//       name: userPravitName,
//       lastName: userLastName,
//       password: userPassword,
//       email: userEmail,
//       phone: userPhone,
//       companyName: userCompanyName,
//       roleInSociety: userRoleInSociety,
//     };

//     try {
//       await dispatch(postUser(userDetails)); // Send data to Redux action
//       setErrorMessage(''); // Clear error message on success
//     } catch (error) {
//       console.log(error);  // Log the error for debugging

//       // Handle specific error cases
//       if (error.response && error.response.status === 404) {
//         setErrorMessage('פרטי התחברות לא טובים');
//       } else {
//         setErrorMessage('התרחשה שגיאה, נסה שנית מאוחר יותר');
//       }
//     }
//   };

//   // Function to toggle password visibility
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto', mt: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         HiTechistim - Sign Up
//       </Typography>

//       {/* Display error message if any */}
//       {errorMessage && (
//         <Box sx={{ mb: 2 }}>
//           <Alert severity="error">{errorMessage}</Alert>
//         </Box>
//       )}

//       <form onSubmit={handleForm}>
//         {/* First Name Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="First Name"
//               value={userPravitName}
//               onChange={(e) => updateField(setUserPravitName, 'userPravitName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="given-name"
//             />
//           </motion.div>
//         </Box>
//         {/* Last Name Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <TextField
//               fullWidth
//               label="Last Name"
//               value={userLastName}
//               onChange={(e) => updateField(setUserLastName, 'userLastName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="family-name"
//             />
//           </motion.div>
//         </Box>
//         {/* Password Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <TextField
//               fullWidth
//               label="Password"
//               value={userPassword}
//               onChange={(e) => updateField(setUserPassword, 'userPassword', e.target.value)}
//               variant="outlined"
//               required
//               type={showPassword ? "text" : "password"}
//               autoComplete="new-password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </motion.div>
//         </Box>
//         {/* Email Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <TextField
//               fullWidth
//               label="Email"
//               value={userEmail}
//               onChange={(e) => updateField(setUserEmail, 'userEmail', e.target.value)}
//               type="email"
//               variant="outlined"
//               required
//               autoComplete="email"
//             />
//           </motion.div>
//         </Box>
//         {/* Phone Number Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <TextField
//               fullWidth
//               label="Phone Number"
//               value={userPhone}
//               onChange={(e) => updateField(setUserPhone, 'userPhone', e.target.value)}
//               type="tel"
//               variant="outlined"
//               required
//               autoComplete="tel"
//             />
//           </motion.div>
//         </Box>
//         {/* Company Name Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="Company Name"
//               value={userCompanyName}
//               onChange={(e) => updateField(setUserCompanyName, 'userCompanyName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="organization"
//             />
//           </motion.div>
//         </Box>
//         {/* Role in Society Field */}
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <TextField
//               fullWidth
//               label="Role in Society"
//               value={userRoleInSociety}
//               onChange={(e) => updateField(setUserRoleInSociety, 'userRoleInSociety', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="off"
//             />
//           </motion.div>
//         </Box>

//         <Button
//           fullWidth
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2 }}
//         >
//           Add & Send
//         </Button>
//       </form>
//     </Paper>
//   );
// }

//נסיון נוסף להצגת הודעת שגיאה
//מציג שגיאה אבל אחרי תיקון השגיאה נשאר עדיין עם השגיאה ולא עובר לדף הבית
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUser } from '../../slices/UserSlices';
// import { TextField, Button, Box, Typography, Paper, Alert,InputAdornment } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { IconButton } from '@mui/material';


// export default function SignUp() {
//   const [userPravitName, setUserPravitName] = useState('');
//   const [userLastName, setUserLastName] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPhone, setUserPhone] = useState('');
//   const [userCompanyName, setUserCompanyName] = useState('');
//   const [userRoleInSociety, setUserRoleInSociety] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // state for password visibility
//   const [errorMessage, setErrorMessage] = useState(''); // state for error message
//   const dispatch = useDispatch();

//   // פעולה לטיפול בשינוי השדות ושמירת הנתונים ב-localStorage
//   const updateField = (setter, fieldName, value) => {
//     setter(value);
//     // שמירת השדה העדכני ב-localStorage
//     const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};
//     localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
//   };

//   // שליחה של פרטי המשתמש לשרת באמצעות Redux
//   const handleForm = async (e) => {
//     e.preventDefault();

//     const userDetails = {
//       name: userPravitName,
//       lastName: userLastName,
//       password: userPassword,
//       email: userEmail,
//       phone: userPhone,
//       companyName: userCompanyName,
//       roleInSociety: userRoleInSociety,
//     };

//     try {
//       const response = await dispatch(postUser(userDetails)); // קריאה ל-redux עבור שליחת הנתונים

//       if (postUser.fulfilled.match(response)) {
//         // אם ההרשמה הצליחה, תוכל להוסיף מעבר לדף אחר או פעולה אחרת
//         alert('Registration successful!');
//       } else if (postUser.rejected.match(response)) {
//         // בדיקה אם התקבלה שגיאה 404 או שגיאה אחרת
//         if (response.error.status === 404) {
//           setErrorMessage('User not found, please try again.');
//         } else {
//           setErrorMessage('An error occurred, please try again later.');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred during the registration process.');
//       console.error('Error during registration', error);
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword); // toggle visibility
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto', mt: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         HiTechistim - Sign Up
//       </Typography>
//       {errorMessage && <Alert severity="error">{errorMessage}</Alert>} {/* הצגת הודעת שגיאה אם קיימת */}
//       <form onSubmit={handleForm}>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="First Name"
//               value={userPravitName}
//               onChange={(e) => updateField(setUserPravitName, 'userPravitName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="given-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <TextField
//               fullWidth
//               label="Last Name"
//               value={userLastName}
//               onChange={(e) => updateField(setUserLastName, 'userLastName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="family-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <TextField
//               fullWidth
//               label="Email"
//               value={userEmail}
//               onChange={(e) => updateField(setUserEmail, 'userEmail', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="email"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <TextField
//               fullWidth
//               label="Phone"
//               value={userPhone}
//               onChange={(e) => updateField(setUserPhone, 'userPhone', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="tel"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <TextField
//               fullWidth
//               label="Password"
//               type={showPassword ? 'text' : 'password'}
//               value={userPassword}
//               onChange={(e) => updateField(setUserPassword, 'userPassword', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="new-password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </motion.div>
//         </Box>

//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="Company Name"
//               value={userCompanyName}
//               onChange={(e) => updateField(setUserCompanyName, 'userCompanyName', e.target.value)}
//               variant="outlined"
//               required
//             />
//           </motion.div>
//         </Box>

//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <TextField
//               fullWidth
//               label="Role in Company"
//               value={userRoleInSociety}
//               onChange={(e) => updateField(setUserRoleInSociety, 'userRoleInSociety', e.target.value)}
//               variant="outlined"
//               required
//             />
//           </motion.div>
//         </Box>

//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Sign Up
//         </Button>
//       </form>
//     </Paper>
//   );
// }

///נסיון נוסף
//עובד!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//הצגת שגיאה 404
//ומוסיף באמת למערכת ויודע לזהות אותו אחרי הרשמה שהוא באמת רשום

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUser } from '../../slices/UserSlices';
// import { TextField, Button, Box, Typography, Paper, Alert, InputAdornment, IconButton } from '@mui/material'; 
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom'; // הוספת הייבוא של navigate

// export default function SignUp() {
//   const [userPravitName, setUserPravitName] = useState('');
//   const [userLastName, setUserLastName] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPhone, setUserPhone] = useState('');
//   const [userCompanyName, setUserCompanyName] = useState('');
//   const [userRoleInSociety, setUserRoleInSociety] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');  // שדה להודעות שגיאה
//   const dispatch = useDispatch();
//   const navigate = useNavigate();  // הגדרת navigate

//   // עדכון השדות ושמירת הנתונים ב-localStorage
//   const updateField = (setter, fieldName, value) => {
//     setter(value);
//     const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};
//     localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
//   };

//   // שליחה של פרטי המשתמש לשרת
//   const handleForm = async (e) => {
//     e.preventDefault();

//     const userDetails = {
//       name: userPravitName,
//       lastName: userLastName,
//       password: userPassword,
//       email: userEmail,
//       phone: userPhone,
//       companyName: userCompanyName,
//       roleInSociety: userRoleInSociety,
//     };

//     try {
//       const response = await dispatch(postUser(userDetails));  // שליחת נתונים ל-redux

//       if (postUser.fulfilled.match(response)) {
//         // אם ההרשמה הצליחה, ניווט לדף הבית
//         navigate('/Home');  // עבור לדף הבית
//       } else {
//         // טיפול בשגיאות אם יש
//         if (response.error.status === 404) {
//           setErrorMessage('The server could not find the requested resource.'); // שגיאה 404
//         } else {
//           setErrorMessage('There was an error during the registration process.');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('There was an error during the registration process.');
//       console.error('Error during registration', error);
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword); // toggle visibility
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto', mt: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         HiTechistim - Sign Up
//       </Typography>

//       {/* הצגת הודעת שגיאה */}
//       {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//       <form onSubmit={handleForm}>
//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             <TextField
//               fullWidth
//               label="First Name"
//               value={userPravitName}
//               onChange={(e) => updateField(setUserPravitName, 'userPravitName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="given-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
//             <TextField
//               fullWidth
//               label="Last Name"
//               value={userLastName}
//               onChange={(e) => updateField(setUserLastName, 'userLastName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="family-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
//             <TextField
//               fullWidth
//               label="Email"
//               value={userEmail}
//               onChange={(e) => updateField(setUserEmail, 'userEmail', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="email"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
//             <TextField
//               fullWidth
//               label="Phone"
//               value={userPhone}
//               onChange={(e) => updateField(setUserPhone, 'userPhone', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="tel"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
//             <TextField
//               fullWidth
//               label="Company Name"
//               value={userCompanyName}
//               onChange={(e) => updateField(setUserCompanyName, 'userCompanyName', e.target.value)}
//               variant="outlined"
//               required
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
//             <TextField
//               fullWidth
//               label="Role in Society"
//               value={userRoleInSociety}
//               onChange={(e) => updateField(setUserRoleInSociety, 'userRoleInSociety', e.target.value)}
//               variant="outlined"
//               required
//             />
//           </motion.div>
//         </Box>

//         <Box sx={{ mb: 2 }}>
//           <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
//             <TextField
//               fullWidth
//               label="Password"
//               value={userPassword}
//               onChange={(e) => updateField(setUserPassword, 'userPassword', e.target.value)}
//               variant="outlined"
//               required
//               type={showPassword ? 'text' : 'password'}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </motion.div>
//         </Box>

//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Sign Up
//         </Button>
//       </form>
//     </Paper>
//   );
// }


//הקוד עם TOKEN
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUser } from '../../slices/UserSlices';
import { TextField, Button, Box, Typography, Paper, Alert, InputAdornment, IconButton, Fab } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [userPravitName, setUserPravitName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCompanyName, setUserCompanyName] = useState('');
  const [userRoleInSociety, setUserRoleInSociety] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  //const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // עדכון השדות ושמירת הנתונים ב-localStorage
  const updateField = (setter, fieldName, value) => {
    setter(value);
    const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};

    console.log('Current Data:', currentData);

    localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
  };

  // Handle form submission
  const handleForm = async (e) => {
    e.preventDefault();

    const userDetails = {
      name: userPravitName,
      lastName: userLastName,
      password: userPassword,
      email: userEmail,
      phone: userPhone,
      companyName: userCompanyName,
      roleInSociety: userRoleInSociety,
      isAdmin: false, // Set to false by default or based on your logic
    };

    console.log('Submitting User Details:', userDetails);

    try {
      const response = await dispatch(postUser(userDetails)); // Dispatch to Redux
      console.log('Response:', response);

      // Adjust the token extraction based on your Redux setup
      // Commonly, the token might be under response.payload.token
      if (postUser.fulfilled.match(response)) {
        const token = response.payload.token; // Adjust this line as per your response structure
        if (token) {
          localStorage.setItem('authToken', token); // Save token to localStorage
        }

        // Navigate to home on successful registration
        navigate('/Home');
      } else {
        // Handle errors based on response
        if (response.error?.status === 404) {
          setErrorMessage('The server could not find the requested resource.'); // 404 error
        } else {
          setErrorMessage('There was an error during the registration process.');
        }
      }
    } catch (error) {
      setErrorMessage('There was an error during the registration process.');
      console.error('Error during registration:', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        HiTechistim - Sign Up
      </Typography>

      {/* הצגת הודעת שגיאה */}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <form onSubmit={handleForm}>
        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <TextField
              fullWidth
              label="First Name"
              value={userPravitName}
              onChange={(e) => updateField(setUserPravitName, 'userPravitName', e.target.value)}
              variant="outlined"
              required
              autoComplete="given-name"
            />
          </motion.div>
        </Box>

        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <TextField
              fullWidth
              label="Last Name"
              value={userLastName}
              onChange={(e) => updateField(setUserLastName, 'userLastName', e.target.value)}
              variant="outlined"
              required
              autoComplete="family-name"
            />
          </motion.div>
        </Box>

        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <TextField
              fullWidth
              label="Email"
              value={userEmail}
              onChange={(e) => updateField(setUserEmail, 'userEmail', e.target.value)}
              variant="outlined"
              required
              autoComplete="email"
            />
          </motion.div>
        </Box>

        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <TextField
              fullWidth
              label="Phone"
              value={userPhone}
              onChange={(e) => updateField(setUserPhone, 'userPhone', e.target.value)}
              variant="outlined"
              required
              autoComplete="tel"
            />
          </motion.div>
        </Box>

        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <TextField
              fullWidth
              label="Company Name"
              value={userCompanyName}
              onChange={(e) => updateField(setUserCompanyName, 'userCompanyName', e.target.value)}
              variant="outlined"
              required
            />
          </motion.div>
        </Box>

        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <TextField
              fullWidth
              label="Role in Society"
              value={userRoleInSociety}
              onChange={(e) => updateField(setUserRoleInSociety, 'userRoleInSociety', e.target.value)}
              variant="outlined"
              required
            />
          </motion.div>
        </Box>

        <Box sx={{ mb: 2 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <TextField
              fullWidth
              label="Password"
              value={userPassword}
              onChange={(e) => updateField(setUserPassword, 'userPassword', e.target.value)}
              variant="outlined"
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </motion.div>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Paper>
  );
}



//הוספת סימן ✔ -שהצלחתי להתחבר למערכת
//הוסף ההנפשה אבל בעיה ברגע שכבר יש כזה משתמש הוא לא מצחיג הודעת שגיאה
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postUser } from '../../slices/UserSlices';
// import { TextField, Button, Box, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import Swal from 'sweetalert2'; // ייבוא SweetAlert2

// export default function SignUp() {
//   const [userPravitName, setUserPravitName] = useState('');
//   const [userLastName, setUserLastName] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userPhone, setUserPhone] = useState('');
//   const [userCompanyName, setUserCompanyName] = useState('');
//   const [userRoleInSociety, setUserRoleInSociety] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // state for password visibility
//   const dispatch = useDispatch();

//   // פעולה לטיפול בשינוי השדות ושמירת הנתונים ב-localStorage
//   const updateField = (setter, fieldName, value) => {
//     setter(value);
//     // שמירת השדה העדכני ב-localStorage
//     const currentData = JSON.parse(localStorage.getItem('userDetails')) || {};
//     localStorage.setItem('userDetails', JSON.stringify({ ...currentData, [fieldName]: value }));
//   };

//   // שליחה של פרטי המשתמש לשרת באמצעות Redux
//   const handleForm = (e) => {
//     e.preventDefault();

//     const userDetails = {
//       name: userPravitName,
//       lastName: userLastName,
//       password: userPassword,
//       email: userEmail,
//       phone: userPhone,
//       companyName: userCompanyName,
//       roleInSociety: userRoleInSociety,
//     };

//     // שליחה ל-redux
//     dispatch(postUser(userDetails));

//     // הצגת הודעת הצלחה
//     Swal.fire({
//       position: 'top-end',
//       icon: 'success',
//       title: 'Your work has been saved',
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword); // toggle visibility
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: 4, maxWidth: 500, margin: 'auto', mt: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         HiTechistim - Sign Up
//       </Typography>
//       <form onSubmit={handleForm}>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="First Name"
//               value={userPravitName}
//               onChange={(e) => updateField(setUserPravitName, 'userPravitName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="given-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <TextField
//               fullWidth
//               label="Last Name"
//               value={userLastName}
//               onChange={(e) => updateField(setUserLastName, 'userLastName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="family-name"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <TextField
//               fullWidth
//               label="Password"
//               value={userPassword}
//               onChange={(e) => updateField(setUserPassword, 'userPassword', e.target.value)}
//               variant="outlined"
//               required
//               type={showPassword ? "text" : "password"} // toggle between password and text input
//               autoComplete="new-password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <TextField
//               fullWidth
//               label="Email"
//               value={userEmail}
//               onChange={(e) => updateField(setUserEmail, 'userEmail', e.target.value)}
//               type="email"
//               variant="outlined"
//               required
//               autoComplete="email"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <TextField
//               fullWidth
//               label="Phone Number"
//               value={userPhone}
//               onChange={(e) => updateField(setUserPhone, 'userPhone', e.target.value)}
//               type="tel"
//               variant="outlined"
//               required
//               autoComplete="tel"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <TextField
//               fullWidth
//               label="Company Name"
//               value={userCompanyName}
//               onChange={(e) => updateField(setUserCompanyName, 'userCompanyName', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="organization"
//             />
//           </motion.div>
//         </Box>
//         <Box sx={{ mb: 2 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <TextField
//               fullWidth
//               label="Role in Society"
//               value={userRoleInSociety}
//               onChange={(e) => updateField(setUserRoleInSociety, 'userRoleInSociety', e.target.value)}
//               variant="outlined"
//               required
//               autoComplete="off"
//             />
//           </motion.div>
//         </Box>
//         <Button
//           fullWidth
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2 }}
//         >
//           Add & Send
//         </Button>
//       </form>
//     </Paper>
//   );
// }


//GPT-2


//שלי...
// import React, { useState } from 'react'
// export default function SignUp() {
//   const [userPravitName, setuserPravitName] = useState();
//   const [userLastName, setuserLastName] = useState();
//   const [userpassword, setuserPassword] = useState('');
//   const [useremail, setuserEmail] = useState('');
//   const [userPhon, setuserUserPhon] = useState('');
//   const [userCompanyName, setuserCompanyName] = useState('');
//   const [userroleInSociety, setuserroleInSociety] = useState('');

//   //משתנה -אובייקט שאותו נשלח לפונקציה הוספה בגאווה שמוגדר גם ברידקס
//   const [UserAllDetails, SetUserAllDetails] = useState({ name: 'userPravitName', lastName: 'userLastName', password: 'userpassword', email: 'useremail', phon: 'userPhon', companyName: 'userCompanyName', roleInSociety: 'userroleInSociety' });


//   //לבדוק האם עושים זאת בדרלך הזו או שאת כל הערכים שומרים ברידקס

//   function updateName(e) {
//     setuserPravitName(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, name: e.target.value })
//   }
//   function updateuserLastName(e) {
//     setuserLastName(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, lastNameastName: e.target.value })
//   }
//   function updateuserpassword(e) {
//     setuserPassword(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, password: e.target.value })
//   }
//   function updateuseremail(e) {
//     setuserEmail(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, email: e.target.value })
//   }

//   function updateuserPhon(e) {
//     setuserUserPhon(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, phon: e.target.value })
//   }
//   function updateuserCompanyName(e) {
//     setuserCompanyName(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, companyName: e.target.value })
//   }
//   function updateuserroleInSociety(e) {
//     setuserroleInSociety(e.target.value);
//     SetUserAllDetails({ ...UserAllDetails, roleInSociety: e.target.value })
//   }
//   function handelForm() {
//     e.preventDefault();
//   }

//   return (
//     <>
//       <form onSubmit={handelForm}>
//         <input type='text' name='PravitName' placeholder='enter your praivet name' value={userPravitName} onChange={updateName} required />
//         <input type='text' name='LastName' placeholder='enter your last Name' value={userLastName} onChange={updateuserLastName} required />
//         <input type='text' name='password' placeholder='enter yourpassword' value={userpassword} onChange={updateuserpassword} required />
//         <input type='email' name='email' placeholder='enter your email' value={useremail} onChange={updateuseremail} required />
//         <input type='phon' name='userPhon' placeholder='enter your userPhon' value={userPhon} onChange={updateuserPhon} required />
//         <input type='text' name='userCompanyName' placeholder='enter your userCompanyName' value={userCompanyName} onChange={updateuserCompanyName} required />
//         <input type='text' name='userroleInSociety' placeholder='enter your userroleInSociety' value={userroleInSociety} onChange={updateuserroleInSociety} required />
//         <button type='submit'>add-send</button>
//       </form>

//     </>
//   )
// }

