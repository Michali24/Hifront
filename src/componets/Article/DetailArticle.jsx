// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { getArticleById } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';

// export default function DetailArticle() {

//     const navigate = useNavigate();
//     const { id } = useParams();

//     const ArticleDetailes = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getArticleById(id));
//     }, [dispatch]);

//     return (
//         <>
//             <div>DetailArticle</div>

//             <h1>Details:</h1>
//             {ArticleDetailes.title}
//             {ArticleDetailes.author}
//             {ArticleDetailes.content}
//             {ArticleDetailes.description}
//             {ArticleDetailes.PDFArticleFile}

//             <button onClick={() => navigate(`/Article/${ArticleDetailes.categoryOfArticles?.id}`)}>to return article</button>


//         </>
//     )
// };


//נסיון שליפת הPDF
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';
// import { Document, Page } from 'react-pdf';

// export default function DetailArticle() {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const ArticleDetails = useSelector((state) => state.article.Article);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getArticleById(id));
//   }, [dispatch, id]);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <>
//       <div>DetailArticle</div>

//       <h1>Details:</h1>
//       <p>Title: {ArticleDetails.title}</p>
//       <p>Author: {ArticleDetails.author}</p>
//       <p>Content: {ArticleDetails.content}</p>
//       <p>Description: {ArticleDetails.description}</p>
//       <p>PDF File: {ArticleDetails.PDFArticleFile}</p>

//       <button onClick={() => navigate(`/Article/${ArticleDetails.categoryOfArticles?.id}`)}>Return to Articles</button>

//       <Document file={ArticleDetails.PDFArticleFile || "somefile.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>

//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </>
//   );
// }


//נסיון 2
//הקוד מוריד את הקובץ PDF ולא מציג אותו
// import React, { useState, useEffect } from 'react';
// import { Document, Page } from 'react-pdf';

// export default function DetailArticle() {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfFile, setPdfFile] = useState(null);

//   // פונקציה להמיר מערך ביטים לקובץ PDF ולהוריד אותו
//   const handleDownloadPDF = (binaryData) => {
//     // המרת מערך הביטים ל-Blob
//     const blob = new Blob([binaryData], { type: 'application/pdf' });

//     // יצירת URL זמני להורדה
//     const url = URL.createObjectURL(blob);

//     // יצירת אלמנט <a> להורדה אוטומטית
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'article.pdf'; // שם הקובץ להורדה
//     a.click();

//     // שחרור ה-URL לאחר שהורד
//     URL.revokeObjectURL(url);
//   };

//   // נניח שיש לך את מערך הביטים, תוכל להוריד את הקובץ כך
//   useEffect(() => {
//     // לדוגמה, כאן המערך של הביטים (תוכל לקבל אותו ממקור נתונים כלשהו)
//     const binaryData = new Uint8Array([/* array of bytes */]);

//     // קריאה לפונקציה להוריד את הקובץ
//     handleDownloadPDF(binaryData);
//   }, []);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <>
//       <h1>PDF Document</h1>
//       <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </>
//   );
// }


//נסיון 3
//עובד בלי הכפתור חזרה..
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';
// import { Document, Page } from 'react-pdf';

// export default function DetailArticle() {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfFile, setPdfFile] = useState(null);

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const ArticleDetails = useSelector((state) => state.article.Article);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getArticleById(id));
//   }, [dispatch, id]);

//   // פונקציה להמיר מערך ביטים לקובץ PDF ולהוריד אותו
//   const handleDownloadPDF = (binaryData) => {
//     const blob = new Blob([binaryData], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);

//     // יצירת אלמנט <a> להורדה
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'article.pdf'; // שם הקובץ להורדה
//     a.click();

//     // שחרור ה-URL לאחר שהורד
//     URL.revokeObjectURL(url);
//   };

//   // הצגת הקובץ PDF
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <>
//       <div>DetailArticle</div>

