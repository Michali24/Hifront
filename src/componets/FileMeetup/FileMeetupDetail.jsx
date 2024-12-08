import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFileMeeetupById } from '../../slices/FileMeetupSlice';
import { Mms } from '@mui/icons-material';

export default function FileMeetupDetail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileMeetup = useSelector((state) => state.fileMeetup.fileMeetup);


    useEffect(() => {
        dispatch(getFileMeeetupById(id));
    }, [dispatch]);


    return (
        <>
            <div>FileMeetupDetail</div>
            <p>name:{fileMeetup.name}</p>
            <p> typeFile:{fileMeetup.typeFile}</p>
            {/* להציג את התמונה מהDB */}
            <p> url_file:{fileMeetup.url_file}</p>
            <button onClick={() => navigate('/AddFileMeetup')}>add more file</button>
            <button onClick={() => navigate('/GalleryCategoryList')}>back to GalleryCategoryList</button>
        </>
    )
}
