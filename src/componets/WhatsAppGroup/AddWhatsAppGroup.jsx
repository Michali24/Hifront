// import React, { useState } from 'react'
// import { useDispatch} from 'react-redux'
// import { useNavigate } from 'react-router';
// import{postWhatsAppGroup}from '../../slices/WhatsAppGroupSlice';


// export default function AddWhatsAppGroup() {

//     const dispatch=useDispatch();
//     const navigate=useNavigate();

//     const [newWthasAppGroup, setNewWthasAppGroup] = useState({
//         nameWhatsAppGroups: '',
//         discriptionWhatsAppGroups: '',
//         url_joiningWhatsAppGroups: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewWthasAppGroup((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//     function handleSubmit(e) {
//         e.preventDefault();
//         dispatch(postWhatsAppGroup(newWthasAppGroup));
//     }

//     return (
//         <>
//             <div>AddWhatsAppGroup</div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="nameWhatsAppGroups"
//                     placeholder="Enter the name WhatsAppGroups"
//                     value={newWthasAppGroup.nameWhatsAppGroups}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="discriptionWhatsAppGroups"
//                     placeholder="Enter the discriptionWhatsAppGroups"
//                     value={newWthasAppGroup.discriptionWhatsAppGroups}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="url_joiningWhatsAppGroups"
//                     placeholder="Enter the url_joiningWhatsAppGroups"
//                     value={newWthasAppGroup.url_joiningWhatsAppGroups}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button type="submit">Submit a New WhatsApp Group</button>
//             </form>

//             {/* <button onClick={()=>navigate('/WhatsAppGroup')}>Back to WhatsAppGroup</button> */}

//         </>
//     )
// }


//14-12-24
//עיצוב הטופס לMUI
//האיענפוטים מתנקים מהר מידי
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { postWhatsAppGroup } from '../../slices/WhatsAppGroupSlice';
// import { TextField, Button, Snackbar, Alert } from '@mui/material';

// export default function AddWhatsAppGroup() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [newWhatsAppGroup, setNewWhatsAppGroup] = useState({
//         nameWhatsAppGroups: '',
//         descriptionWhatsAppGroups: '',
//         urlJoiningWhatsAppGroups: '',
//     });