//       <h1>Details:</h1>
//       <p>Title: {ArticleDetails.title}</p>
//       <p>Author: {ArticleDetails.author}</p>
//       <p>Content: {ArticleDetails.content}</p>
//       <p>Description: {ArticleDetails.description}</p>
//       <p>PDF File: {ArticleDetails.PDFArticleFile}</p>

//       {/* כפתור להורדה */}
//       <button onClick={() => handleDownloadPDF(ArticleDetails.PDFArticleFile)}>
//         Download Article
//       </button>

//       {/* הצגת קובץ PDF */}
//       <Document file={ArticleDetails.PDFArticleFile || "somefile.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>

//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button onClick={() => navigate(`/Article/${ArticleDetails.categoryOfArticles?.id}`)}>to return article</button>

//     </>
//   );
// }


//נסיון להצגת הקובץ PDF
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';
// import { Document, Page } from 'react-pdf';

// export default function DetailArticle() {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfFile, setPdfFile] = useState(null);

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const ArticleDetails = useSelector((state) => state.article.Article);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // שליפת המאמר על פי מזהה המאמר (id)
//     dispatch(getArticleById(id));
//   }, [dispatch, id]);

//   // פונקציה להמיר מערך ביטים לקובץ PDF ולהוריד אותו
//   const handleDownloadPDF = (binaryData) => {
//     const blob = new Blob([binaryData], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);

//     // יצירת אלמנט <a> להורדה
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'article.pdf'; // שם הקובץ להורדה
//     a.click();

//     // שחרור ה-URL לאחר שהורד
//     URL.revokeObjectURL(url);
//   };

//   // הצגת הקובץ PDF
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   // אם מאמר לא טוען, הצג הודעת טעינה
//   if (!ArticleDetails || !ArticleDetails.PDFArticleFile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>DetailArticle</div>

//       <h1>Details:</h1>
//       <p>Title: {ArticleDetails.title}</p>
//       <p>Author: {ArticleDetails.author}</p>
//       <p>Content: {ArticleDetails.content}</p>
//       <p>Description: {ArticleDetails.description}</p>

//       {/* כפתור להורדה */}
//       <button onClick={() => handleDownloadPDF(ArticleDetails.PDFArticleFile)}>
//         Download Article
//       </button>

//       {/* הצגת קובץ PDF */}
//       {ArticleDetails.PDFArticleFile && (
//         <Document
//           file={{ data: ArticleDetails.PDFArticleFile }}
//           onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//       )}

//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button onClick={() => navigate(`/Article/${ArticleDetails.categoryOfArticles?.id}`)}>
//         Return to Article List
//       </button>
//     </>
//   );
// }


//עוד נסיון
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';
// import { Document, Page } from 'react-pdf';

// export default function DetailArticle() {
//   const [numPages, setNumPages] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pdfFile, setPdfFile] = useState(null);

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const ArticleDetails = useSelector((state) => state.article.Article);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getArticleById(id));
//   }, [dispatch, id]);

//   // הדפסת המידע מ-Redux כדי לראות אם יש PDF
//   useEffect(() => {
//     console.log(ArticleDetails); // הדפסת הנתונים
//   }, [ArticleDetails]);

//   // אם יש PDF, נשמור אותו
//   useEffect(() => {
//     if (ArticleDetails && ArticleDetails.PDFArticleFile) {
//       setPdfFile(ArticleDetails.PDFArticleFile);
//     }
//   }, [ArticleDetails]);

//   const handleDownloadPDF = (binaryData) => {
//     if (!binaryData) {
//       alert("No PDF file available.");
//       return;
//     }

//     const blob = new Blob([binaryData], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);

//     // יצירת אלמנט <a> להורדה
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'article.pdf';
//     a.click();

//     URL.revokeObjectURL(url);
//   };

//   if (!ArticleDetails) {
//     return <div>Loading...</div>;
//   }

//   if (!ArticleDetails.PDFArticleFile) {
//     return <div>No PDF available for this article.</div>;
//   }

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <>
//       <div>DetailArticle</div>

