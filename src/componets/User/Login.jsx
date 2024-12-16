// //הוספה של ערכית משתנה אם נמנהל נכנס בשביל הNAVBAR
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

//ולידציות
//נסיון
//16-12-24
//טוב
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { LogInUser, setCurrent } from '../../slices/UserSlices';
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Alert,
//   Box,
// } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// export default function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation(); // קבלת ה-state מהניווט הקודם

//   const [errorMessage, setErrorMessage] = useState('');

//   // הגדרת סכמת האימות עם Yup
//   const validationSchema = Yup.object().shape({
//     name: Yup.string()
//       .required('שם משתמש הוא חובה')
//       .min(3, 'שם משתמש חייב להכיל לפחות 3 תווים'),
//     password: Yup.string()
//       .required('סיסמא היא חובה')
//       .min(6, 'סיסמא חייבת להכיל לפחות 6 תווים'),
//   });

//   // שימוש ב-react-hook-form עם yupResolver
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: 'onTouched',
//   });

//   const handleLogin = async (data) => {
//     try {
//       const response = await dispatch(LogInUser(data));

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
//         const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home'; // אם הגעת מהוספת מאמר, נווט לשם
//         navigate(from); // ניווט למקום המתאים
//       } else if (LogInUser.rejected.match(response)) {
//         if (response.error?.status === 400) {
//           setErrorMessage('Missing username or password');
//         } else if (response.error?.status === 401) {
//           setErrorMessage('Incorrect login credentials');
//         } else {
//           setErrorMessage('There was an error during the registration process.');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('There was an error during the registration process.');
//       console.error('Error during login', error);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography variant="h5" align="center" gutterBottom>
//           HiTechistim - Log In
//         </Typography>

//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginTop: 2,
//           }}
//         >
//           <Typography variant="body2">Don't have an account? </Typography>
//           <Link to="/SignUp" style={{ textDecoration: 'none', marginLeft: '5px' }}>
//             <Typography variant="body2" color="primary">
//               Create one now - Sign Up
//             </Typography>
//           </Link>
//         </Box>

//         {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}

//         <form onSubmit={handleSubmit(handleLogin)} style={{ width: '100%', marginTop: 16 }}>
//           {/* שדה שם משתמש */}
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             label="Username"
//             {...register('name')}
//             error={!!errors.name}
//             helperText={errors.name?.message}
//             autoComplete="username"
//           />

//           {/* שדה סיסמא */}
//           <TextField
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             label="Password"
//             type="password"
//             {...register('password')}
//             error={!!errors.password}
//             helperText={errors.password?.message}
//             autoComplete="current-password"
//           />

//           {/* כפתור התחברות */}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             disabled={isSubmitting}
//             sx={{ mt: 3, mb: 2 }}
//           >
//             {isSubmitting ? 'Logging In...' : 'Log In'}
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }


//להוסיף את האפשרות שהלקוח יראה את הקסיסמא שהוא שולח
//מעולה!!!
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogInUser, setCurrent } from '../../slices/UserSlices';
import {
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // קבלת ה-state מהניווט הקודם

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // ניהול מצב הצגת הסיסמא

  // הגדרת סכמת האימות עם Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('שם משתמש הוא חובה')
      .min(3, 'שם משתמש חייב להכיל לפחות 3 תווים'),
    password: Yup.string()
      .required('סיסמא היא חובה')
      .min(6, 'סיסמא חייבת להכיל לפחות 6 תווים'),
  });

  // שימוש ב-react-hook-form עם yupResolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const handleLogin = async (data) => {
    try {
      const response = await dispatch(LogInUser(data));

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
        const from = location.state?.fromAddArticle ? '/RequestToAddAnArticle' : '/Home'; // אם הגעת מהוספת מאמר, נווט לשם
        navigate(from); // ניווט למקום המתאים
      } else if (LogInUser.rejected.match(response)) {
        if (response.error?.status === 400) {
          setErrorMessage('Missing username or password');
        } else if (response.error?.status === 401) {
          setErrorMessage('Incorrect login credentials');
        } else {
          setErrorMessage('There was an error during the registration process.');
        }
      }
    } catch (error) {
      setErrorMessage('There was an error during the registration process.');
      console.error('Error during login', error);
    }
  };

  // פונקציה להחלפת מצב הצגת הסיסמא
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // פונקציה למניעת שינוי הפוקוס בעת לחיצה על האייקון
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: 100 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          HiTechistim - Log In
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
          }}
        >
          <Typography variant="body2">Don't have an account? </Typography>
          <Link to="/SignUp" style={{ textDecoration: 'none', marginLeft: '5px' }}>
            <Typography variant="body2" color="primary">
              Create one now - Sign Up
            </Typography>
          </Link>
        </Box>

        {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}

        <form onSubmit={handleSubmit(handleLogin)} style={{ width: '100%', marginTop: 16 }}>
          {/* שדה שם משתמש */}
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            label="Username"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            autoComplete="username"
          />

          {/* שדה סיסמא עם אופציה להציג/להסתיר */}
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            label="Password"
            type={showPassword ? 'text' : 'password'} // החלפת סוג השדה בהתאם למצב
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* כפתור התחברות */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ mt: 3, mb: 2 }}
          >
            {isSubmitting ? 'Logging In...' : 'Log In'}
          </Button>
        </form>
      </Box>
    </Container>
  );
}

