// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { LogInUser } from '../../slices/UserSlices';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// export default function Login() {

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const response = useSelector((state.user.user));

// //לפי יעל פוקס
//   function handelForm() {
//     const Login = {
//       name,
//       lastName:null,
//       password,
//       phone:null,
//       companyName:null,
//       roleInSociety:null,
//     }
//     dispatch(LogInUser(Login));
//   }

//   function checkingResponse(response) {
//     //the name and password == null
//     if (response == 400) {

//     }
//     // the name or password are not correct
//     else if (response == 401) {

//     }
//     //the name ad password is ok
//     else {
//       setMessage('הכניסה הצליחה');

//     }

//   }

//   // useEffect(() => {
//   //   dispatch(LogInUser());
//   //   console.log('log in ');
//   // }, [dispatch]);




//   return (
//     <>
//       <div>Login</div>
//       <form onSubmit={handelForm}>
//         <input
//           type="text"
//           name="PravitName"
//           placeholder="Enter your private name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">LogIn</button>
//       </form>
//     </>
//   )

// };


//logIn-04012-24
//1
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';



// export default function Login() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   function handleChange(e) {

//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async () => {
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         console.log('_Login seucseess', response.payload);
//         dispatch(setCurrent(response.payload));
//         navigate('/Home');
//       }
//       else if (LogInUser.rejected.match(response)) {
//         console.log('_Error response', response.error);
//         const errorMessage = response.error.message || response.error;
//       }

//       if (response.error.status === 400) {
//         t('חסר שם');
//       }
//       else if (response.error.status === 401) {
//         setErrorMessage('סיסמא שגיוה');
//       }
//       else {
//         setErrorMessage(errorMessage || 'שגיאה בהתחברות');
//       }
//     }
//     catch (error) {
//       setErrorMessage('שגיאה כללית בהתחברות');
//       console.error('_Error during loginL', error);
//     }
//   }

//   return (
//     <>
//       <div>Login</div>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={(e)=>{
//           e.preventDefault();
//           handleLogin();
//       }}>
//         <input type='text' name='name' placeholder='enter yor name' value={formData.name} onChange={handleChange}></input>
//         <input type='text' name='password' placeholder='enter yor password' value={formData.password} onChange={handleChange}></input>
//         <button type='submit'>LogIn</button>
//       </form>
//     </>
//   )
// }

//2-<-04-12-24--עובדדדדדדדדד
//ללא עיצוב MUI
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';

// export default function Login() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   // טיפול בשינוי שדות
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   // טיפול בהתחברות
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       //200
//       if (LogInUser.fulfilled.match(response)) {
//         console.log('Login success', response.payload);
//         dispatch(setCurrent(response.payload));
//         navigate('/Home');
//       }
//       else if (LogInUser.rejected.match(response)) {
//         console.log('Error response', response.error);
//         // אם יש שגיאה, נעדכן את הודעת השגיאה
//         if (response.error.status === 400) {
//           setErrorMessage('חסר שם או סיסמא');
//           setFormData('');
//         }
//         else if (response.error.status === 401) {
//           setErrorMessage('פרטי התחברות שגויים');
//         }
//         else {
//           setErrorMessage('פרטי התחברות שגויים');
//         }
//       }
//     }
//     catch (error) {
//       setErrorMessage('שגיאה כללית בהתחברות');
//       console.error('Error during login', error);
//     }
//   }

//   return (
//     <>
//       <div>---Login---</div>
//       creat one by now:
//       <button onClick={() => navigate('/SignUp')}>Sing Up</button>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={handleLogin}>
//         <input
//           type='text'
//           name='name'
//           placeholder='Enter your name'
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type='password'
//           name='password'
//           placeholder='Enter your password'
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type='submit'>Log In</button>
//       </form>
//     </>
//   );
// }