//       <h1>Details:</h1>
//       <p>Title: {ArticleDetails.title}</p>
//       <p>Author: {ArticleDetails.author}</p>
//       <p>Content: {ArticleDetails.content}</p>
//       <p>Description: {ArticleDetails.description}</p>

//       {/* כפתור להורדה */}
//       <button onClick={() => handleDownloadPDF(pdfFile)}>
//         Download Article
//       </button>

//       {/* הצגת קובץ PDF */}
//       {ArticleDetails.PDFArticleFile ? (
//         <Document file={{ data: ArticleDetails.pdfarticleFile }} onLoadSuccess={onDocumentLoadSuccess}>
//           <Page pageNumber={pageNumber} />
//         </Document>
//       ) : (
//         <div>No PDF available</div>
//       )}

//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <button onClick={() => navigate(`/Article/${ArticleDetails.categoryOfArticles?.id}`)}>
//         Return to Article List
//       </button>
//     </>
//   );
// }


//נסיון נוסף
// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { getArticleById } from '../../slices/ArticleSlice';
// import { useSelector } from 'react-redux';

// export default function DetailArticle() {

//     const navigate = useNavigate();
//     const { id } = useParams();

//     const ArticleDetailes = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getArticleById(id));
//     }, [dispatch]);

//     return (
//         <>
//             <div>DetailArticle</div>

//             <h1>Details:</h1>
//             {ArticleDetailes.title}
//             {ArticleDetailes.author}
//             {ArticleDetailes.content}
//             {ArticleDetailes.description}
//             {ArticleDetailes.PDFArticleFile }

//             <button onClick={() => navigate(`/Article/${ArticleDetailes.categoryOfArticles?.id}`)}>to return article</button>


//         </>
//     )
// };


//הקוד עם הקוד של ינוןון נסיון איחוד 1
//זה נותן ביחרה של מאמרים ואנ רוצה שרק יהיה מאמר אחד
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice';
// import { Box, Button, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// // קומפוננטת DetailArticle עם השילוב של העלאת קבצים מה-localStorage
// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const ArticleDetailes = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id)); // שולח את ה-action כדי להביא את המאמר מהשרת
//     }, [dispatch, id]);

//     // הגדרת מצב לנתוני קבצים
//     const [files, setFiles] = useState([]);
//     const [selectedFileId, setSelectedFileId] = useState('');

//     // טוען קבצים מה-localStorage
//     useEffect(() => {
//         const storedFiles = localStorage.getItem('uploadedFiles');
//         if (storedFiles) {
//             setFiles(JSON.parse(storedFiles)); // אם יש קבצים ב-localStorage, טוענים אותם למצב
//         }
//     }, []);

//     // פונקציה לטיפול בהעלאת קבצים
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
//                         id: uuidv4(), // מזהה ייחודי לכל קובץ
//                         name: file.name,
//                         type: file.type,
//                         data: e.target.result // הנתונים עצמם
//                     });
//                 };
//                 reader.onerror = (error) => reject(error);
//                 reader.readAsDataURL(file); // קריאה כ-Base64
//             });
//         });

//         // עדכון הקבצים אחרי שהקבצים נקראו בהצלחה
//         Promise.all(readerPromises)
//             .then(results => {
//                 const updatedFiles = [...files, ...results];
//                 setFiles(updatedFiles);
//                 localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
//                 alert("הקבצים הועלו ונשמרו ב-localStorage!");
//             })
//             .catch(error => {
//                 console.error("שגיאה בקריאת הקבצים: ", error);
//                 alert("אירעה שגיאה במהלך העלאת הקבצים.");
//             });
//     };

//     // פונקציה לטיפול בשינוי הבחירה מתוך הרשימה הנפתחת
//     const handleSelectChange = (event) => {
//         setSelectedFileId(event.target.value);
//     };