//     const [openSnackbar, setOpenSnackbar] = useState(false);
//     const [snackbarMessage, setSnackbarMessage] = useState('');
//     const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success or error

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewWhatsAppGroup((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await dispatch(postWhatsAppGroup(newWhatsAppGroup));
//             setSnackbarMessage('הקבוצה נוספה בהצלחה!');
//             setSnackbarSeverity('success');
//             setNewWhatsAppGroup({
//                 nameWhatsAppGroups: '',
//                 descriptionWhatsAppGroups: '',
//                 urlJoiningWhatsAppGroups: '',
//             });
//         } catch (error) {
//             setSnackbarMessage('לא הצלחנו להוסיף את הקבוצה, נסה שוב.');
//             setSnackbarSeverity('error');
//         } finally {
//             setOpenSnackbar(true);
//         }
//     };

//     const handleCloseSnackbar = () => {
//         setOpenSnackbar(false);
//     };

//     return (
//         <>
//             <div>הוסף קבוצה לווטסאפ</div>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     label="שם הקבוצה"
//                     variant="outlined"
//                     name="nameWhatsAppGroups"
//                     placeholder="הכנס שם קבוצת ווטסאפ"
//                     value={newWhatsAppGroup.nameWhatsAppGroups}
//                     onChange={handleChange}
//                     fullWidth
//                     required
//                     margin="normal"
//                 />
//                 <TextField
//                     label="תיאור הקבוצה"
//                     variant="outlined"
//                     name="descriptionWhatsAppGroups"
//                     placeholder="הכנס תיאור לקבוצת ווטסאפ"
//                     value={newWhatsAppGroup.descriptionWhatsAppGroups}
//                     onChange={handleChange}
//                     fullWidth
//                     required
//                     margin="normal"
//                 />
//                 <TextField
//                     label="קישור הצטרפות"
//                     variant="outlined"
//                     name="urlJoiningWhatsAppGroups"
//                     placeholder="הכנס קישור הצטרפות"
//                     value={newWhatsAppGroup.urlJoiningWhatsAppGroups}
//                     onChange={handleChange}
//                     fullWidth
//                     required
//                     margin="normal"
//                 />
//                 <Button variant="contained" color="primary" type="submit" fullWidth>
//                     שלח קבוצה חדשה
//                 </Button>
//             </form>

//             <Snackbar
//                 open={openSnackbar}
//                 autoHideDuration={6000}
//                 onClose={handleCloseSnackbar}
//             >
//                 <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
//                     {snackbarMessage}
//                 </Alert>
//             </Snackbar>
//             <button onClick={() => navigate('/WhatsAppGroup')}>Back to WhatsAppGroup</button>

//         </>
//     );
// }



//עיצוב נוסף
//ההודעה בתחתי העמוד
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { postWhatsAppGroup } from '../../slices/WhatsAppGroupSlice';
// import { TextField, Button, Snackbar, Alert } from '@mui/material';

// export default function AddWhatsAppGroup() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [newWhatsAppGroup, setNewWhatsAppGroup] = useState({
//     nameWhatsAppGroups: '',
//     descriptionWhatsAppGroups: '',
//     urlJoiningWhatsAppGroups: '',
//   });

//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success or error

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewWhatsAppGroup((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(postWhatsAppGroup(newWhatsAppGroup));
//       setSnackbarMessage('הקבוצה נוספה בהצלחה!');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);

//       // אחרי 3 שניות, ננקה את האינפוטים
//       setTimeout(() => {
//         setNewWhatsAppGroup({
//           nameWhatsAppGroups: '',
//           descriptionWhatsAppGroups: '',
//           urlJoiningWhatsAppGroups: '',
//         });
//       }, 3000); // הזמן שבמהלכו יישארו האינפוטים מלאים (3 שניות)
//     } catch (error) {
//       setSnackbarMessage('לא הצלחנו להוסיף את הקבוצה, נסה שוב.');
//       setSnackbarSeverity('error');
//       setOpenSnackbar(true);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <>
//       <div>הוסף קבוצה לווטסאפ</div>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="שם הקבוצה"
//           variant="outlined"
//           name="nameWhatsAppGroups"
//           placeholder="הכנס שם קבוצת ווטסאפ"
//           value={newWhatsAppGroup.nameWhatsAppGroups}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="תיאור הקבוצה"
//           variant="outlined"
//           name="descriptionWhatsAppGroups"
//           placeholder="הכנס תיאור לקבוצת ווטסאפ"
//           value={newWhatsAppGroup.descriptionWhatsAppGroups}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="קישור הצטרפות"
//           variant="outlined"
//           name="urlJoiningWhatsAppGroups"
//           placeholder="הכנס קישור הצטרפות"
//           value={newWhatsAppGroup.urlJoiningWhatsAppGroups}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <Button variant="contained" color="primary" type="submit" fullWidth>
//           שלח קבוצה חדשה
//         </Button>
//       </form>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }


//עיצוב נוסף
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { postWhatsAppGroup } from '../../slices/WhatsAppGroupSlice';
// import { TextField, Button, Alert } from '@mui/material';

// export default function AddWhatsAppGroup() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [newWhatsAppGroup, setNewWhatsAppGroup] = useState({
//     nameWhatsAppGroups: '',
//     descriptionWhatsAppGroups: '',
//     urlJoiningWhatsAppGroups: '',
//   });

//   const [alertMessage, setAlertMessage] = useState('');
//   const [alertSeverity, setAlertSeverity] = useState('success'); // success or error

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewWhatsAppGroup((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(postWhatsAppGroup(newWhatsAppGroup));
//       setAlertMessage('הקבוצה נוספה בהצלחה!');
//       setAlertSeverity('success');

//       // אחרי 3 שניות, ננקה את האינפוטים
//       setTimeout(() => {
//         setNewWhatsAppGroup({
//           nameWhatsAppGroups: '',
//           descriptionWhatsAppGroups: '',
//           urlJoiningWhatsAppGroups: '',
//         });
//       }, 3000); // הזמן שבמהלכו יישארו האינפוטים מלאים (3 שניות)
//     } catch (error) {
//       setAlertMessage('לא הצלחנו להוסיף את הקבוצה, נסה שוב.');
//       setAlertSeverity('error');
//     }
//   };

//   return (
//     <>
//       {/* הצגת הודעת הצלחה או כישלון בראש העמוד */}
//       {alertMessage && (
//         <Alert severity={alertSeverity} style={{ marginBottom: '20px' }}>
//           {alertMessage}
//         </Alert>
//       )}

//       <div>הוסף קבוצה לווטסאפ</div>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="שם הקבוצה"
//           variant="outlined"
//           name="nameWhatsAppGroups"
//           placeholder="הכנס שם קבוצת ווטסאפ"
//           value={newWhatsAppGroup.nameWhatsAppGroups}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="תיאור הקבוצה"
//           variant="outlined"
//           name="descriptionWhatsAppGroups"
//           placeholder="הכנס תיאור לקבוצת ווטסאפ"
//           value={newWhatsAppGroup.descriptionWhatsAppGroups}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="קישור הצטרפות"
//           variant="outlined"
//           name="urlJoiningWhatsAppGroups"
//           placeholder="הכנס קישור הצטרפות"
//           value={newWhatsAppGroup.urlJoiningWhatsAppGroups}
//           onChange={handleChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <Button variant="contained" color="primary" type="submit" fullWidth>
//           שלח קבוצה חדשה
//         </Button>
//       </form>
//     </>
//   );
// }


//עיצוב עם תמונת רקע
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { postWhatsAppGroup } from '../../slices/WhatsAppGroupSlice';
import { TextField, Button, Alert } from '@mui/material';
import './AddWhatsAppGroup.css';  // הוסף את קובץ ה-CSS שלך כאן

export default function AddWhatsAppGroup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newWhatsAppGroup, setNewWhatsAppGroup] = useState({
    nameWhatsAppGroups: '',
    descriptionWhatsAppGroups: '',
    urlJoiningWhatsAppGroups: '',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // success or error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWhatsAppGroup((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postWhatsAppGroup(newWhatsAppGroup));
      setAlertMessage('הקבוצה נוספה בהצלחה!');
      setAlertSeverity('success');

      // אחרי 3 שניות, ננקה את האינפוטים
      setTimeout(() => {
        setNewWhatsAppGroup({
          nameWhatsAppGroups: '',
          descriptionWhatsAppGroups: '',
          urlJoiningWhatsAppGroups: '',
        });
      }, 3000); // הזמן שבמהלכו יישארו האינפוטים מלאים (3 שניות)
    } catch (error) {
      setAlertMessage('לא הצלחנו להוסיף את הקבוצה, נסה שוב.');
      setAlertSeverity('error');
    }
  };

  return (
    <div className="page-container">
      {/* הצגת הודעת הצלחה או כישלון בראש העמוד */}
      {alertMessage && (
        <Alert severity={alertSeverity} style={{ marginBottom: '20px' }}>
          {alertMessage}
        </Alert>
      )}

      <div>הוסף קבוצה לווטסאפ</div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="שם הקבוצה"
          variant="outlined"
          name="nameWhatsAppGroups"
          placeholder="הכנס שם קבוצת ווטסאפ"
          value={newWhatsAppGroup.nameWhatsAppGroups}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="תיאור הקבוצה"
          variant="outlined"
          name="descriptionWhatsAppGroups"
          placeholder="הכנס תיאור לקבוצת ווטסאפ"
          value={newWhatsAppGroup.descriptionWhatsAppGroups}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="קישור הצטרפות"
          variant="outlined"
          name="urlJoiningWhatsAppGroups"
          placeholder="הכנס קישור הצטרפות"
          value={newWhatsAppGroup.urlJoiningWhatsAppGroups}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          שלח קבוצה חדשה
        </Button>
      </form>
    </div>
  );
}
