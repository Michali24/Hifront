//GPT
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdlGroupWhatsApp } from '../../slices/WhatsAppGroupSlice';
import './SignUpForTheWhatsAppGroup.css';

export default function SignUpForTheWhatsAppGroup() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const whatsAppGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroup);

    useEffect(() => {
        dispatch(getByIdlGroupWhatsApp(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (whatsAppGroup && whatsAppGroup.url_joiningWhatsAppGroups) {
            console.log("URL to iframe:", whatsAppGroup.url_joiningWhatsAppGroups);
        }
    }, [whatsAppGroup]);

    return (
        <div className='signup-wg-container'>
            <h1 className='signup-wg-title'>SignUp For The WhatsApp Group</h1>
            {whatsAppGroup && whatsAppGroup.url_joiningWhatsAppGroups && (
                <div className='signup-wg-form'
                    // dangerouslySetInnerHTML. זה מאפשר לנו להציג HTML (כמו <iframe>) מתוך משתנה בצורה דינמית.
                    dangerouslySetInnerHTML={{
                        __html: whatsAppGroup.url_joiningWhatsAppGroups
                    }}
                />
            )}
            <button className='signup-wg-return-btn' onClick={() => navigate('/WhatsAppGroup')}>Return to all WhatsApp Groups</button>
        </div>
    );
}


// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router'
// import { getByIdlGroupWhatsApp } from '../../slices/WhatsAppGroupSlice'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// export default function SignUpForTheWhatsAppGroup() {

//     const { id } = useParams();
//     const navigate = useNavigate();
//     const dispatch=useDispatch();
//     const whatsAppGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroup);

//     useEffect(() => {
//         dispatch(getByIdlGroupWhatsApp(id));
//     }, [dispatch]);


//     return (
//         <>
//             <div>SignUpForTheWhatsAppGroup</div>
//             {whatsAppGroup.url_joiningWhatsAppGroups && (
//                 <iframe
//                     src={whatsAppGroup.url_joiningWhatsAppGroups}
//                     width="640"
//                     height="1601"
//                     frameBorder="0"
//                     marginHeight="0"
//                     marginWidth="0"
//                     title={whatsAppGroup.nameWhatsAppGroups} // תן לכל iframe כותרת ייחודית
//                 >
//                     <p>Your browser does not support iframes.</p>
//                 </iframe>
//             )}
//             <button onClick={()=>navigate('/WhatsAppGroup')}>  return to all whatsAppGroup</button>
//         </>
//     )
// }