//     // פונקציה לפתוח את הקובץ שנבחר בחלון חדש
//     const handleOpen = () => {
//         if (!selectedFileId) {
//             alert("בבקשה בחר קובץ לפתיחה.");
//             return;
//         }

//         const file = files.find(f => f.id === selectedFileId);
//         if (!file) {
//             alert("הקובץ שנבחר לא נמצא.");
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
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת הקובץ שנבחר
//     const handleDownload = () => {
//         if (!selectedFileId) {
//             alert("בבקשה בחר קובץ להורדה.");
//             return;
//         }

//         const file = files.find(f => f.id === selectedFileId);
//         if (!file) {
//             alert("הקובץ שנבחר לא נמצא.");
//             return;
//         }

//         // יצירת לינק זמני להורדת הקובץ
//         const link = document.createElement('a');
//         link.href = file.data;
//         link.download = file.name;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <>
//             {/* הצגת פרטי המאמר */}
//             <div>DetailArticle</div>
//             <h1>פרטי המאמר:</h1>
//             <div>{ArticleDetailes.title}</div>
//             <div>{ArticleDetailes.author}</div>
//             <div>{ArticleDetailes.content}</div>
//             <div>{ArticleDetailes.description}</div>
//             <div>
//                 {ArticleDetailes.PDFArticleFile && (
//                     <a href={ArticleDetailes.PDFArticleFile} target="_blank" rel="noopener noreferrer">
//                         קובץ PDF להורדה
//                     </a>
//                 )}
//             </div>

//             <Button onClick={() => navigate(`/Article/${ArticleDetailes.categoryOfArticles?.id}`)}>
//                 חזור למאמר
//             </Button>

//             {/* העלאת קבצים */}
//             <input
//                 type="file"
//                 accept="image/*,application/pdf,text/plain"
//                 onChange={handleFileChange}
//                 multiple
//                 style={{ marginBottom: '20px' }}
//             />

//             {files.length > 0 && (
//                 <Box>
//                     {/* בחירת קובץ מתוך רשימה */}
//                     <FormControl fullWidth variant="outlined" size="small" style={{ marginBottom: '20px' }}>
//                         <InputLabel id="file-select-label">בחר קובץ</InputLabel>
//                         <Select
//                             labelId="file-select-label"
//                             id="file-select"
//                             value={selectedFileId}
//                             onChange={handleSelectChange}
//                             label="בחר קובץ"
//                         >
//                             {files.map(file => (
//                                 <MenuItem key={file.id} value={file.id}>
//                                     {file.name}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>

//                     {/* כפתור לפתוח את הקובץ */}
//                     <Button onClick={handleOpen} variant="contained" color="primary" style={{ marginRight: '10px' }}>
//                         פתח קובץ
//                     </Button>

//                     {/* כפתור להורדת הקובץ */}
//                     <Button onClick={handleDownload} variant="contained" color="secondary">
//                         הורד קובץ
//                     </Button>
//                 </Box>
//             )}

//             {/* סוציאל מדיה */}
//             <Box display="flex" justifyContent="center" alignItems="center">
//                 <IconButton component="a" href="mailto:example@example.com" color="inherit">
//                     <EmailIcon />
//                 </IconButton>

//                 <IconButton component="a" href="https://wa.me/1234567890" target="_blank" color="inherit">
//                     <WhatsAppIcon />
//                 </IconButton>

//                 <IconButton component="a" href="https://www.instagram.com" target="_blank" color="inherit">
//                     <InstagramIcon />
//                 </IconButton>
//             </Box>
//         </>
//     );
// }


//נסיון 2
//13-12-24
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice';
// import { Box, Button } from '@mui/material';

// // קומפוננטת DetailArticle עם אפשרויות צפייה והורדה של המאמר
// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const ArticleDetailes = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id)); // שולח את ה-action כדי להביא את המאמר מהשרת
//     }, [dispatch, id]);

//     // פונקציה לצפייה בקובץ PDF במידה ויש
//     const handleViewPDF = () => {
//         if (ArticleDetailes.PDFArticleFile) {
//             window.open(ArticleDetailes.PDFArticleFile, '_blank');
//         } else {
//             alert("אין קובץ PDF לצפייה.");
//         }
//     };

//     // פונקציה להורדת קובץ ה-PDF אם קיים
//     const handleDownloadPDF = () => {
//         if (ArticleDetailes.PDFArticleFile) {
//             const link = document.createElement('a');
//             link.href = ArticleDetailes.PDFArticleFile;
//             link.download = `article_${id}.pdf`; // שם קובץ ברירת מחדל
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         } else {
//             alert("אין קובץ PDF להורדה.");
//         }
//     };

//     return (
//         <>
//             {/* הצגת פרטי המאמר */}
//             <div>DetailArticle</div>
//             <h1>פרטי המאמר:</h1>
//             <div><strong>כותרת:</strong> {ArticleDetailes.title}</div>
//             <div><strong>מחבר:</strong> {ArticleDetailes.author}</div>
//             <div><strong>תוכן:</strong> {ArticleDetailes.content}</div>
//             <div><strong>תיאור:</strong> {ArticleDetailes.description}</div>

//             {/* כפתור חזרה למאמר */}
//             <Button onClick={() => navigate(`/Article/${ArticleDetailes.categoryOfArticles?.id}`)}>
//                 חזור למאמר
//             </Button>

//             {/* כפתור לצפייה בקובץ PDF */}
//             <Button onClick={handleViewPDF} variant="contained" color="primary" style={{ marginTop: '20px' }}>
//                 צפה במאמר
//             </Button>

//             {/* כפתור להורדת קובץ PDF */}
//             <Button onClick={handleDownloadPDF} variant="contained" color="secondary" style={{ marginTop: '10px' }}>
//                 הורד את המאמר
//             </Button>
//         </>
//     );
// }


//ניסיון 3
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress } from '@mui/material';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש
//     const handleOpenInNewTab = () => {
//         if (!article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }


//         // יצירת Blob מתוך המערך ביטים
//         // const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         // const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${article.pdfarticleFile}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         // יצירת Blob מתוך המערך ביטים להורדה
//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <>
//             <Box>
//                 <h1>פרטי המאמר</h1>
//                 <p>{article.title}</p>
//                 <p>{article.author}</p>
//                 <p>{article.content}</p>
//                 <p>{article.description}</p>
//                 pdfarticleFile: <p>{article.pdfarticleFile}</p>



//                 {article.pdfarticleFile ? (
//                     <>
//                         {/* הצגת המאמר */}
//                         <Button onClick={handleOpenInNewTab} variant="contained" color="primary">
//                             פתח בטאב חדש
//                         </Button>

//                         <Button onClick={handleDownload} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
//                             הורד את המאמר
//                         </Button>
//                     </>
//                 ) : (
//                     <p>לא נמצאו פרטי המאמר.</p>
//                 )}

//                 <Button onClick={() => navigate(`/articles`)} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
//                     חזור לרשימת המאמרים
//                 </Button>
//             </Box>
//         </>
//     );
// }


//ניסין 4
///מציין שיש לו בעיה בטעינה של הקובץ
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress } from '@mui/material';

// export default function DetailArticle() {
//     const navigate = useNavigate();
//     const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

//     // אחזור פרטי המאמר מה-state של Redux
//     const article = useSelector((state) => state.article.Article);
//     const dispatch = useDispatch();

//     const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
//     const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

//     // טוען את המאמר ברגע שהקומפוננטה נטענת
//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(response => {
//                 setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("לא הצלחנו להוריד את המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     // פונקציה לפתוח את המאמר בטאב חדש
//     const handleOpenInNewTab = () => {
//         if (!article.pdfarticleFile) {
//             alert("לא ניתן לפתוח את המאמר כעת.");
//             return;
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newTab = window.open();
//         if (newTab) {
//             newTab.document.write(`
//                 <html>
//                     <head><title>המאמר</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newTab.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
//         }
//     };

//     // פונקציה להורדת המאמר
//     const handleDownload = () => {
//         if (!article.pdfarticleFile) {
//             alert("לא ניתן להוריד את המאמר כעת.");
//             return;
//         }

//         // יצירת Blob מתוך מערך הביטים
//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });

//         // יצירת לינק להורדה
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = 'article.pdf'; // שם הקובץ להורדה

//         // ביצוע ההורדה
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <>
//             <Box>
//                 <h1>פרטי המאמר</h1>
//                 <p>{article.title}</p>
//                 <p>{article.author}</p>
//                 <p>{article.content}</p>
//                 <p>{article.description}</p>
//                 <p>pdfarticleFile: {article.pdfarticleFile ? "נמצא" : "לא נמצא"}</p>

//                 {article.pdfarticleFile ? (
//                     <>
//                         {/* כפתור לפתוח את ה-PDF בטאב חדש */}
//                         <Button onClick={handleOpenInNewTab} variant="contained" color="primary">
//                             פתח בטאב חדש
//                         </Button>

//                         {/* כפתור להורדת המאמר */}
//                         <Button onClick={handleDownload} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
//                             הורד את המאמר
//                         </Button>
//                     </>
//                 ) : (
//                     <p>לא נמצאו פרטי המאמר.</p>
//                 )}

//                 <Button onClick={() => navigate(`/articles`)} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
//                     חזור לרשימת המאמרים
//                 </Button>
//             </Box>
//         </>
//     );
// }


//ניסיון מספר 5
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById } from '../../slices/ArticleSlice'; // פעולה לשליפת מאמר לפי ID
import { Box, Button, CircularProgress } from '@mui/material';

export default function DetailArticle() {
    const navigate = useNavigate();
    const { id } = useParams(); // קבלת ה-ID של המאמר מה-URL

    // אחזור פרטי המאמר מה-state של Redux
    const article = useSelector((state) => state.article.Article);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true); // מצב טוען בזמן שמביאים את המאמר
    const [articleData, setArticleData] = useState(null); // מצב לאחסון המאמר

    // טוען את המאמר ברגע שהקומפוננטה נטענת
    useEffect(() => {
        dispatch(getArticleById(id))
            .then(response => {
                setArticleData(response.payload); // מניח שהמאמר שנשלף נמצא ב-payload
                setLoading(false);
            })
            .catch(error => {
                console.error("שגיאה בטעינת המאמר:", error);
                alert("לא הצלחנו להוריד את המאמר.");
                setLoading(false);
            });
    }, [dispatch, id]);

    // פונקציה לפתוח את המאמר בטאב חדש מתוך מערך הביטים
    const handleOpenInNewTab = () => {
        if (!article.pdfarticleFile) {
            alert("לא ניתן לפתוח את המאמר כעת.");
            return;
        }

        // יצירת Blob מתוך מערך הביטים
        const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const newTab = window.open();
        if (newTab) {
            newTab.document.write(`
                <html>
                    <head><title>המאמר</title></head>
                    <body style="margin:0;">
                        <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
                    </body>
                </html>
            `);
            newTab.document.close();
        } else {
            alert("לא ניתן לפתוח טאב חדש. אנא בדוק את הגדרות הדפדפן שלך.");
        }
    };

    // פונקציה להורדת המאמר
    const handleDownload = () => {
        if (!article.pdfarticleFile) {
            alert("לא ניתן להוריד את המאמר כעת.");
            return;
        }

        // יצירת Blob מתוך מערך הביטים להורדה
        const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'article.pdf'; // שם הקובץ להורדה

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Box>
                <h1>פרטי המאמר</h1>
                <p>{article.title}</p>
                <p>{article.author}</p>
                <p>{article.content}</p>
                <p>{article.description}</p>
                <p>pdfarticleFile: {article.pdfarticleFile ? "נמצא" : "לא נמצא"}</p>

                {article.pdfarticleFile ? (
                    <>
                        {/* כפתור לפתוח את ה-PDF בטאב חדש */}
                        <Button onClick={handleOpenInNewTab} variant="contained" color="primary">
                            פתח בטאב חדש
                        </Button>

                        {/* כפתור להורדת המאמר */}
                        <Button onClick={handleDownload} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
                            הורד את המאמר
                        </Button>
                    </>
                ) : (
                    <p>לא נמצאו פרטי המאמר.</p>
                )}

                <Button onClick={() => navigate(`/articles`)} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                    חזור לרשימת המאמרים
                </Button>
            </Box>
        </>
    );
}


//ניסיון 6
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פונקציה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress } from '@mui/material';

// export default function ArticleDetail() {
//     const { id } = useParams(); // קבלת מזהה המאמר מה-URL
//     const dispatch = useDispatch();

//     const article = useSelector((state) => state.article.Article); // קבלת המאמר מ-Redux
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .unwrap()
//             .then(() => setLoading(false))
//             .catch((error) => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("שגיאה בטעינת המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch, id]);

//     const handleOpenPDF = () => {
//         if (!article.pdfarticleFile) {
//             alert("קובץ ה-PDF לא נמצא.");
//             return;
//         }

//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         const url = URL.createObjectURL(blob);

//         const newWindow = window.open();
//         if (newWindow) {
//             newWindow.document.write(`
//                 <html>
//                     <head><title>${article.title}</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${url}" style="border: none; width: 100%; height: 100vh;" allowfullscreen></iframe>
//                     </body>
//                 </html>
//             `);
//             newWindow.document.close();
//         } else {
//             alert("לא ניתן לפתוח טאב חדש. בדוק את הגדרות הדפדפן.");
//         }
//     };

//     const handleDownloadPDF = () => {
//         if (!article.pdfarticleFile) {
//             alert("קובץ ה-PDF לא נמצא.");
//             return;
//         }

//         const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//         const link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${article.title || 'article'}.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     if (!article) {
//         return <Box textAlign="center">לא נמצאו פרטי מאמר.</Box>;
//     }

//     return (
//         <Box p={4}>
//             <h1>{article.title}</h1>
//             <h3>מאת: {article.author}</h3>
//             <p>{article.description}</p>
//             <p>{article.content}</p>

//             <Box mt={4}>
//                 <Button variant="contained" color="primary" onClick={handleOpenPDF}>
//                     פתח PDF בטאב חדש
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={handleDownloadPDF} style={{ marginLeft: '10px' }}>
//                     הורד PDF
//                 </Button>
//             </Box>
//         </Box>
//     );
// }


//נסיון 7 -שלי להמיר ידנית מול הקוד של ינון
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getArticleById } from '../../slices/ArticleSlice'; // פונקציה לשליפת מאמר לפי ID
// import { Box, Button, CircularProgress } from '@mui/material';

// export default function ArticleDetail() {
//     const { id } = useParams(); // קבלת מזהה המאמר מה-URL
//     const dispatch = useDispatch();

//     //ynon
//     const [files, setFiles] = useState([]);
//     const [selectedFileId, setSelectedFileId] = useState('');

//     const article = useSelector((state) => state.article.Article); // קבלת המאמר מ-Redux
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         dispatch(getArticleById(id))
//             .then(() => setLoading(false))
//             .catch((error) => {
//                 console.error("שגיאה בטעינת המאמר:", error);
//                 alert("שגיאה בטעינת המאמר.");
//                 setLoading(false);
//             });
//     }, [dispatch]);

//     //ynon
//     useEffect(() => {
//         const storedFiles = article.PDFArticleFile;
//         if (storedFiles) {
//             setFiles(JSON.parse(storedFiles));
//         }
//     }, []);

