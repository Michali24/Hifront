import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWhatsAppGroupList } from '../../slices/WhatsAppGroupSlice';
import { useNavigate } from 'react-router';

export default function WhatsAppGroup() {

    const WhatsAppListGroup = useSelector((state) => state.whatsAppGroup.whatsAppGroupList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllWhatsAppGroupList());
    }, [dispatch]);



    return (
        <>
            <div>WhatsAppGroup</div>
            <ul>
                {WhatsAppListGroup.map((whatsApp_Group) => (
                    <li key={whatsApp_Group.id}>
                        {whatsApp_Group.nameWhatsAppGroups}<br></br>
                        {whatsApp_Group.discriptionWhatsAppGroups}
                        <button onClick={() => navigate(`/SignUpForTheWhatsAppGroup/${whatsApp_Group.id}`)}>register</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
