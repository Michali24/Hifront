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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
import { useNavigate } from 'react-router';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

export default function WhatsAppGroup() {
    const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    useEffect(() => {
        dispatch(getAllWhatsAppGroupList());
    }, [dispatch]);

    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <h2>WhatsApp Groups</h2>
            </div>

            <Grid container spacing={3}>
                {WhatsAppListGroup.map((whatsApp_Group) => (
                    <Grid item xs={12} sm={6} md={4} key={whatsApp_Group.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {whatsApp_Group.nameWhatsAppGroups}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {whatsApp_Group.discriptionWhatsAppGroups}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}
                                    fullWidth
                                >
                                    Sign Up
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {isAdmin && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate(`/AddWhatsAppGroup`)}
                    sx={{ marginTop: '20px' }}
                >
                    ➕ Add WhatsApp Group
                </Button>
            )}
        </>
    );
}