//     //לזכור לשנות שאין בחירה!!!!!!!
//     // Handler for dropdown selection change
//     const handleSelectChange = (event) => {
//         setSelectedFileId(event.target.value);
//     };

//     const handleOpen = () => {
//         if (!selectedFileId) {
//             alert("Please select a file to open.");
//             return;
//         }

//         const file = article.PDFArticleFile;
//         if (!file) {
//             alert("Selected file not found.");
//             return;
//         }

//         const newWindow = window.open();
//         if (newWindow) {
//             newWindow.document.write(`
//                 <html>
//                      //להורדי את השורה הזו..
//                     //<head><title>${file.name}</title></head>
//                     <body style="margin:0;">
//                         <iframe src="${file}" style="border: none; width: 100%; height: 100%;" allowfullscreen></iframe>
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

//         const file = article.PDFArticleFile;
//         if (!file) {
//             alert("Selected file not found.");
//             return;
//         }

//         // Create a temporary link element
//         const link = document.createElement('a');
//         link.href = article.PDFArticleFile;
//         link.download = file.name;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     // const handleDownloadPDF = () => {
//     //     if (!article.pdfarticleFile) {
//     //         alert("קובץ ה-PDF לא נמצא.");
//     //         return;
//     //     }

//     //     const blob = new Blob([new Uint8Array(article.pdfarticleFile)], { type: 'application/pdf' });
//     //     const link = document.createElement('a');
//     //     link.href = URL.createObjectURL(blob);
//     //     link.download = `${article.title || 'article'}.pdf`;
//     //     document.body.appendChild(link);
//     //     link.click();
//     //     document.body.removeChild(link);
//     // };

//     // if (loading) {
//     //     return (
//     //         <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//     //             <CircularProgress />
//     //         </Box>
//     //     );
//     // }

//     // if (!article) {
//     //     return <Box textAlign="center">לא נמצאו פרטי מאמר.</Box>;
//     // }

//     return (
//         <Box p={4}>
//             <h1>{article.title}</h1>
//             <h3>מאת: {article.author}</h3>
//             <p>{article.description}</p>
//             <p>{article.content}</p>

//             {/* <Box mt={4}>
//                 <Button variant="contained" color="primary" onClick={handleOpenPDF}>
//                     פתח PDF בטאב חדש
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={handleDownloadPDF} style={{ marginLeft: '10px' }}>
//                     הורד PDF
//                 </Button>
//             </Box> */}


//             {article.PDFArticleFile && (
//                 <Box ml={2} mt={{ xs: 1, sm: 0 }} minWidth={200}>
//                     <FormControl fullWidth variant="outlined" size="small" style={{ color: 'white' }}>
//                         <InputLabel id="file-select-label" style={{ color: 'white' }}>Select File</InputLabel>

//                         <button onChange={handleSelectChange(article.PDFArticleFile)}>select</button>

//                         {files.map(file => (
//                             <MenuItem key={file.id} value={file.id}>
//                                 {file.name}
//                                 {/* Optional: Add a remove button/icon */}
//                                 {/* <IconButton 
//                                             size="small" 
//                                             onClick={(e) => { 
//                                                 e.stopPropagation(); 
//                                                 handleRemove(file.id); 
//                                             }} 
//                                             color="inherit"
//                                         >
//                                             &times;
//                                         </IconButton> */}
//                             </MenuItem>
//                         ))}
//                         {selectedFileId && (
//                             <>
//                                 <Box ml={2} mt={{ xs: 1, sm: 0 }}>
//                                     <Button
//                                         variant="contained"
//                                         color="secondary"
//                                         onClick={handleOpen}
//                                     >
//                                         Open File
//                                     </Button>
//                                 </Box>
//                                 <Box ml={2} mt={{ xs: 1, sm: 0 }}>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         onClick={handleDownload}
//                                     >
//                                         Download File
//                                     </Button>
//                                 </Box>
//                             </>
//                         )}

//                     </FormControl>
//                 </Box>
//             )}

//         </Box>
//     );
// }