//הקוד עם נסיון לעיצוב MUI בסיסי
//עיצוב נחמדיישן
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert } from '@mui/material'; // מייבאים את רכיבי MUI

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         dispatch(setCurrent(response.payload));
//         navigate('/Home');
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error.status === 400) {
//           setErrorMessage('חסר שם או סיסמא');
//         } else if (response.error.status === 401) {
//           setErrorMessage('פרטי התחברות שגויים');
//         } else {
//           setErrorMessage('פרטי התחברות שגויים');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('שגיאה כללית בהתחברות');
//     }
//   }

//   return (
//     <Container component="main" maxWidth="xs">
//       <Typography variant="h5" align="center" gutterBottom>כניסה</Typography>

//       {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//       <form onSubmit={handleLogin}>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           name="name"
//           label="שם משתמש"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           name="password"
//           type="password"
//           label="סיסמא"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <Button 
//           type="submit" 
//           variant="contained" 
//           fullWidth 
//           color="primary" 
//           style={{ marginTop: 16 }}
//         >
//           התחבר
//         </Button>
//       </form>

//       <div style={{ marginTop: 16, textAlign: 'center' }}>
//         <Typography variant="body2">אין לך חשבון? </Typography>
//         <Button color="primary" onClick={() => navigate('/SignUp')}>
//           הרשמה
//         </Button>
//       </div>
//     </Container>
//   );
// }


//עיצוב נוסף-מהמםםם!!!!
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';


// export default function Login() {
//   const dispatch = useDispatch();  // הגדרת dispatch לשליחת פעולות ל-redux
//   const navigate = useNavigate();  // הגדרת navigate עבור הניווט בין הדפים

//   const [errorMessage, setErrorMessage] = useState('');  // שדה לשמירת הודעת שגיאה
//   const [formData, setFormData] = useState({ name: '', password: '' });  // שדה לשמירת נתוני המשתמש

//   // פונקציה לטיפול בשינוי של שדות הקלט
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   // פונקציה לטיפול בהתחברות
//   const handleLogin = async (e) => {
//     e.preventDefault();  // מונע את השליחה האוטומטית של הטופס
//     try {
//       const response = await dispatch(LogInUser(formData));  // שליחת נתוני המשתמש לשרת

//       if (LogInUser.fulfilled.match(response)) {  // אם ההתחברות הצליחה
//         dispatch(setCurrent(response.payload));  // עדכון המשתמש ב-redux
//         navigate('/Home');  // מעבר לדף הבית
//       } else if (LogInUser.rejected.match(response)) {  // אם ההתחברות נכשלה
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           {/* <Button color="primary" onClick={() => navigate('/SignUp')}> Create one now-Sign Up</Button> */}
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>
//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>} {/* מציג הודעת שגיאה אם יש */}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }

//שימוש בTOKEN שישמור לי על המתשתמש שרשום במערכת
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const dispatch = useDispatch();  // הגדרת dispatch לשליחת פעולות ל-redux
//   const navigate = useNavigate();  // הגדרת navigate עבור הניווט בין הדפים

//   const [errorMessage, setErrorMessage] = useState('');  // שדה לשמירת הודעת שגיאה
//   const [formData, setFormData] = useState({ name: '', password: '' });  // שדה לשמירת נתוני המשתמש

//   // פונקציה לטיפול בשינוי של שדות הקלט
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   // פונקציה לטיפול בהתחברות
//   const handleLogin = async (e) => {
//     e.preventDefault();  // מונע את השליחה האוטומטית של הטופס
//     try {
//       const response = await dispatch(LogInUser(formData));  // שליחת נתוני המשתמש לשרת

//       if (LogInUser.fulfilled.match(response)) {  // אם ההתחברות הצליחה
//         dispatch(setCurrent(response.payload));  // עדכון המשתמש ב-redux
//         const { token } = response.payload; // הנחה שה-API מחזיר את ה-token במענה

//         // שמירת ה-token ב-LocalStorage
//         localStorage.setItem('authToken', token); // שמירה ב-LocalStorage

//         navigate('/Home');  // מעבר לדף הבית
//       } else if (LogInUser.rejected.match(response)) {  // אם ההתחברות נכשלה
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>} {/* מציג הודעת שגיאה אם יש */}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }


//עדכון הקומפוננטה עם -location state+TOKE
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();  // קבלת ה-`state` מהניווט הקודם

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         dispatch(setCurrent(response.payload));
//         const { token } = response.payload;

//         // שמור את ה-token ב-LocalStorage
//         localStorage.setItem('authToken', token);

//         // קבל את ה-`state` ששלחנו מ-CategoryArticle
//         const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home';  // אם הגעת מהוספת מאמר, נווט לשם
//         navigate(from);  // ניווט למקום המתאים
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }


//הקוד בתוספת בדיקה האם הלקוח שנכנס הוא מנהל ושמירה בTOKEN 
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();  // קבלת ה-state מהניווט הקודם

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         dispatch(setCurrent(response.payload));
//         const { token, name } = response.payload;

//         // שמור את ה-token ב-LocalStorage
//         localStorage.setItem('authToken', token);

//         // אם המשתמש הוא מנהל, שמור את המידע הזה ב-localStorage
//         if (name === 'MANAGER') {
//           localStorage.setItem('isAdmin', 'true');
//         } else {
//           localStorage.removeItem('isAdmin');
//         }

//         // קבל את ה-state ששלחנו מ-CategoryArticle
//         const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home';  // אם הגעת מהוספת מאמר, נווט לשם
//         navigate(from);  // ניווט למקום המתאים
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }

//נסיון לשפר אתץ הקוד שלפניי
//לא טוב כי אם מנהל נכנס ואח"כ לקוח נשארים האופציות של הנמהל
//מעולה!!!!!!!
//הסתדר!!
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();  // קבלת ה-state מהניווט הקודם

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         dispatch(setCurrent(response.payload));
//         const { token, name } = response.payload;

