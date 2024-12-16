import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, IconButton, Link } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const FooterStyle = styled(Box)(({ theme }) => ({
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '8px 0',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: '1100'
  }));

export default function Footer() {
    return (
        <footer display="block">
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" bgcolor="#1a1a2e" color="white">
                <Box>© 2024 Hitechistim. All rights reserved.</Box>
                <IconButton component="a" href="mailto:example@example.com" color="inherit">
                    <EmailIcon />
                </IconButton>
                <IconButton component="a" href="https://wa.me/1234567890" target="_blank" color="inherit">
                    <WhatsAppIcon />
                </IconButton>
                <IconButton component="a" href="https://instagram.com/yourprofile" target="_blank" color="inherit">
                    <InstagramIcon />
                </IconButton>
                <Link href="/contact" color="inherit" ml={2}>צור קשר</Link>
            </Box>
        </footer>
    )
}

//הקוד של ינון
// import React, { useState, useEffect } from 'react';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { Box, IconButton, Link, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { styled } from '@mui/system';
// import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

// import { getArticleById } from '../../slices/ArticleSlice'; 
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// // Styled component for the footer background
// const FooterStyle = styled(Box)(({ theme }) => ({
//     backgroundColor: '#1a1a2e',
//     color: 'white',
//     padding: '8px 0',
//     position: 'fixed',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     textAlign: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     zIndex: '1100'
// }));

// export default function Footer() {

//     const dispatch=useDispatch()
//     // State to track uploaded files
//     const [files, setFiles] = useState([]);

//     // State to track the selected file from the dropdown
//     const [selectedFileId, setSelectedFileId] = useState('');

//     // Load stored files from localStorage when the component mounts
//     useEffect(() => {
//         const storedFiles = localStorage.getItem('uploadedFiles');
//         if (storedFiles) {
//             setFiles(JSON.parse(storedFiles));
//         }
//     }, []);

//     // Handler for file uploads-מטפל להלאעת קבצים
//     const handleFileChange = (event) => {
//         const uploadedFiles = event.target.files;
//         if (!uploadedFiles) return;

//         const filesArray = Array.from(uploadedFiles);
//         const newFiles = [];

//         const readerPromises = filesArray.map(file => {
//             return new Promise((resolve, reject) => {
//                 const reader = new FileReader();
//                 reader.onload = (e) => {
//                     resolve({
//                         id: uuidv4(), // Assign a unique ID
//                         name: file.name,
//                         type: file.type,
//                         data: e.target.result
//                     });
//                 };
//                 reader.onerror = (error) => reject(error);
//                 reader.readAsDataURL(file);
//             });
//         });

//         // Once all files are read, update state and localStorage
//         Promise.all(readerPromises)
//             .then(results => {
//                 const updatedFiles = [...files, ...results];
//                 setFiles(updatedFiles);
//                 localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
//                 alert("Files have been uploaded and saved to localStorage!");
//             })
//             .catch(error => {
//                 console.error("Error reading files: ", error);
//                 alert("An error occurred while uploading files.");
//             });
//     };

//     // Handler for dropdown selection change
//     const handleSelectChange = (event) => {
//         setSelectedFileId(event.target.value);
//     };

//     // Handler to open the selected file in a new tab
//     const handleOpen = () => {
//         if (!selectedFileId) {
//             alert("Please select a file to open.");
//             return;
//         }

//         const file = files.find(f => f.id === selectedFileId);
//         if (!file) {
//             alert("Selected file not found.");
//             return;
//         }

//         const newWindow = window.open();
//         if (newWindow) {
//             newWindow.document.write(`
//                 <html>
//                     <head><title>${file.name}</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${file.data}" style="border: none; width: 100%; height: 100%;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newWindow.document.close();
//         } else {
//             alert("Unable to open a new tab. Please check your browser settings.");
//         }
//     };

//     // Handler to download the selected file
//     const handleDownload = () => {
//         if (!selectedFileId) {
//             alert("Please select a file to download.");
//             return;
//         }

