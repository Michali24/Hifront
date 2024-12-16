// import React from 'react'
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
// import { useNavigate } from 'react-router';

// export default function WhatsAppGroup() {

//     const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     useEffect(() => {
//         dispatch(getAllWhatsAppGroupList());
//     }, [dispatch]);



//     return (
//         <>
//             <div>WhatsAppGroup</div>
//             <ul>
//                 {WhatsAppListGroup.map((whatsApp_Group) => (
//                     <li key={whatsApp_Group.id}>
//                         <p>{whatsApp_Group.nameWhatsAppGroups}</p>
//                         <p>{whatsApp_Group.discriptionWhatsAppGroups}</p>
//                         <button onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}>Sign up</button>
//                     </li>
//                 ))}
//             </ul>
//             {isAdmin && (
//                 <button onClick={() => navigate(`/AddWhatsAppGroup`)}>➕Add WhatsApp group</button>
//             )}
//         </>
//     )
// }


//עיצוב הקוד
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
// import { useNavigate } from 'react-router';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

// export default function WhatsAppGroup() {
//     const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     useEffect(() => {
//         dispatch(getAllWhatsAppGroupList());
//     }, [dispatch]);

//     return (
//         <>
//             <div style={{ marginBottom: '20px' }}>
//                 <h2>WhatsApp Groups</h2>
//             </div>

//             <Grid container spacing={3}>
//                 {WhatsAppListGroup.map((whatsApp_Group) => (
//                     <Grid item xs={12} sm={6} md={4} key={whatsApp_Group.id}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {whatsApp_Group.nameWhatsAppGroups}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary" paragraph>
//                                     {whatsApp_Group.discriptionWhatsAppGroups}
//                                 </Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}
//                                     fullWidth
//                                 >
//                                     Sign Up
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>

//             {isAdmin && (
//                 <Button
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => navigate(`/AddWhatsAppGroup`)}
//                     sx={{ marginTop: '20px' }}
//                 >
//                     ➕ Add WhatsApp Group
//                 </Button>
//             )}
//         </>
//     );
// }


//הוספת תמונת רקע
// src/components/WhatsAppGroup/WhatsAppGroup.js

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
// import { useNavigate } from 'react-router';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

// export default function WhatsAppGroup() {
//     const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     useEffect(() => {
//         dispatch(getAllWhatsAppGroupList());
//     }, [dispatch]);

//     return (
//         <div
//             style={{
//                 minHeight: '100vh',
//                 backgroundImage: `url(/images/h2.jpg)`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 padding: '20px',
//                 position: 'relative',
//             }}
//         >
//             {/* שכבת כיסוי לשיפור קריאות הטקסט */}
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(133, 113, 113, 0.5)', // צבע ושקיפות לשכבת הכיסוי
//                     zIndex: 1,
//                 }}
//             ></div>

//             {/* תוכן הדף */}
//             <div style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h2>WhatsApp Groups</h2>
//                 </div>

//                 <Grid container spacing={3}>
//                     {WhatsAppListGroup.map((whatsApp_Group) => (
//                         <Grid item xs={12} sm={6} md={4} key={whatsApp_Group.id}>
//                             <Card sx={{ maxWidth: 345 }}>
//                                 <CardContent>
//                                     <Typography variant="h6" component="div">
//                                         {whatsApp_Group.nameWhatsAppGroups}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary" paragraph>
//                                         {whatsApp_Group.discriptionWhatsAppGroups}
//                                     </Typography>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}
//                                         fullWidth
//                                     >
//                                         Sign Up
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>

//                 {isAdmin && (
//                     <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => navigate(`/AddWhatsAppGroup`)}
//                         sx={{ marginTop: '20px' }}
//                     >
//                         ➕ Add WhatsApp Group
//                     </Button>
//                 )}
//             </div>
//         </div>
//     );
// }

//קוד ינון
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
// import { useNavigate } from 'react-router';
// import './WhatsAppGroup.css';

// export default function WhatsAppGroup() {
//     const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isAdmin = localStorage.getItem('isAdmin') === 'true';

//     useEffect(() => {
//         dispatch(getAllWhatsAppGroupList());
//     }, [dispatch]);

//     return (
//         <div
//             style={{
//                 minHeight: '100vh',
//                 backgroundImage: `url(/images/x24.jpg)`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 padding: '20px',
//                 position: 'relative',
//             }}
//         >
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     // backgroundColor: 'rgba(133, 113, 113, 0.5)',
//                     zIndex: 1,
//                 }}
//             ></div>

//             <div style={{ position: 'relative', zIndex: 2 }}>
//                 <h2 className="page-heading">WhatsApp Groups</h2>
//                 <div className="grid-container">
//                     {WhatsAppListGroup.map((whatsApp_Group) => (
//                         <div className="card" key={whatsApp_Group.id}>
//                             <div className="card-content">
//                                 <div className="card-title">{whatsApp_Group.nameWhatsAppGroups}</div>
//                                 <div className="card-description">{whatsApp_Group.discriptionWhatsAppGroups}</div>
//                                 <button
//                                     className="card-button"
//                                     onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}
//                                 >
//                                     Sign Up
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {isAdmin && (
//                     <button
//                         className="add-group-button"
//                         onClick={() => navigate(`/AddWhatsAppGroup`)}
//                     >
//                         ➕ Add WhatsApp Group
//                     </button>
//                 )}
//             </div>

//         </div>
//     );
// }

//עיצוב נוסף לעיצוב של ינון
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
import { useNavigate } from 'react-router';
import { FaWhatsapp } from 'react-icons/fa'; // ייבוא האייקון
import './WhatsAppGroup.css';

export default function WhatsAppGroup() {
    const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    useEffect(() => {
        dispatch(getAllWhatsAppGroupList());
    }, [dispatch]);

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: `url(/images/x24.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'rgba(133, 113, 113, 0.5)',
                    zIndex: 1,
                }}
            ></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 className="page-heading">WhatsApp Groups</h2>
                <div className="grid-container">
                    {WhatsAppListGroup.map((whatsApp_Group) => (
                        <div className="card" key={whatsApp_Group.id}>
                            {/* הוספת האייקון */}
                            <FaWhatsapp className="whatsapp-icon" />

                            <div className="card-content">
                                <div className="card-title">{whatsApp_Group.nameWhatsAppGroups}</div>
                                <div className="card-description">{whatsApp_Group.discriptionWhatsAppGroups}</div>
                                <button
                                    className="card-button"
                                    onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {isAdmin && (
                    <button
                        className="add-group-button"
                        onClick={() => navigate(`/AddWhatsAppGroup`)}
                    >
                        ➕ Add WhatsApp Group
                    </button>
                )}
            </div>

        </div>
    );
}