//         // שמור את ה-token ב-LocalStorage
//         localStorage.setItem('authToken', token);

//         // אם המשתמש הוא מנהל, שמור את המידע הזה ב-localStorage
//         if (name === 'MANAGER') {
//           localStorage.setItem('isAdmin', 'true');
//         } else {
//           localStorage.removeItem('isAdmin');
//         }

//         // קבל את ה-state ששלחנו מ-CategoryArticle
//         const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home';  // אם הגעת מהוספת מאמר, נווט לשם
//         navigate(from);  // ניווט למקום המתאים
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }


//הוספה של ערכית משתנה אם נמנהל נכנס בשביל הNAVBAR
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogInUser, setCurrent } from '../../slices/UserSlices';
import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();  // קבלת ה-state מהניווט הקודם

  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', password: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(LogInUser(formData));

      if (LogInUser.fulfilled.match(response)) {
        dispatch(setCurrent(response.payload));
        const { token, name } = response.payload;

        // שמור את ה-token ב-LocalStorage
        localStorage.setItem('authToken', token);

        // אם המשתמש הוא מנהל, שמור את המידע הזה ב-localStorage
        if (name === 'MANAGER') {
          localStorage.setItem('isAdmin', 'true');
        } else {
          localStorage.removeItem('isAdmin');
        }

        // קבל את ה-state ששלחנו מ-CategoryArticle
        const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home';  // אם הגעת מהוספת מאמר, נווט לשם
        navigate(from);  // ניווט למקום המתאים
      } else if (LogInUser.rejected.match(response)) {
        if (response.error.status === 400) {
          setErrorMessage('Missing username or password');
        } else if (response.error.status === 401) {
          setErrorMessage('Incorrect login credentials');
        } else {
          setErrorMessage('Incorrect login credentials');
        }
      }
    } catch (error) {
      setErrorMessage('General login error');
      console.error('Error during login', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Log In
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Typography variant="body2">Don't have an account? </Typography>
          <Link to="/SignUp" style={{ textDecoration: 'none' }}>
            <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
          </Link>
        </Box>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            label="Username"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 16 }}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
}

//14-12-24
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();  // קבלת ה-state מהניווט הקודם

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   const admin=useSelector((state)=>state.user.currentUser);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         dispatch(setCurrent(response.payload));
//         const { token, name } = response.payload;

//         // שמור את ה-token ב-LocalStorage
//         localStorage.setItem('authToken', token);

//         // אם המשתמש הוא מנהל, שמור את המידע הזה ב-localStorage
//         if (admin.isAdmin) {
//           localStorage.setItem('isAdmin', 'true');
//         } else {
//           localStorage.removeItem('isAdmin');
//         }

//         // קבל את ה-state ששלחנו מ-CategoryArticle
//         const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home';  // אם הגעת מהוספת מאמר, נווט לשם
//         navigate(from);  // ניווט למקום המתאים
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }


//קוד נוסף בגלל שרק אחרי רפרוש הדף נוסך האופציה הנוספת בnavbar
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({ name: '', password: '' });

//   const currentUser = useSelector(state => state.user);  // מקבל את המשתמש הנוכחי מ-Redux

//   useEffect(() => {
//     // אם כבר יש Token ב-localStorage, עדכן את הסטייט ב-Redux
//     const token = localStorage.getItem('authToken');
//     if (token && !currentUser.token) {  // אם יש Token אבל הוא לא ב-Redux
//       dispatch(setCurrent({ token }));  // עדכון הסטייט ב-Redux
//     }
//   }, [dispatch, currentUser.token]);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await dispatch(LogInUser(formData));

//       if (LogInUser.fulfilled.match(response)) {
//         const { token, name } = response.payload;

//         // שמור את ה-token ב-LocalStorage
//         localStorage.setItem('authToken', token);

//         // אם המשתמש הוא מנהל, שמור את המידע הזה ב-localStorage
//         if (name === 'MANAGER') {
//           localStorage.setItem('isAdmin', 'true');
//         } else {
//           localStorage.removeItem('isAdmin');
//         }

//         // עדכן את Redux עם פרטי המשתמש
//         dispatch(setCurrent(response.payload));

//         // קבל את ה-state ששלחנו מ-CategoryArticle
//         const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home';  // אם הגעת מהוספת מאמר, נווט לשם
//         navigate(from);  // ניווט למקום המתאים
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('Incorrect login credentials');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('General login error');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Log In
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none' }}>
//             <Typography variant="body2" color="primary">Create one now - Sign Up</Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

//         <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="name"
//             label="Username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             name="password"
//             label="Password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             style={{ marginTop: 16 }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }
