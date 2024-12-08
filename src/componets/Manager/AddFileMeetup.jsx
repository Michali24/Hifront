import React, { useState } from 'react';
import { addFileMeeetup } from '../../slices/FileMeetupSlice';
import { useDispatch } from 'react-redux';

export default function AddFileMeetup() {

    const dispatch = useDispatch();
    //לא שדה חובה
    const [name, setName] = useState('');
    //לא שדה חובה
    const [typeFile, setTypeFile] = useState('');
    //חובה
    const [url_file, setUrl_file] = useState('');

    function handleForm(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('fileGalleryCategory', JSON.stringify({
            name,
            typeFile,

        }));
        formData.append('file', url_file);

        console.log('Submitting GalleryCategory with File:', formData);

        dispatch(addFileMeeetup(formData));
    }


    return (
        <>
            <div>AddFileMeetup</div>
            <form onSubmit={handleForm}>
                <input
                    type="file"
                    name="url_file"
                    placeholder="Enter the url_file "
                    value={url_file}
                    onChange={(e) => setUrl_file(e.target.value)}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter the name name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="typeFile"
                    placeholder="Enter the name typeFile"
                    value={typeFile}
                    onChange={(e) => setTypeFile(e.target.value)}

                />
                <button type="submit">Submit a new Gallery Category</button>
            </form>

        </>
    )
}