//         const file = files.find(f => f.id === selectedFileId);
//         if (!file) {
//             alert("Selected file not found.");
//             return;
//         }

//         // Create a temporary link element
//         const link = document.createElement('a');
//         link.href = file.data;
//         link.download = file.name;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     // Optional: Handler to remove a file
//     const handleRemove = (id) => {
//         if (!window.confirm("Are you sure you want to delete this file?")) return;

//         const updatedFiles = files.filter(file => file.id !== id);
//         setFiles(updatedFiles);
//         localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
//         if (selectedFileId === id) setSelectedFileId('');
//         alert("File has been removed.");
//     };

//     return (
//         <>
//             {/* Optional styled footer background */}
//             <FooterStyle />

//             {/* Main footer content */}
//             <Box
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//                 position="fixed"
//                 bottom={0}
//                 left={0}
//                 width="100%"
//                 bgcolor="#1a1a2e"
//                 color="white"
//                 paddingTop={1}
//                 paddingBottom={1}
//                 zIndex={1100}
//                 flexWrap="wrap" // Allows wrapping on smaller screens
//             >
//                 {/* Copyright */}
//                 <Box mr={2}>© 2024 Pluralsight. All rights reserved.</Box>

//                 {/* Social Media Icons */}
//                 <IconButton component="a" href="mailto:example@example.com" color="inherit">
//                     <EmailIcon />
//                 </IconButton>

//                 <IconButton component="a" href="https://wa.me/1234567890" target="_blank" color="inherit">
//                     <WhatsAppIcon />
//                 </IconButton>

//                 <IconButton component="a" href="https://instagram.com/yourprofile" target="_blank" color="inherit">
//                     <InstagramIcon />
//                 </IconButton>

//                 {/* Contact Link */}
//                 <Link href="/Concat" color="inherit" ml={2}>צור קשר</Link>

//                 {/* File Upload Section */}
//                 <Box ml={2} mt={{ xs: 1, sm: 0 }}>
//                     <input
//                         type="file"
//                         accept="image/*,application/pdf,text/plain"
//                         onChange={handleFileChange}
//                         multiple // Allow multiple file selection
//                         style={{ color: 'white' }}
//                     />
//                 </Box>

//                 {/* Dropdown Menu for Selecting Files */}
//                 {files.length > 0 && (
//                     <Box ml={2} mt={{ xs: 1, sm: 0 }} minWidth={200}>
//                         <FormControl fullWidth variant="outlined" size="small" style={{ color: 'white' }}>
//                             <InputLabel id="file-select-label" style={{ color: 'white' }}>Select File</InputLabel>
//                             <Select
//                                 labelId="file-select-label"
//                                 id="file-select"
//                                 value={selectedFileId}
//                                 onChange={handleSelectChange}
//                                 label="Select File"
//                                 style={{ color: 'white' }}
//                             >
//                                 {files.map(file => (
//                                     <MenuItem key={file.id} value={file.id}>
//                                         {file.name}
//                                         {/* Optional: Add a remove button/icon */}
//                                         {/* <IconButton 
//                                             size="small" 
//                                             onClick={(e) => { 
//                                                 e.stopPropagation(); 
//                                                 handleRemove(file.id); 
//                                             }} 
//                                             color="inherit"
//                                         >
//                                             &times;
//                                         </IconButton> */}
//                                     </MenuItem>
//                                 ))}
//                             </Select>
//                         </FormControl>
//                     </Box>
//                 )}

//                 {/* Open and Download Buttons */}
//                 {selectedFileId && (
//                     <>
//                         <Box ml={2} mt={{ xs: 1, sm: 0 }}>
//                             <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 onClick={handleOpen}
//                             >
//                                 Open File
//                             </Button>
//                         </Box>
//                         <Box ml={2} mt={{ xs: 1, sm: 0 }}>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={handleDownload}
//                             >
//                                 Download File
//                             </Button>
//                         </Box>
//                     </>
//                 )}
//             </Box>
//         </>
//     );
// }
